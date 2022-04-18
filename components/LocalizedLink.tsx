import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ILocalizedLinkProps {
    children: JSX.Element[],
    skipLocaleHandling?: boolean,
    href: string,
    locale?: string
}

// https://locize.com/blog/next-i18n-static/
export function LocalizedLink({ children, skipLocaleHandling, href, locale, ...rest }: ILocalizedLinkProps) {
    const router = useRouter()
    const l = locale || router.query.locale as string || '';

    let h = href || router.asPath;
    if (h.indexOf('http') === 0) skipLocaleHandling = true;
    if (locale && !skipLocaleHandling) {
        h = h
            ? `/${locale}${h}`
            : router.pathname.replace('[locale]', l);
    }

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}

export default LocalizedLink;