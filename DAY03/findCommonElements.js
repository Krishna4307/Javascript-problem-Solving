// =============================
//     Task Requirements
// =============================

// - Find Common Elements in Two Arrays
// Requirements:
// - Use a function.
// - Don't use Set.
// - Don't modify the original arrays.
// - Avoid duplicate results.

const arr1 = [10, 20, 30, 40, 50];
const arr2 = [30, 40, 60, 70, 80];
const commonElements=[];
for(let i=0; i<arr1.length;i++){
    for(let j=0; j<arr2.length;j++){
        if(arr1[i] === arr2[j]){
            commonElements.push(arr1[i])
        }
        
    }
}
console.log("Arr1 Elements :",arr1)
console.log("Arr2 Elements :",arr2)
console.log("Common Elements from 2 Arrays : ",commonElements)