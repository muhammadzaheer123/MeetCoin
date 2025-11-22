import { getRequestConfig } from "next-intl/server";

const dictionaries = {
  en: async () => (await import("../messages/en.json")).default,
  es: async () => (await import("../messages/es.json")).default,
} as const;

export default getRequestConfig(async ({ locale }) => {
  const code = locale === "en" || locale === "es" ? locale : "es";
  const messages = await dictionaries[code]();
  return { locale: code, messages };
});
