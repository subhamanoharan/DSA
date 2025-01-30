const binarySearch = (input: Array<number>, numberToFind: number): number => {
    let low = 0, high = input.length - 1
    let index = -1
    while(low <= high) {
        let mid = Math.trunc((low+high)/2)
        if(numberToFind > input[mid]) {
            low = mid + 1
        } else if(numberToFind < input[mid]){
            high = mid - 1
        } else if(numberToFind === input[mid]){
            index = mid
            break;
        }
    }    
    return index
}

export default binarySearch;