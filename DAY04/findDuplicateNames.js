// =============================
//     Task Requirements
// =============================
// Task 2: JavaScript — Find Duplicate Names
// Requirements:
// - Don't use Set.
// - Don't use external libraries.
// - Return each duplicate only once.
// - Preserve the order of first duplicate detection.

// expected Output : ["Rahul", "Priya"]


const names = ["Rahul","Priya","Arjun","Rahul","Sneha","Priya","Kiran"];
function findDuplicateNames(){
    let duplicatesArr=[];
    for(let i=0;i<names.length;i++){
        for(let j=i+1;j<names.length;j++){
            if(names[i]===names[j]){
                duplicatesArr.push(names[i])
            }
        }
    }
    console.log("finded Duplicates Arr : ",duplicatesArr)
}
findDuplicateNames()