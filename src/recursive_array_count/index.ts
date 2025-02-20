const recursiveArrayCount = (arr: Array<number>, count: number = 0): number => {
    if(!arr || arr.length ===0) return count
    const [first, ...rest] = arr
    return recursiveArrayCount(rest, count + 1)
}

export default recursiveArrayCount