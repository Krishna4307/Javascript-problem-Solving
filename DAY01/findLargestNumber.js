let arr1=[25, 78, 12, 95, 43];
let largestNumber=arr1[0]
for(let i=1; i<arr1.length; i++){
    if(largestNumber>arr1[i]){
        largestNumber
    }
    else{
        largestNumber=arr1[i]
    }
}
console.log("largest number : ",largestNumber)