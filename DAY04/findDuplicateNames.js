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