const recursiveArrayMax = (arr: Array<number>, max: number = 0): number => {
    if(!arr || arr.length ===0) return max
    const [first, ...rest] = arr
    return recursiveArrayMax(rest, first>max ? first: max)
}

export default recursiveArrayMax