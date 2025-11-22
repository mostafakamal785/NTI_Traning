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
const findUserById = (id, users) => {
    const user = users.find((user) => user.id === id);
    if (user)
        return user;
    return undefined;
};
const updateUserLocation = (id, coords) => {
    const user = findUserById(id, users);
    if (user) {
        user.location = coords;
    }
};
const handleResponse = (response) => {
    if (response.status === 'success') {
        console.log('Data:', response.data);
    }
    else {
        console.error('Error:', response.message);
    }
};
const printEmployeedProfile = (profile) => {
    console.log(`Name: ${profile.name}, Age: ${profile.age}, Employee ID: ${profile.employeeId}, Department: ${profile.department}`);
};
const mycompany = {
    name: 'Tech Solutions',
    employees: [
        { name: 'Alice', age: 30, employeeId: 101, department: 'Development' },
        { name: 'Bob', age: 25, employeeId: 102, department: 'Marketing' },
    ],
    location: ['New York', 'USA'],
};
console.log(`Company: ${mycompany.name}, Location: ${mycompany.location[0]}, ${mycompany.location[1]}, Employees: ${mycompany.employees.length}`);
function processNames(names, transform) {
    return names.map(transform);
}
export {};
