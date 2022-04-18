import LanguageDetector from "next-language-detector";
import i18nextConfig from "~/next-i18next.config";

// https://locize.com/blog/next-i18n-static/
export default function getLanguageDetector() {
    return LanguageDetector({
        supportedLngs: i18nextConfig.i18n.locales,
        fallbackLng: i18nextConfig.i18n.defaultLocale
    })
};
