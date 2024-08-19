/** @type {import('next').NextConfig} */

/*
    To configure SASS in project
    - https://nextjs.org/docs/app/building-your-application/styling/sass
    - https://www.geeksforgeeks.org/how-to-fix-referenceerror-dirname-is-not-defined-in-es-module-scope-in-javascript/
    - https://stackoverflow.com/questions/72456535/referenceerror-dirname-is-not-defined-in-es-module-scope
    - https://github.com/vercel/next.js/discussions/60945

    Enable Images in static rendering
    - https://nextjs.org/docs/messages/export-image-api
*/
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// SASS config
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Next JS config
const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        unoptimized: true
    }
}

export default nextConfig;