import Calculator from './calc.js';

const loadUsers = document.querySelector('.loadUsers');
const firstUsers = document.querySelector('.firstUsers');
const users = document.querySelector('.users');

const loadposts = document.querySelector('.loadposts');
const displayPosts = document.querySelector('.posts');

let postsData;
let usersData;

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('response not ok');
      }
      return response.json();
    })
    .then((data) => {
      usersData = data;
      console.log('the data:', usersData);
      displayUsers(usersData);
    })
    .catch((error) => {
      console.error('Error:', error);
      firstUsers.innerHTML = `<p class="text-red-500">there is erorr: ${error.message}</p>`;
    });
}

getUsers();

loadUsers.addEventListener('click', () => displayUsers(usersData));

function displayUsers(usersData) {
  firstUsers.innerHTML = '';
  users.innerHTML = '';

  if (!usersData || usersData.length === 0) {
    firstUsers.innerHTML = '<p class="text-red-500">No data</p>';
    return;
  }

  usersData.slice(0, 3).forEach((user) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    div.className =
      'userBro bg-slate-500 p-3 text-2xl text-slate-300 rounded-lg m-3 hover:bg-blue-700 w-96';
    h1.innerText = `Name: ${user.name}`;
    h2.innerText = `UserName: ${user.username}`;
    h3.innerText = `Email: ${user.email}`;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    firstUsers.appendChild(div);
  });

  if (usersData.length > 3) {
    const sliceUsers = usersData.slice(3);
    sliceUsers.forEach((user) => {
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      const h2 = document.createElement('h2');
      div.className = 'userBro bg-slate-700 p-3 text-xl text-slate-300 rounded-lg';
      h1.innerText = `Name: ${user.name}`;
      h2.innerText = `UserName: ${user.username}`;
      div.appendChild(h1);
      div.appendChild(h2);
      users.appendChild(div);
    });
  }
}

//################################################################################

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('response not ok');
    }
    postsData = await response.json();
    displayPost(postsData);
    console.log('the posts', postsData);
  } catch (error) {
    console.error('Error:', error);
    firstUsers.innerHTML = `<p class="text-red-500">erorr: ${error.message}</p>`;
  }
}
getPosts();

loadposts.addEventListener('click', () => displayPost(postsData));

function displayPost(postsData) {
  displayPosts.innerHTML = '';
  if (!postsData || postsData.length === 0) {
    displayPosts.innerHTML = '<p class="text-red-500">No data</p>';
    return;
  }
  postsData.slice(-5).forEach((post) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    div.className =
      'userBro bg-slate-500 p-3 text-2xl text-slate-300 rounded-lg m-3 hover:bg-blue-700 ';
    h1.innerText = post.id;
    h2.innerText = post.title;
    // h2.classList = 'm-3'
    h3.innerText = post.body;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    displayPosts.appendChild(div);
  });

}

//################################################################################

console.log(Calculator('+', 5, 3)); // Output: 8
console.log(Calculator('-', 5, 3)); // Output: 2
console.log(Calculator('*', 5, 3)); // Output: 15
console.log(Calculator('/', 5, 0)); // Output: Error: Division by zero
console.log(Calculator('/', 5, 2)); // Output: 2.5
console.log(Calculator('%', 5, 2)); // Output: Error: Invalid operation

const num1Input = document.querySelector('.num1');
const num2Input = document.querySelector('.num3');
const operationSelect = document.getElementById('operation');
const equalBtn = document.querySelector('.equal');
const resultInput = document.querySelector('.result');

equalBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operation = operationSelect.value;
  const result = Calculator(operation, num1, num2);
  resultInput.value = result;
});

//################################################################################

class person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`hello my name is : ${this.name} 
                   may age is: ${this.age}
      `);
  }
  
  isAdult() {
    return this.age > 18 ? true : false;
  }
}
person.prototype.celebrateBirthday = function () {
  this.age += 1;
  console.log(`You are ${this.age} now.`);
};

const person1 = new person('mostafa', 20);
const person2 = new person('ahmed', 17);
person1.sayHello();
console.log("is adult " + person1.isAdult());
person1.celebrateBirthday();
person2.sayHello();
console.log('is adult ' + person2.isAdult());
person2.celebrateBirthday();