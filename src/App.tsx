import Stack from "@suid/material/Stack";
import TextField from "@suid/material/TextField";
import Toastify from "toastify-js";
import { createSignal, Match, Setter, Show, Switch } from "solid-js";
import { PrimaryButton } from "./components/primary-button";
import { inputModel } from "./forms/utils";
import * as SelectStore from "./store/select.store";
import { SelectItem } from "./store/select.store";
import { levels } from "./store/items/levels";
import { Selector } from "./components/selector";
import { functionalAreas } from "./store/items/functional-areas";
import { countries } from "./store/items/countries";
import IconButton from "@suid/material/IconButton";
import {
  ChevronLeft,
  ExpandMore,
  Visibility,
  VisibilityOff,
} from "@suid/icons-material";
import Box from "@suid/material/Box";
import { createTheme, ThemeProvider } from "@suid/material";
import { grey, red } from "@suid/material/colors";
import Typography from "@suid/material/Typography";
import { CreateUserForm } from "./api/converters/type/create-user-form.type";
import { createCarrerAccount } from "./api/services/create-account.service";
import { GatewayException } from "./api/core/exceptions/gateway-exception.exception";
import { getLoading } from "./store/loading.store";
import Modal from "@suid/material/Modal";
import CircularProgress from "@suid/material/CircularProgress";
import Link from "@suid/material/Link";

export type FormStep = "basic_infos" | "professional_infos" | "success";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: grey[700],
    },
  },
});

