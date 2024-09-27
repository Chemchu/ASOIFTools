import { Html } from '@elysiajs/html'
import Navbar, { NavItems } from '../components/navbar';

const baseHtml = (innerContent: JSX.Element) => {
    return (
        <html lang="es">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FFF" />
                <title>dice_roller</title>

                <link rel="icon" type="image/x-icon" href="/public/icons/favicon.ico" />
                <link href="/public/output.css" rel="stylesheet" />

                <script src="/public/scripts/htmx.min.js" />
                <script src="/public/scripts/htmx.morph.min.js" />
                <script defer src="/public/scripts/alpine.morph.min.js" />
                <script defer src="/public/scripts/alpine.min.js" />

                <link rel="manifest" href="/public/pwa/manifest.json" />
            </head>
            <body class="bg-neutral-900 w-full h-full">
                <Navbar currentNav={NavItems.Dados} />
                {innerContent}
            </body>
        </html>
    );
}

export { baseHtml };
