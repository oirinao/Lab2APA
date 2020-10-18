//last singifivand digit 
//let comparisonsCountR = 0;
let swapsCountR;

function printRadix(){
    //let array = dateIntrare();
    swapsCountR = 0;
    //const array = [...randomArray];
    const array = [...ascendicArray];
    //const array = [...descendicArray];
    console.log('Array initial:', array);
    console.log('Sortat prin RADIX: ', radixSort(array));
    //console.log("Numarul de comparatii = ", comparisonsCountR);
    console.log("Numarul de interschimbari = ", swapsCountR);
}

function radixSort(array){
    const max = getMaxLength(array);

    for(let i = 0; i < max; i++)
    {
        let boxes = Array.from({length:10}, ()=>[ ]); //cream 10 arrayuri goale       
        for (let j = 0; j < array.length; j++) {
            boxes[getPosition(array[j], i)].push(array[j]); //populam arrayurile / boxurile
            swapsCountR++;           
        }
        array = [].concat(...boxes);
    }

    return array;
}

//returneaza numarul maxim de cifre in numar din array
function getMaxLength(array) {
    let max = 0;
    for (let num of array) {
        if (max < num.toString().length) {
            max = num.toString().length;
        }
    }
    return max;
}

//returneaza cifra de pe pozitia indicata din cadrul numarului
// getPosition(123,  0)   // 3
function getPosition(num, place){
    return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10;
}

//const ascendicArray = radixSort(randomArray);