export default function App() {
  const [getStep, setStep] = createSignal<FormStep>("basic_infos");

  // Step 1
  const firstNameInput = inputModel("firstName");
  const lastNameInput = inputModel("lastName");
  const emailInput = inputModel("email");
  const passwordInput = inputModel("password");

  const [showPassword, setShowPassword] = createSignal(false);

  //Step 2
  const currentPositionInput = inputModel("currentPosition");
  const levelInput = inputModel("level");
  const functionalAreaInput = inputModel("functionalArea");
  const currentCompanyInput = inputModel("currentCompany");
  const countryInput = inputModel("country");

  const isFormValid = () => {
    if (getStep() === "basic_infos") {
      return [firstNameInput, lastNameInput, emailInput, passwordInput].every(
        (e) => e.valid()
      );
    }
    if (getStep() === "professional_infos") {
      return [
        currentPositionInput,
        levelInput,
        currentCompanyInput,
        countryInput,
      ].every((e) => e.valid());
    }
  };

  const registerNewUser = async () => {
    const createUserForm: CreateUserForm = {
      email: emailInput.getValue(),
      name: firstNameInput.getValue(),
      last_name: lastNameInput.getValue(),
      password: passwordInput.getValue(),
      country: countryInput.getValue(),
      current_position: currentPositionInput.getValue(),
      functional_area: functionalAreas.find(
        (e) => e.label === functionalAreaInput.getValue()
      ).value,
      current_company: currentCompanyInput.getValue(),
      level: levels.find((e) => e.label === levelInput.getValue()).value,
    };

    const response = await createCarrerAccount(createUserForm).catch(
      () => new GatewayException("ocorreu um erro", "erro")
    );

    if (response instanceof GatewayException) {
      Toastify({
        text: "ocorreu um erro ao criar a conta.",
        duration: 3000,
        position: "center",
        style: {
          fontFamily: "Roboto, Helvetica, sans-serif",
          color: "white",
          background: red[500],
        },
      }).showToast();
      return;
    }
    setStep("success");
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    if (getStep() === "basic_infos") {
      setStep("professional_infos");
      return;
    }
    await registerNewUser();
  };

  const openSelection = (items: SelectItem[], setter: Setter<string>) => {
    SelectStore.setItems(items, (item) => {
      setter(item.label);
    });
    SelectStore.showStore(true);
  };

  const openSignin = () => {
    window
      .open(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/career/signin`,
        "_blank"
      )
      .focus();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box p="1rem">
        <form onSubmit={handleSubmit} action="javascript:null">
          <Stack direction="column" spacing={"0.75rem"}>
            <Switch>
              <Match when={getStep() === "basic_infos"}>
                <TextField
                  value={firstNameInput._inputProps.value()}
                  onChange={firstNameInput._inputFunctions.onChange}
                  onBlur={firstNameInput._inputFunctions.onBlur}
                  helperText={firstNameInput._inputProps.helperText()}
                  error={firstNameInput._inputProps.error()}
                  id="first_name"
                  label="nome"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  value={lastNameInput._inputProps.value()}
                  onChange={lastNameInput._inputFunctions.onChange}
                  onBlur={lastNameInput._inputFunctions.onBlur}
                  helperText={lastNameInput._inputProps.helperText()}
                  error={lastNameInput._inputProps.error()}
                  id="last_name"
                  label="sobrenome"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  value={emailInput._inputProps.value()}
                  onChange={emailInput._inputFunctions.onChange}
                  onBlur={emailInput._inputFunctions.onBlur}
                  helperText={emailInput._inputProps.helperText()}
                  error={emailInput._inputProps.error()}
                  id="email"
                  label="e-mail"
                  variant="outlined"
                  fullWidth
                />
                <Box displayRaw={"flex"}>
                  <TextField
                    value={passwordInput._inputProps.value()}
                    onChange={passwordInput._inputFunctions.onChange}
                    onBlur={passwordInput._inputFunctions.onBlur}
                    helperText={passwordInput._inputProps.helperText()}
                    error={passwordInput._inputProps.error()}
                    id="password"
                    type={showPassword() ? "text" : "password"}
                    label="senha"
                    variant="outlined"
                    fullWidth
                  />
                  <Box mt={"0.5rem"} ml={"-3rem"}>
                    <IconButton
                      onClick={() => setShowPassword((pass) => !pass)}
                    >
                      <Show when={showPassword()} fallback={<VisibilityOff />}>
                        <Visibility />
                      </Show>
                    </IconButton>
                  </Box>
                </Box>
                <PrimaryButton disabled={!isFormValid()} type="submit">
                  avançar
                </PrimaryButton>
              </Match>
              <Match when={getStep() === "professional_infos"}>
                <Box>
                  <Link
                    sx={{ display: 'flex' }}
                    onClick={() => setStep("basic_infos")}
                    href="javascript:void()"
                  >
                    <ChevronLeft />
                    <Typography>voltar</Typography>
                  </Link>
                </Box>
                <TextField
                  value={currentPositionInput._inputProps.value()}
                  onChange={currentPositionInput._inputFunctions.onChange}
                  onBlur={currentPositionInput._inputFunctions.onBlur}
                  helperText={currentPositionInput._inputProps.helperText()}
                  error={currentPositionInput._inputProps.error()}
                  id="current_position"
                  label="Atual ou último cargo"
                  variant="outlined"
                  fullWidth
                />
                <Box displayRaw={"flex"}>
                  <TextField
                    onChange={levelInput._inputFunctions.onChange}
                    onBlur={levelInput._inputFunctions.onBlur}
                    onClick={() => openSelection(levels, levelInput.setValue)}
                    value={levelInput._inputProps.value()}
                    helperText={levelInput._inputProps.helperText()}
                    error={levelInput._inputProps.error()}
                    InputProps={{
                      readOnly: true,
                    }}
                    id="level"
                    label="Senioridade"
                    variant="outlined"
                    fullWidth
                  />
                  <Box mt={"0.5rem"} ml={"-3rem"}>
                    <IconButton
                      onClick={() => openSelection(levels, levelInput.setValue)}
                    >
                      <ExpandMore />
                    </IconButton>
                  </Box>
                </Box>
                <Box displayRaw={"flex"}>
                  <TextField
                    onChange={functionalAreaInput._inputFunctions.onChange}
                    onBlur={functionalAreaInput._inputFunctions.onBlur}
                    onClick={() =>
                      openSelection(
                        functionalAreas,
                        functionalAreaInput.setValue
                      )
                    }
                    value={functionalAreaInput._inputProps.value()}
                    helperText={functionalAreaInput._inputProps.helperText()}
                    error={functionalAreaInput._inputProps.error()}
                    InputProps={{
                      readOnly: true,
                    }}
                    id="functionalAreaInput"
                    label="Área funcional"
                    variant="outlined"
                    fullWidth
                  />
                  <Box mt={"0.5rem"} ml={"-3rem"}>
                    <IconButton
                      onClick={() =>
                        openSelection(
                          functionalAreas,
                          functionalAreaInput.setValue
                        )
                      }
                    >
                      <ExpandMore />
                    </IconButton>
                  </Box>
                </Box>
                <TextField
                  value={currentCompanyInput._inputProps.value()}
                  onChange={currentCompanyInput._inputFunctions.onChange}
                  onBlur={currentCompanyInput._inputFunctions.onBlur}
                  helperText={currentCompanyInput._inputProps.helperText()}
                  error={currentCompanyInput._inputProps.error()}
                  id="current_company"
                  label="Atual ou última empresa"
                  variant="outlined"
                  fullWidth
                />
                <Box displayRaw={"flex"}>
                  <TextField
                    onChange={countryInput._inputFunctions.onChange}
                    onBlur={countryInput._inputFunctions.onBlur}
                    helperText={countryInput._inputProps.helperText()}
                    error={countryInput._inputProps.error()}
                    onClick={() =>
                      openSelection(countries, countryInput.setValue)
                    }
                    value={countryInput._inputProps.value()}
                    InputProps={{
                      readOnly: true,
                    }}
                    id="country"
                    label="País em que reside"
                    variant="outlined"
                    fullWidth
                  />
                  <Box mt={"0.5rem"} ml={"-3rem"}>
                    <IconButton
                      onClick={() =>
                        openSelection(countries, countryInput.setValue)
                      }
                    >
                      <ExpandMore />
                    </IconButton>
                  </Box>
                </Box>
                <PrimaryButton disabled={!isFormValid()} type="submit">
                  criar conta
                </PrimaryButton>
              </Match>
              <Match when={getStep() === "success"}>
                <Box>
                  <Typography fontWeight={"bold"} variant="h4">
                    Conta criada com sucesso!
                  </Typography>
                  <Typography mt={"3rem"}>
                    Clique em "entre" para acessar a plataforma
                  </Typography>
                  <Box mt={"3rem"}>
                    <PrimaryButton onClick={openSignin}>entre</PrimaryButton>
                  </Box>
                </Box>
              </Match>
            </Switch>
          </Stack>
          <Typography fontSize={'14px'} mt={2} textAlign="center">
            Ao clicar em Criar conta, você concorda com a{" "}
            <Link
              target="_blank"
              href="https://www.wokepeople.com.br/politica-de-privacidade"
            >
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link
              target="_blank"
              href="https://www.wokepeople.com.br/contrato-do-usuario"
            >
              Contrato do usuário
            </Link>
            , e receber mensagens da Woke. Você pode cancelar a inscrição a
            qualquer momento.
          </Typography>
          <Selector />
        </form>
      </Box>
      <Modal
        open={getLoading()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: "999px",
            background: "white",
          }}
        >
          <CircularProgress />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
