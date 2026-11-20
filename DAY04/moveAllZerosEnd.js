// =============================
//     Task Requirements
// =============================

// JS Task 3: Move All Zeros to the End
// Requirements: Don't use sorting. Don't modify the original array.
// expected Output : [5, 3, 8, 2, 0, 0, 0]

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