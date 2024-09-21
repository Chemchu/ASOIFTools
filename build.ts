import { exec } from 'child_process';

console.log(`Building...`);

console.log(`Compiling TailwindCSS...`);

exec('npx tailwindcss -i ./src/input.css -o ./public/output.css', (error, stdout) => {
    if (error) console.error(`Error: ${error.message}`);
    if (stdout) console.log(`Stdout: ${stdout}`);
});

console.log(`Build completed`);

