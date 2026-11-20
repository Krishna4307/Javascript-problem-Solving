// =============================
//     Task Requirements
// =============================

// Requirements: Use an object to group the data. Don't modify the original array.
// Expected Output :{
//   IT: ["Rahul", "Arjun"],
//   HR: ["Priya", "Kiran"],
//   Finance: ["Sneha"]
// }

const employees = [
    { name: "Rahul", department: "IT" },
    { name: "Priya", department: "HR" },
    { name: "Arjun", department: "IT" },
    { name: "Sneha", department: "Finance" },
    { name: "Kiran", department: "HR" }
];
function groupDeptEmployees(employees){
    let obj={};
    for(let i=0; i<employees.length; i++){
        if(obj[employees[i].department]){
            obj[employees[i].department].push(employees[i].name)
        }
        else{
            obj[employees[i].department]=[employees[i].name]
        }
    }
    console.log(obj)
}
groupDeptEmployees(employees)