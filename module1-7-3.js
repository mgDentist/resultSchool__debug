const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100); // почему бы не вынести эту переменную из цикла, она же не меняется и зачем ее пересчитывать каждую итерацию?
console.log(totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    totalJuniorDevelopersSalary += salaryWithTax;
    console.log(totalJuniorDevelopersSalary);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);