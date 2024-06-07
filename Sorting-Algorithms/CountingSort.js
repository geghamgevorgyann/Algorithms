function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let sorted = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        sorted[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    return sorted;
}



