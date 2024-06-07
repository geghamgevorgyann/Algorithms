function InsertionSort(arr) {
    let j = 0;
    let tmp = 0;
    for (let i = 1;i < arr.length; i++){
        j = i - 1;
        tmp = arr[i];
    while (tmp < arr[j] && j >= 0) {
        arr[j+1] = arr[j];
        j-- ;
     }
    arr[j+1] = tmp;
   }
return arr
}
