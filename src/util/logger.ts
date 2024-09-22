const Logger = (httpMethod: string, value: string) => {
    const now = new Date().toISOString();
    console.log(`\x1b[32m[${now}] \x1b[34m${httpMethod} \x1b[37m${value}\x1b[0m`);
}

export { Logger };
