const text = "JavaScript Developer";
let vowelsCount=0
let vowels="aeiou";
for(let i=0;i<text.length;i++){
    if(vowels.includes(text[i])){
        vowelsCount++
    }
}
console.log("No.of.Vowels Existed in GIven Text : ",vowelsCount)