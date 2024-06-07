function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[temp] > arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
    return arr;
} 
console.log(selectionSort([3,6,9,2,5,1]))

