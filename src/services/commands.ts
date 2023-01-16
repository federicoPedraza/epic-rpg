export const commands: { [key: string]: (parameters: any) => any } = {
    print: (parameters: any) => {
        console.log(parameters);
    },
    clear: (parameters: any) => {
        console.clear();
    },
}