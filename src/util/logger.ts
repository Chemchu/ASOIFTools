const Logger = (value: string) => {
    console.log(`[${new Date().toLocaleString()}]: ${value}`);
}

export { Logger };
