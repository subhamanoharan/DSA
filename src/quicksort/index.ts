const quickSort = (input: Array<number>): Array<number> => {
    if(input.length < 2) return input
    const [pivot, rest] = input
    let left:Array<number> = [], right: Array<number> =[]
    for(let i = 1; i < input.length;i++) {
        if(input[i]<=pivot)
            left = [...left, input[i]]
        else 
            right = [...right, input[i]]
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

export default quickSort;