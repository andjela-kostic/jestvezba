function addCalculator(a, b) {
    if((a==undefined || typeof a!="number")||(b==undefined || typeof b!="number")){
        throw new Error("Morate uneti 2 broja");
    }
    return a + b;
}


function substract(a ,b){
    return a - b;
}

function multiplication(a, b){
    if(b==0){
        throw new Error("Ne mozete mnoziti sa 0")
    }
    return a * b;
}

function dividing(a, b){
    return a / b;
}
  
function sumFewNumbers(...args){
    return args.reduce(function(acc,cur){
        if(typeof cur == "string"){
            throw new Error("Ne sme se prosledjivati string")
        }
        return acc+cur;
    })
}


function array(arr){
    if(arr.length>1){
        arr.forEach(e => {
            if(typeof e == "string"){
                throw new Error("Member of array must not be a string")
            }
        });
        let arrLength=arr.length
        let arrAverage=arr.reduce((a,b)=>a+b,0)/arr.length
        let arrMax=Math.max(...arr)
        let arrMin=Math.min(...arr)
        let obj={length:arrLength, average:arrAverage, max:arrMax, min:arrMin}
        //console.log(obj)
        return obj
    }else{
        throw new Error("Array is not array if dont have enough elements")
    }
}

var dada=[1,3,24,3]

array(dada)

module.exports = {addCalculator,substract, multiplication,dividing,sumFewNumbers,array};

