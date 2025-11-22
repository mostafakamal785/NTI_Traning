let data: unknown = 'TypeScript';

if (typeof data === 'string') {
  console.log(data.toUpperCase());
}

class car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
  print() {
    console.log(`Car Brand: ${this.brand}, Year: ${this.year}`);
  }
}
const myCar = new car('Toyota', 2020);
myCar.print();

interface drivable {
  model: string;
  drive(): void;
}

class truck implements drivable {
  model: string;

  constructor(model: string) {
    this.model = model;
  }
  drive() {
    console.log(`Driving a truck: ${this.model}`);
  }
}

const myTruck = new truck('Ford F-150');
myTruck.drive();

function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log(`ID in uppercase: ${id.toUpperCase()}`);
  } else {
    console.log(`ID as number: ${id}`);
  }
}

printId('abc123');
printId(456);

type Admin = { username: string; isAdmin: boolean; permissions: string[] };
type Editor = { username: string; canEdit: boolean; sections: string[] };
type Viewer = { username: string };

function printRole(user: Admin | Editor | Viewer): void {
  if ('isAdmin' in user) {
    console.log(`Admin: ${user.username},has Permissions: ${user.permissions.join(', ')}`);
  } else if ('canEdit' in user) {
    if (user.sections.length > 0) {
      console.log(`Editor: ${user.username},can edit Sections: ${user.sections.join(', ')}`);
    } else {
      console.log(`Editor: ${user.username},has no sections assignments`);
    }
  } else {
    console.log(`Viewer: ${user.username}`);
  }
}

const adminUser: Admin = { username: 'admin1', isAdmin: true, permissions: ['read', 'write', 'delete'] };
const editorUser: Editor = { username: 'editor1', canEdit: true, sections: ['sports', 'news'] };
const viewerUser: Viewer = { username: 'viewer1' };

printRole(adminUser);
printRole(editorUser);
printRole(viewerUser);

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const result = wrapInArray(5); // [5]

console.log(result);

