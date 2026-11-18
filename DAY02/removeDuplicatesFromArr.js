// ======================================
//         Method -1
// ======================================

let arr=[10, 20, 10, 30, 40, 20, 50, 30];
let duplicatesRemovedArr=[];
for(let i=0; i<arr.length; i++){
    let isDuplicate=false;
    for(let j=0; j<duplicatesRemovedArr.length; j++){
        if(arr[i] === duplicatesRemovedArr[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        duplicatesRemovedArr.push(arr[i])
    }
}
console.log(duplicatesRemovedArr)

// ======================================
//         Method -2
// ======================================
const removeuplicatesArr2=new Set(arr)
console.log(removeuplicatesArr2)