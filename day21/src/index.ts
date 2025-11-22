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

function findUserById(userId: number | string, userArr: User[]): User | undefined {
  return userArr.find((u) => u.id === Number(userId));
}

function updateUserLocation(userId: number, newCoords: Coordinates): void {
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.location = newCoords;
    console.log(`Updated location for ${user.name}`);
  } else {
    console.log('User not found');
  }
}

type ApiResponse = { status: 'success'; data: string[] } | { status: 'error'; message: string };

function handleResponse(res: ApiResponse): void {
  if (res.status === 'success') {
    console.log('Data:', res.data.join(', '));
  } else {
    console.error('Error:', res.message);
  }
}

type Person = { name: string; age: number };
type Employee = { id: number; department: string };

type EmployeeProfile = Person & Employee;

function printEmployeeProfile(emp: EmployeeProfile): void {
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}, Department: ${emp.department}`);
}

interface Company {
  name: string;
  employees: EmployeeProfile[];
  locations: [string, string][];
}

const myCompany: Company = {
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

type Transformer = (name: string) => string;

function processNames(names: string[], transformer: Transformer): string[] {
  return names.map(transformer);
}

const upperCase: Transformer = (name) => name.toUpperCase();
const addPrefix: Transformer = (name) => `Mr./Ms. ${name}`;

console.log(processNames(['Ali', 'Sara'], upperCase));
console.log(processNames(['Ali', 'Sara'], addPrefix));

type Settings = {
  readonly theme: 'light' | 'dark';
  readonly language: string;
  readonly notificationsEnabled?: boolean;
};

const appSettings: Settings = {
  theme: 'dark',
  language: 'en',
  notificationsEnabled: true,
};

function findEmployee(company: Company, empId: number): EmployeeProfile | undefined {
  return company.employees.find((e) => e.id === empId);
}

function filterEmployeesByDept(company: Company, dept: string): EmployeeProfile[] {
  return company.employees.filter((e) => e.department === dept);
}

// Example
console.log(findEmployee(myCompany, 1));
console.log(filterEmployeesByDept(myCompany, 'IT'));
