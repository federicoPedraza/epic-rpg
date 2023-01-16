export class CommandCenter {
    private static instance: CommandCenter;
    private commands: Map<string, (parameters: any) => any>;

    private constructor() {
        this.commands = new Map();
    }

    static getInstance() {
        if (!CommandCenter.instance)
            CommandCenter.instance = new CommandCenter();
        return CommandCenter.instance;
    }

    registerCommand(name: string, callback: (parameters: any) => any) {
        this.commands.set(name, callback);
    }
    
    registerCommands(commands: { [key: string]: (parameters: any) => any }) {
        Object.keys(commands).forEach((name) => {
            this.registerCommand(name, commands[name]);
        });
    }

    executeCommand(name: string, parameters: any) {
        if (this.commands.has(name)) {
            const callback = this.commands.get(name);
            if (callback)
                callback(parameters);
        }
    }

    invokeCommand(name: string, parameters: any) {
        const callback = this.commands.get(name);
        if (callback)
            return callback(parameters);
    }
}