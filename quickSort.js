let comparisonsCountQ = 0;
let swapsCountQ;

function printQuick(){
    comparisonsCountQ = 0;
    swapsCountQ = 0;
    //let array = dateIntrare();
    //const array = [...randomArray];
    const array = [...ascendicArray];
    //const array = [...descendicArray];
    console.log('Array initial:', array);
    console.log('Sortat prin QUICK: ', quickSort(array, 0, array.length-1));
    console.log("Numarul de comparatii = ", comparisonsCountQ);
    console.log("Numarul de interschimbari = ", swapsCountQ);
}

function quickSort(array, start, end){

    if (start < end) {
        let pivotIndex = partition(array, start, end); 

        quickSort(array, start, pivotIndex-1); 
        quickSort(array, pivotIndex+1, end);

        return array;
    }
}

function partition(array, start, end){
    //let pivot = randomPivot(array);
    let pivot = array[end];
    let partitionIndex = start;

    for (let i = start; i < end; i++) {
        comparisonsCountQ++;
        if (array[i] <= pivot) {
            swapsCountQ++;

            let temp = array[i];
            array[i] = array[partitionIndex];
            array[partitionIndex] = temp;
            
            partitionIndex++;
        }        
    }
    let temp = array[partitionIndex];
    array[partitionIndex] = array[end];
    array[end] = temp;
    swapsCountQ++;

    return partitionIndex;
}

function randomPivot(array){
    return (array[Math.floor(Math.random() * array.length)]);
}