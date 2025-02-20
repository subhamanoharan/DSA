const recursiveArrayAdd = (arr: Array<number>, sum: number = 0): number => {
    if(!arr || arr.length ===0) return sum
    const [first, ...rest] = arr
    return recursiveArrayAdd(rest, first+sum)
}

export default recursiveArrayAdd