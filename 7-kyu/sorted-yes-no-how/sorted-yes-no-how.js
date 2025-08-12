function isSortedAndHow(array) {
    let ascending = true;
    let descending = true;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            ascending = false;
        }
        if (array[i] > array[i - 1]) {
            descending = false;
        }
        if (!ascending && !descending) {
            break;
        }
    }
    
    if (ascending) {
        return "yes, ascending";
    } else if (descending) {
        return "yes, descending";
    } else {
        return "no";
    }
}