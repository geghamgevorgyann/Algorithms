
// function quickSort(arr,start = 0,end = arr.length - 1) {
//    if(arr.length <= 1) return arr
//    if(start >= end) return arr
//    let pivot = partition(arr, start, end)
//    quickSort(arr, start, pivot - 1)
//    quickSort(arr, pivot + 1, end)
//    return arr
// }

// function partition(arr, start, end) {
//     let pivot = arr[end];
//     let i = start - 1;
//     for(let j = start; j < end; j++) {
//         if(arr[j] < pivot){
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]
//     return i + 1;
// }

// console.log(quickSort([5, 4, 3, 2, 1]));


function quickSort(arr, start = 0, end = arr.length - 1, pivotStrategy = 'random') {
    if (arr.length <= 1) return arr;
    if (start >= end) return arr;

    let pivot = partition(arr, start, end, pivotStrategy);
    quickSort(arr, start, pivot - 1, pivotStrategy);
    quickSort(arr, pivot + 1, end, pivotStrategy);

    return arr;
}

function partition(arr, start, end, pivotStrategy) {
    let pivotIndex = 0;

    if (pivotStrategy === 'random') {
        pivotIndex = getRandomPivot(start, end);
    } else if (pivotStrategy === 'median-of-three') {
        pivotIndex = getMedianOfThreePivot(arr, start, end);
    } else {
        throw new Error("Invalid pivot selection strategy");
    }


    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    let pivot = arr[end];
    let i = start - 1;
    
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

function getRandomPivot(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getMedianOfThreePivot(arr, start, end) {
    let mid = Math.floor((start + end) / 2);
    let a = arr[start];
    let b = arr[mid];
    let c = arr[end];

    if ((a > b) !== (a > c)) return start;
    else if ((b > a) !== (b > c)) return mid;
    else return end;
}


console.log(quickSort([5, 4, 3, 2, 1], 0, 4, 'random')); 
console.log(quickSort([5, 4, 3, 2, 1], 0, 4, 'median-of-three')); 
