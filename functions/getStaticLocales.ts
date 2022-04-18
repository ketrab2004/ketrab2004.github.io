import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'

export interface II18nProp {
    params: {
        locale: string
    }
}

export function getI18nPaths(): II18nProp[] {
    return i18nextConfig.i18n.locales.map((lng) => ({
        params: {
            locale: lng
        }
    }));
}

export function getStaticPaths(): { paths: II18nProp[], fallback: boolean } {
    return {
        fallback: false,
        paths: getI18nPaths()
    };
}



export async function getI18nProps(ctx: II18nProp, ns = ["common"]) {
    return {
        ...(await serverSideTranslations(ctx?.params?.locale, ns))
    };
};

export function makeStaticProps(ns: string[] = []) {
    return async (ctx: II18nProp) => {
        return {
            props: await getI18nProps(ctx, ns)
        }
    }
}