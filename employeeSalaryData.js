const employeeDetailsList=[
    {id:101, name : "robinhood",department: "Engineering", salary: 30000, yrsOfExp:3, bonus:8},
    {id:102, name : "balakumar",department: "HR", salary: 49000, yrsOfExp:5, bonus:8},
    {id:103, name : "nagaraj",department: "Sales", salary: 30000, sales : 1200000, bonus:8},
    {id:103, name : "nagaraj",department: "Sales", salary: 30000, sales : 1200000, bonus:8}
]

const departmentName = "Engineering";

function removeDuplicate(){
    const duplicate= new Set();
    const employeeDetails = [];
    for (const employeelist of employeeDetailsList){
         if(!duplicate.has(employeelist.id)){
             duplicate.add(employeelist.id);
             employeeDetails.push(employeelist);
         }
    }
    return(employeeDetails);
 }

//  function filteredStaffs(){
//     for (const department of employeeDetailsList){
//     const filteredList = remDup.find(employee => employee.department == departmentName);
//     console.log(filteredList); 
//     }
//     return(filteredList);
// }

function employeeSalary(){
    for (const empSalary of remDup){
        switch(true){
        case empSalary.department === "HR" && empSalary.salary < 50000:
            empSalary.bonus += 10;
            break;
        case empSalary.department === "Engineering" && empSalary.yrsOfExp > 2:
            empSalary.bonus += 15;
            break;
        case empSalary.department === "Sales" && empSalary.sales > 100000:
            empSalary.bonus += 5;
            break;
        case empSalary.department === "Sales" && empSalary.sales > 100000 && empSalary.sales < 500000:
            empSalary.bonus += 10;
            break;
        case empSalary.department === "Sales" && empSalary.sales > 500000:
            empSalary.bonus += 20;
            break;
        default:
            empSalary.bonus +=0;
        }
        empSalary.bonusInRupees = (empSalary.bonus * empSalary.salary) /100;
        empSalary.totalcompensation = empSalary.bonusInRupees + empSalary.salary;
    }
}

function specifiedDepartment(){
    const report = {};
    const updatedEmployees =[];
     for (const specifiedDepartmentcall of remDup){
        if(departmentName === specifiedDepartmentcall.department){
           if(!report[departmentName]){
            report[departmentName]=[];
           }
           report[departmentName].push({
            name: specifiedDepartmentcall.name, salary:specifiedDepartmentcall.salary, bonus:specifiedDepartmentcall.bonusInRupees,totalcompensation:specifiedDepartmentcall.totalcompensation
        }
    );
                }
                updatedEmployees.push(specifiedDepartmentcall);
                
            }
            return{
                report,
                updatedEmployees,
            };
        }
    

 const remDup = removeDuplicate();
 console.log(remDup);
 for( const s of remDup){
 console.log(s.salary);
 }
//const filSta = filteredStaffs();
employeeSalary();
console.log(remDup);

const val =specifiedDepartment(remDup);
console.log(val);
