import read from "./read.ts"
import process from "./process.ts"

export default read(async CSV => {
    const result: string[][] = [];
    let freqAcc = 0

    CSV[Symbol.asyncIterator]().next() // Skip column names

    await process(
        () => result.push([]),
        [
            ,
            cell => result[result.length - 1].push(cell.trim()),
        ]
    )(CSV)
    return result
})