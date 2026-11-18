// ======================================
//         Method -1
// ======================================

const numbers = [12, 45, 23, 89, 67, 89, 34];
let largest=numbers[0];
let secondLargest=0
for(let i=1;i<numbers.length;i++){
    if(numbers[i] > largest){
        largest=numbers[i]
    }
    else if(numbers[i]< largest && numbers[i]>secondLargest){
        secondLargest=numbers[i]
    }
}
console.log("second Largest",secondLargest)

// ======================================
//         Method -2
// ======================================

    const arr1 = [12, 45, 23, 89, 67, 89, 34];
    let arr2=new Set(arr1)
    let arr3=Array.from(arr2)
    const secondLargestNum=arr3.sort((a,b)=>b-a)
    console.log("secondLargestNumber from the array : ",secondLargestNum[1])

