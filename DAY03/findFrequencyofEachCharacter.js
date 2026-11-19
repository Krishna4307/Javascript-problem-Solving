// =============================
//     Task Requirements
// =============================
// Find the Frequency of Each Character

// Requirements:
// - Use an object to store the frequency.
// - Use a loop.
// - Don't use external libraries.
// - Return the frequency object.

const text = "javascript";
let obj={}
for(let i=0; i<text.length; i++){
    if(obj[text[i]]){
        count=1;
        obj[text[i]]+=1
    }
    else{
        obj[text[i]]=1
    }
    
}
console.log(obj)