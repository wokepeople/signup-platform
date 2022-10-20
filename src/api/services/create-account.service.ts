import { Language } from "@suid/icons-material";
import { useCreateLead } from "../../hooks/use-create-lead.hook";
import { setLoading } from "../../store/loading.store";
import { toCreatePerson } from "../converters/converters/person.converter";
import { toCreateUserRequest } from "../converters/converters/user.converter";
import { CreateUserForm } from "../converters/type/create-user-form.type";
import { GatewayException } from "../core/exceptions/gateway-exception.exception";
import {
  findAllRoles,
  addUserToAccountWithRoleAndPerson,
  createAccount,
} from "../gateway/account/account.gateway";
import { createOrUpdatePerson } from "../gateway/person/person.gateway";
import { createUser } from "../gateway/security/security.gateway";
import { userSignUpCareerEvent } from "./google-analytics.service";

export const createCarrerAccount = (createUserForm: CreateUserForm) => {
  return new Promise<void>((res, rej) => {
    const { createLead } = useCreateLead();
    setLoading(true)
    findAllRoles().then((a) => {
      if (a instanceof GatewayException) {
        setLoading(false);
        rej();
      } else {
        const ownerRole = a.find((role) => role.name === "OWNER");

        if (!ownerRole) {
          setLoading(false);
          rej();
        } else {
          const createUserRequest = toCreateUserRequest(createUserForm);

          createUser(createUserRequest).then((b) => {
            if (b instanceof GatewayException) {
              setLoading(false);
              rej();
              if (b.code === "409") {
              } else {
              }
            } else {
              createOrUpdatePerson(toCreatePerson(createUserForm), {
                headers: { "X-Tenant-Id": "WOKE_CAREER" },
              }).then((c) => {
                if (c instanceof GatewayException) {
                  setLoading(false);
                  rej();
                } else {
                  createAccount({
                    name: "Minha carreira",
                    tenant_id: "WOKE_CAREER",
                    type: "DEVELOPMENT",
                    enabled: true,
                  }).then((d) => {
                    if (d instanceof GatewayException) {
                      rej();
                      setLoading(false);
                    } else {
                      addUserToAccountWithRoleAndPerson({
                        user: { id: b.user.id || "" },
                        account: { id: d.id || "" },
                        role: { id: ownerRole.id || "" },
                        person: { id: c.id },
                      }).then((e) => {
                        if (e instanceof GatewayException) {
                          setLoading(false);
                        } else {
                          userSignUpCareerEvent(b.user.id);
                          createLead(
                            createUserRequest.name,
                            createUserRequest.last_name,
                            createUserRequest.email,
                            createUserRequest.functional_area
                              ? createUserRequest.functional_area["PT_BR"]
                              : undefined,
                            createUserRequest.level
                              ? createUserRequest.level["PT_BR"]
                              : undefined,
                            createUserRequest.country ?? undefined,
                            createUserRequest.current_position ?? undefined,
                            createUserRequest.current_company ?? undefined
                          );
                          res();
                          setLoading(false);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  });
};
