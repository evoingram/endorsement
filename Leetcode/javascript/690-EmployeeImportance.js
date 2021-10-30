/*
You have a data structure of employee information, which includes 
    the employee's unique ID, their importance value, and their direct subordinates' IDs.

You are given an array of employees employees where:

employees[i].id is the ID of the ith employee.
employees[i].importance is the importance value of the ith employee.
employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.
Given an integer id that represents the ID of an employee, return 
    the total importance value of this employee and all their direct subordinates.

Example 1:
    Input: employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
    Output: 11
    Explanation: Employee 1 has an importance value of 5 and 
        has two direct subordinates: employee 2 and employee 3.
        They both have an importance value of 3.
        Thus, the total importance value of employee 1 is 5 + 3 + 3 = 11.

Example 2:
    Input: employees = [[1,2,[5]],[5,-3,[]]], id = 5
    Output: -3
    Explanation: Employee 5 has an importance value of -3 and has no direct subordinates.
        Thus, the total importance value of employee 5 is -3.

Constraints:
    1 <= employees.length <= 2000
    1 <= employees[i].id <= 2000
    All employees[i].id are unique.
    -100 <= employees[i].importance <= 100
    One employee has at most one direct leader and may have several subordinates.
    The IDs in employees[i].subordinates are valid IDs.
*/

let getImportance1 = (employees, id) => {
    // cycle through employees array to get to array w/ correct ID
    // get importance of supervisor = A
    // if subarray has length 2, multiply subarray x[0]*x[1] = B
    // if subarray has length 1, return that number = B
    // if subarray has length 0, return 0 = B
    // return A + B
    let currentDepartment, currentSupervisorImportance;
    let totalImportance = 0;
    for (let x = 0; x < employees.length; x++) {
        currentDepartment = employees[x];
        console.log(`currentDepartment = ${currentDepartment}`);
        if (currentDepartment[0] == id) {
            console.log(`currentDepartment[0] = ${currentDepartment[0]}`);
            console.log(`currentDepartment[1] = ${currentDepartment[1]}`);
            console.log(`currentDepartment[2] = ${currentDepartment[2]}`);
            currentSupervisorImportance = currentDepartment[1];
            totalImportance += currentSupervisorImportance;
            if (currentDepartment[2].length == 0) {
                console.log(`currentDepartment[2].length = 0`);
                totalImportance += 0;
            }
            else if (currentDepartment[2].length == 1) {
                console.log(`currentDepartment[2].length = 1`);
                totalImportance += currentDepartment[2][0];
            }
            else if (currentDepartment[2].length == 2) {
                console.log(`currentDepartment[2].length = 2`);
                totalImportance += currentDepartment[2][0] * currentDepartment[2][1];
            };
            break;
        }
    }
    console.log(`totalImportance = ${totalImportance}`)
    console.log(`--------------`);
    return totalImportance;
};

class Employee1 {
    constructor(id, importance, subordinates, subImpPer) {
        this.id = id;
        this.importance = importance;
        this.subordinates = subordinates;
        this.subImpPer = subImpPer;
        this.subImpTotal = this.subordinates * this.subImpPer;
        this.totalImportance = this.importance + this.subImpTotal;
    }

    GetImportance = (employees, id) => {
        let currentDepartment;
        for (let x = 0; x < employees.length; x++) {
            currentDepartment = employees[x];

            if (currentDepartment[0] == id) {
                this.id = currentDepartment[0];
                this.importance = currentDepartment[1];

                if (currentDepartment[2].length == 0) {
                    console.log(`currentDepartment[2].length = 0`);
                    this.subordinates = 0;
                    this.subImpPer = 0;
                }
                else if (currentDepartment[2].length == 1) {
                    console.log(`currentDepartment[2].length = 1`);
                    this.subordinates = 1;
                    this.subImpPer = currentDepartment[2][0];
                }
                else if (currentDepartment[2].length == 2) {
                    console.log(`currentDepartment[2].length = 2`);
                    this.subordinates = currentDepartment[2][0];
                    this.subImpPer = currentDepartment[2][1];
                };

                return this.totalImportance;
            }
        }
    }
}

function Employee(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
}


let GetImportance2 = (employees, id) => {
    let totalImportance = 0;
    let departmentHash = {};
    for (let employee of employees) departmentHash[employee.id] = i;
    console.log(``);
    dfs(departmentHash[id]);

    dfs = (employeeID) => {
        totalImportance += employeeID.importance;
        for (let x of employeeID.subordinates) dfs(departmentHash[x]);
    }

    return totalImportance;
};


var GetImportance = function (employees, id) {
    const employee = {id:1, importance:5, subordinates:[2,3]} // employees.filter(e => e.id === id);
    console.log(`employee = ${JSON.stringify(employee)}`);
    let currentSupervisorImportance;
    let totalImportance = 0;
        console.log(`employee[0] = ${employee[0]}`);
        console.log(`employee[1] = ${employee[1]}`);
        console.log(`employee.subordinates = ${employee.subordinates}`);
        currentSupervisorImportance = employee.importance;
        totalImportance += currentSupervisorImportance;
        if (employee.subordinates.length == 0) {
            console.log(`employee.subordinates.length = 0`);
            totalImportance += 0;
        }
        else if (employee.subordinates.length == 1) {
            console.log(`employee.subordinates.length = 1`);
            totalImportance += employee.subordinates[0];
        }
        else if (employee.subordinates.length == 2) {
            console.log(`employee.subordinates.length = 2`);
            totalImportance += employee.subordinates[0] * employee.subordinates[1];
        };
    console.log(`totalImportance = ${totalImportance}`)
    console.log(`--------------`);
    return totalImportance;
};
console.log(GetImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1)); // 11
console.log(GetImportance([[1, 2, [5]], [5, -3, []]], 5)); // -3
// console.log(getImportance());