let userId;
let isLoggedIn = false;
isLoggedIn = true;
function printId(id) {
    if (typeof id === 'number') {
        console.log(`ID is number: ${id}`);
    }
    else {
        console.log(`ID is string: ${id}`);
    }
}
userId = 123;
printId(userId);
userId = 'abc';
printId(userId);
let usernames = ['Alice', 'Bob', 'Charlie'];
username: usernames = ['Alice', 'Bob', 'Charlie'];
let httpResponse;
httpResponse = [200, 'OK', true];
let products = [
    { id: 1, name: 'Laptop', price: 999, tags: ['electronics', 'office'] },
    { id: 2, name: 'Phone', price: 499, tags: ['mobile', 'gadgets'] },
    { id: 3, name: 'Headphones', price: 199, tags: ['audio'] },
];
function printUser(user) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Location: (${user.location.x}, ${user.location.y})`);
    if (user.email)
        console.log(`Email: ${user.email}`);
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function operate(a, b, op) {
    return op(a, b);
}
console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, multiply)); // 15
let users = [
    { id: 1, name: 'Alice', location: { x: 10, y: 20 } },
    { id: 2, name: 'Bob', location: { x: 5, y: 15 }, email: 'bob@mail.com' },
];
function findUserById(userId, userArr) {
    return userArr.find((u) => u.id === Number(userId));
}
function updateUserLocation(userId, newCoords) {
    const user = users.find((u) => u.id === userId);
    if (user) {
        user.location = newCoords;
        console.log(`Updated location for ${user.name}`);
    }
    else {
        console.log('User not found');
    }
}
function handleResponse(res) {
    if (res.status === 'success') {
        console.log('Data:', res.data.join(', '));
    }
    else {
        console.error('Error:', res.message);
    }
}
function printEmployeeProfile(emp) {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}, Department: ${emp.department}`);
}
const myCompany = {
    name: 'TechNova',
    employees: [
        { id: 1, name: 'Alice', age: 25, department: 'IT' },
        { id: 2, name: 'Bob', age: 30, department: 'HR' },
    ],
    locations: [
        ['Cairo', 'Egypt'],
        ['Berlin', 'Germany'],
    ],
};
console.log('Company:', myCompany.name);
myCompany.employees.forEach((e) => console.log('Employee:', e.name));
myCompany.locations.forEach(([city, country]) => console.log(`Location: ${city}, ${country}`));
function processNames(names, transformer) {
    return names.map(transformer);
}
const upperCase = (name) => name.toUpperCase();
const addPrefix = (name) => `Mr./Ms. ${name}`;
console.log(processNames(['Ali', 'Sara'], upperCase));
console.log(processNames(['Ali', 'Sara'], addPrefix));
const appSettings = {
    theme: 'dark',
    language: 'en',
    notificationsEnabled: true,
};
function findEmployee(company, empId) {
    return company.employees.find((e) => e.id === empId);
}
function filterEmployeesByDept(company, dept) {
    return company.employees.filter((e) => e.department === dept);
}
// Example
console.log(findEmployee(myCompany, 1));
console.log(filterEmployeesByDept(myCompany, 'IT'));
export {};
