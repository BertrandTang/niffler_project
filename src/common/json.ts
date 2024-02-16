import { FilesProcessing } from "./files.ts";


export const JsonProcessing = {

    // deno-lint-ignore no-explicit-any
    readJson (path: string): any {
        try {
            const rowDatas = FilesProcessing.readFile(path);
            return JSON.parse(rowDatas);
        } catch (err) {
            throw new Error(`Error during Json file reading : ${err}`);
        }
    }
}