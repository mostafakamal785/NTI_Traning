let data = 'TypeScript';
if (typeof data === 'string') {
    console.log(data.toUpperCase());
}
class car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    print() {
        console.log(`Car Brand: ${this.brand}, Year: ${this.year}`);
    }
}
const myCar = new car('Toyota', 2020);
myCar.print();
class truck {
    constructor(model) {
        this.model = model;
    }
    drive() {
        console.log(`Driving a truck: ${this.model}`);
    }
}
const myTruck = new truck('Ford F-150');
myTruck.drive();
function printId(id) {
    if (typeof id === 'string') {
        console.log(`ID in uppercase: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID as number: ${id}`);
    }
}
printId('abc123');
printId(456);
function printRole(user) {
    if ('isAdmin' in user) {
        console.log(`Admin: ${user.username},has Permissions: ${user.permissions.join(', ')}`);
    }
    else if ('canEdit' in user) {
        if (user.sections.length > 0) {
            console.log(`Editor: ${user.username},can edit Sections: ${user.sections.join(', ')}`);
        }
        else {
            console.log(`Editor: ${user.username},has no sections assignments`);
        }
    }
    else {
        console.log(`Viewer: ${user.username}`);
    }
}
const adminUser = { username: 'admin1', isAdmin: true, permissions: ['read', 'write', 'delete'] };
const editorUser = { username: 'editor1', canEdit: true, sections: ['sports', 'news'] };
const viewerUser = { username: 'viewer1' };
printRole(adminUser);
printRole(editorUser);
printRole(viewerUser);
function wrapInArray(value) {
    return [value];
}
const result = wrapInArray(5); // [5]
console.log(result);
export {};
