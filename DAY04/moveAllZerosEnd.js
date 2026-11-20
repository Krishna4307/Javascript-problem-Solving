const numbers = [0, 5, 0, 3, 8, 0, 2];
function allZerosToEnd(){
    const newArr=[];
    for(let i=numbers.length-1; i>=0; i--){
        if(numbers[i]>0){
            newArr.unshift(numbers[i])
        }
        else{
            newArr.push(numbers[i])
        }
    }
    console.log(newArr)
}
allZerosToEnd()