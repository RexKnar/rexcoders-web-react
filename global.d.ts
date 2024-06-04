// Create a file called global.d.ts in your project
// global.d.ts
declare global {
    interface Window {
        grecaptcha: {
            execute(siteKey: string, options: { action: string }): Promise<string>;
        };
    }
}

export {};
