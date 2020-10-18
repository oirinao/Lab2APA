let comparisonsCountB;
let swapsCountB;

function printBogo(){
    comparisonsCountB = 0;
    swapsCountB = 0;
    //let array = dateIntrare();
    //const array = [...randomArray];
    const array = [...ascendicArray];
    //const array = [...descendicArray];
    console.log('Array initial:', array);
    console.log('Sortat prin BOGO: ', bogoSort(array));
    console.log("Numarul de comparatii = ", comparisonsCountB);
    console.log("Numarul de interschimbari = ", swapsCountB);
}

function bogoSort(array){
    let sorted = false;
    // if (isSorted(array)) {
    //     sorted = true;
    // }
    while(!sorted){
        array = shuffle(array);
        sorted = isSorted(array);
    }
    return array;
}

let isSorted = function(array){
    for(let i = 1; i < array.length; i++){
        comparisonsCountB++;
        if (array[i-1] > array[i]) {
            return false;
        }
    }

    return true;
};

function shuffle(array){
    let count = array.length, temp, index;

    while(count > 0){
        index = Math.floor(Math.random() * count);
        count--;

        swapsCountB++;
        temp = array[count];
        array[count] = array[index];
        array[index] = temp;
    }
    
    return array;
}
