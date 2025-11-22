let userId: number | string;
let isLoggedIn: boolean = false;
isLoggedIn = true;
function printId(id: number | string): void {
  if (typeof id === 'number') {
    console.log(`ID is number: ${id}`);
  } else {
    console.log(`ID is string: ${id}`);
  }
}

userId = 123;
printId(userId);
userId = 'abc';
printId(userId);

let usernames: string[] = ['Alice', 'Bob', 'Charlie'];
username: usernames = ['Alice', 'Bob', 'Charlie'];

let httpResponse: [number, string, boolean];
httpResponse = [200, 'OK', true];

let products = [
  { id: 1, name: 'Laptop', price: 999, tags: ['electronics', 'office'] },
  { id: 2, name: 'Phone', price: 499, tags: ['mobile', 'gadgets'] },
  { id: 3, name: 'Headphones', price: 199, tags: ['audio'] },
];

type Coordinates = { x: number; y: number };

interface User {
  id: number;
  name: string;
  location: Coordinates;
  email?: string;
}

function printUser(user: User): void {
  console.log(
    `ID: ${user.id}, Name: ${user.name}, Location: (${user.location.x}, ${user.location.y})`
  );
  if (user.email) console.log(`Email: ${user.email}`);
}

type MathOp = (a: number, b: number) => number;

const add: MathOp = (a, b) => a + b;
const multiply: MathOp = (a, b) => a * b;

function operate(a: number, b: number, op: MathOp): number {
  return op(a, b);
}

console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, multiply)); // 15

let users: User[] = [
  { id: 1, name: 'Alice', location: { x: 10, y: 20 } },
  { id: 2, name: 'Bob', location: { x: 5, y: 15 }, email: 'bob@mail.com' },
];

const findUserById = (id: number | string, users: User[]): User | undefined => {
  const user = users.find((user) => user.id === id);
  if (user) return user;
  return undefined;
};

const updateUserLocation = (id: number | string, coords: Coordinates): void => {
  const user = findUserById(id, users);
  if (user) {
    user.location = coords;
  }
};

type ApiResponse = { status: 'success'; data: string[] } | { status: 'error'; message: string };

const handleResponse = (response: ApiResponse): void => {
  if (response.status === 'success') {
    console.log('Data:', response.data);
  } else {
    console.error('Error:', response.message);
  }
};

type perrson = { name: string; age: number };

type Employee = { employeeId: number; department: string };

type EmployeeProfile = perrson & Employee;

const printEmployeedProfile = (profile: EmployeeProfile): void => {
  console.log(
    `Name: ${profile.name}, Age: ${profile.age}, Employee ID: ${profile.employeeId}, Department: ${profile.department}`
  );
};

interface company {
  name: string;
  employees: EmployeeProfile[];
  location: [city : string, country: string];
}

const mycompany: company = {
  name: 'Tech Solutions',
  employees: [
    { name: 'Alice', age: 30, employeeId: 101, department: 'Development' },
    { name: 'Bob', age: 25, employeeId: 102, department: 'Marketing' },
  ],
  location: ['New York', 'USA'],
};

console.log(`Company: ${mycompany.name}, Location: ${mycompany.location[0]}, ${mycompany.location[1]}, Employees: ${mycompany.employees.length}`);

type Transform = (input: string) => string;
function processNames(names: string[], transform: Transform): string[] {
  return names.map(transform);
}
