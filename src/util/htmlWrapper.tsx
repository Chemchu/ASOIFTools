import { Html } from '@elysiajs/html'

const htmlWrapper = (innerContent: JSX.Element) => {
    return (
        <html lang="es">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>dice_roller - app para lanzar dados</title>
                <link href="/public/output.css" rel="stylesheet" />
            </head>
            <body>
                {innerContent}
            </body>
        </html>
    );
}

export { htmlWrapper };
