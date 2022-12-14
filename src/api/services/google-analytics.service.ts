import ga from "ga-lite";

export class GoogleAnalyticsService {
  setUser = (userId: string) => ga("set", "userId", userId);

  pageViewEvent = (page: string) => {
    ga.send("send", {
      hitType: "pageview",
      page,
    });
  };

  customEvent = (
    category: string,
    action: string,
    label: string,
    dimensions: Record<`dimension${number}`, string>
  ) => {
    ga("send", "event", category, action, label, {
      ...dimensions,
    });
  };
}

export const userSignUpCareerEvent = (userId: string) => {
  const { customEvent, setUser } = new GoogleAnalyticsService();
  setUser(userId);
  customEvent(
    "USER_SIGNUP_CAREER_EMBED",
    "REGISTRATION",
    "Novo usuário cadastrado",
    { dimension1: userId }
  );

  customEvent("USER", "USER_SIGNUP_CAREER", "USER_SIGNUP_CAREER", {
    dimension1: userId,
  });
};
