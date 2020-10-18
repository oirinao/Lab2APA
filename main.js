function dateIntrare(){
    let text = document.getElementById('array').value;
    let date = [];
    let array = [];

        let elements = text.split(' ').filter(function(x) { return x.length > 0; });
        date.push(elements);


     for (let i = 0; i < date[0].length; i++) {
         array[i] = Number(date[0][i]); 
    }

    return array;
}

function giveRandomArray(length){
    //const length = 10;
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * 1000));
    }
    //console.log('Array initial:', array);
    return array;
}

const randomArray = giveRandomArray(10000);
const ascendicArray = randomArray.sort(function(a, b){return a-b;});
//const descendicArray = randomArray.sort(function(a, b){return b-a;});

function sort_merge(){
    sort("merge");
}
function sort_quick(){
    sort("quick");
}
function sort_radix(){
    sort("radix");
}
function sort_bogo(){
    sort("bogo");
}

function sort(method){
    var start = performance.now();
    let result;
    
    if (method == "merge")
		result = printMerge();
	else if (method == "quick")
        result = printQuick();
    else if (method == "radix")
		result = printRadix();
	else if (method == "bogo")
		result = printBogo();

    var end = performance.now();

	var resultTime = (end - start).toFixed(5);

	let textResult = "Time = " + resultTime + " ms";
	document.getElementById('result').innerHTML = textResult;
    
}