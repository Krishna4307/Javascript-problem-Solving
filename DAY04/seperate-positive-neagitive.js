const numbers = [10, -5, 0, 25, -15, 0, 8, -2];
function SeperateNumbers(numbers){
    let obj={};
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>0){
            // console.log(obj[positive])
            if(obj["positive"]){
                obj["positive"].push(numbers[i])
            }
            else{
                obj["positive"]=[numbers[i]];
            }
        }

        else if(numbers[i]<0){
            if(obj["neagitive"]){
                obj["neagitive"].push(numbers[i])
            }
            else{
                obj["neagitive"]=[numbers[i]]
            }
        }
        
        else{
            if(obj["zeros"]){
                obj["zeros"].push(numbers[i])
            }
            else{
                obj["zeros"]=[numbers[i]]
            }
        }
    }
    console.log(obj)
}
SeperateNumbers(numbers)