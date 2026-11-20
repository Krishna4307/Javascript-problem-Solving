// =============================
//     Task Requirements
// =============================
// Task 1: JavaScript — Separate Positive, Negative and Zero
// Requirements:
// - Use a function.
// - Use loops and conditions.
// - Don't modify the original array.
// - Return an object containing all three arrays.

// Expected output :{
//   positive: [10, 25, 8],
//   negative: [-5, -15, -2],
//   zero: [0, 0]
// }


const numbers = [10, -5, 0, 25, -15, 0, 8, -2];
function SeperateNumbers(numbers){
    let obj={};
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>0){
            // console.log(obj[positive])
            if(obj["positive"]){
                obj["positive"].push(numbers[i])
            }
            else{
                obj["positive"]=[numbers[i]];
            }
        }

        else if(numbers[i]<0){
            if(obj["neagitive"]){
                obj["neagitive"].push(numbers[i])
            }
            else{
                obj["neagitive"]=[numbers[i]]
            }
        }
        
        else{
            if(obj["zeros"]){
                obj["zeros"].push(numbers[i])
            }
            else{
                obj["zeros"]=[numbers[i]]
            }
        }
    }
    console.log(obj)
}
SeperateNumbers(numbers)