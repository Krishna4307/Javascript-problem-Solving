let str="javascript";
let reversed='';
let reversedArr=[]
for(i=str.length-1; i>=0; i--){
    reversed+=str[i]
    reversedArr.push(str[i])
}
console.log(reversed)
reversedArr=reversedArr.join("")
console.log(reversedArr)