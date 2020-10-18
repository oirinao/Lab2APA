let comparisonsCount;
let swapsCount;

function printMerge(){
    comparisonsCount = 0;
    swapsCount = 0;
    //let array = dateIntrare();
    //const array = [...randomArray];
    const array = [...ascendicArray];
    //const array = [...descendicArray];
    console.log('Array initial:', array);
    console.log('Sortat prin MERGE: ', mergeSort(array));
    console.log("Numarul de comparatii = ", comparisonsCount);
    console.log("Numarul de interschimbari = ", swapsCount);
}

function mergeSort(array){
    if (array.length < 2) {
        return array;
    }

    let middleIndex = Math.floor(array.length / 2); //m = l + (r - l) / 2; avoids overflow for large l and h
    let leftArray = array.slice(0, middleIndex);
    let rightArray = array.slice(middleIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray){
    let output = [];

    while(leftArray.length && rightArray.length){
        comparisonsCount++;
        if (leftArray[0] < rightArray[0]) {
            //swapsCount++;
            output.push(leftArray.shift()); 
        } else {
            swapsCount++;
            output.push(rightArray.shift()); 
        }
    }
    //console.log("Numarul de comparatii = ", comparisonsCount);
    
    return output.concat(leftArray.slice()).concat(rightArray.slice());
}