let arr2=[10, 15, 22, 33, 40, 51]
let even=0;
let odd=0
for(let i=0; i<arr2.length;i++){
    if(arr2[i]%2===0){
        even+=1;
    }
    else{
        odd+=1
    }
}
console.log("Total Even Numbers : ",even)
console.log("Total Odd Numbers : ", odd)