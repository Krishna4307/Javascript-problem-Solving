// =============================
//     Task Requirements
// =============================
// Find Employees With the Highest Salary

// Requirements:
// - Use a function.
// - Don't use sort() or Math.max().
// - Return the complete employee object, not just the salary.
// - Consider what happens if two employees have the same highest salary.


const employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Arjun", salary: 35000 },
    { name: "Sneha", salary: 55000 },
    { name: "Kiran", salary: 40000 }
];
let highestSalaryEmp=employees.reduce((acc,emp)=>{
    if(acc.salary>=emp.salary){
        return acc;
    }
    else{
        return emp
    }
},employees[0])
console.log("Highest Salaried Employee From the given Arr : ",highestSalaryEmp)