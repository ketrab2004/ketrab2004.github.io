import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ILocalizedLinkProps {
    skipLocaleHandling?: boolean,
    href: string,
    locale?: string
}

// https://locize.com/blog/next-i18n-static/
export function LocalizedLink({ children, skipLocaleHandling = false, href, locale, ...rest }: React.PropsWithChildren<ILocalizedLinkProps>) {
    const router = useRouter()
    const l = locale || router.query.locale as string || '';

    let h = href || router.asPath;
    if (h.indexOf('http') === 0) skipLocaleHandling = true;
    if (l && !skipLocaleHandling) {
        h = h
            ? `/${l}${h}`
            : router.pathname.replace('[locale]', l);
    }

    return (
        <Link href={h} {...rest}>
            {children}
        </Link>
    );
}

export default LocalizedLink;