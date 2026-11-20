// =============================
//     Task Requirements
// =============================

// Requirements: Don't use sorting. Handle multiple words having the same maximum 
//     length by returning the first one.

//     expected Output : programming

const sentence = "I am learning JavaScript programming";
const words=sentence.split(" ")
function findLongestWord(){
    let longestWord="";
    for(let i=0; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord=words[i]
        }
    }
    console.log("Longest Word : ",longestWord)
}
findLongestWord()