import Document, { Html, Head, Main, NextScript } from "next/document"

class HTMLDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Nunito:wght@400&family=Roboto:wght@300&family=Red+Hat+Mono:wght@400&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
        )
    }
}

export default HTMLDocument