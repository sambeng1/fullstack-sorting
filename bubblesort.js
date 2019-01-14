function bubbleSort(arr) {
    
    if (arr.length <= 1){
        return arr;
    }

    for (let i = arr.length - 1 ; i > 0; i--){
        for (let j = 0; j < i; j++){
            let first = arr[j];
            let second = arr[j+1];
            if (second < first){
                arr[j] = second;
                arr[j+1] = first
            }
        }
    }
    return arr;
}