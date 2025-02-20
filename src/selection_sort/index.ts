const getSmallest = (arr: Array<number>) : number => {
    let smallest;
    for(let i=0;i<arr.length; i++){
        if(!smallest || arr[i]<smallest)
            smallest = arr[i]
    }
    return smallest
}

const selectionSort = (arr: Array<number>): Array<number> => {
    let newArr: Array<number> = []
    while(arr.length > 0) {
        const smallest = getSmallest(arr)
        arr = arr.filter(a => a!= smallest)
        newArr = [...newArr, smallest]
    }
    return newArr
}

export default selectionSort
