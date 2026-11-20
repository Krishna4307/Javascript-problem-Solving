const numbers = [1, 3, 5, 6, 8, 10];
function FindMissingNumbers(numbers){
    let missingNumbers=[];
    for(let i=1; i<=10; i++){
        if(!numbers.includes(i)){
            missingNumbers.push(i)
        }
    }
    console.log(missingNumbers)
}
FindMissingNumbers(numbers);