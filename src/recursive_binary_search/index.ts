const recursiveBinarySearch = (arr: Array<number>, val: number): number => {
    if(!arr || arr.length === 0) return -1;
    if(arr.length === 1) return arr[0] === val ? 0 : -1
    const middleIndex = Math.trunc(arr.length/2)
    if(arr[middleIndex] === val) return middleIndex
    const left = arr.slice(0, middleIndex)
    const right = arr.slice(middleIndex+1, arr.length)
    if(val < arr[middleIndex])
        return recursiveBinarySearch(left,val)
    else {
        const i = recursiveBinarySearch(right, val)
        return i>0 ? middleIndex + i : i
    }
}

export default recursiveBinarySearch