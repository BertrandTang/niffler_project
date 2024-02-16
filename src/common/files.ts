export const FilesProcessing = {

    readFile (path: string): string {
        
        try {
            const decoder = new TextDecoder("utf-8");
            const rowDatas = Deno.readFileSync(path);
            if (rowDatas.length == 0) {
                throw new Error(`Empty file Settings path ${path}`)
            }
            return decoder.decode(rowDatas);
        } catch (err) {
            throw new Error(`Unable to read file Settings path ${path} : ${err}`);
        }
    }
}