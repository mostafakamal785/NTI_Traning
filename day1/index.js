// Task 1: Age Checker
const theAge = document.getElementById("theAge");
const checkAge = document.querySelector('.checkAge');
const warning = document.querySelector('.warning');
document.getElementsByTagName()
// Task 2: Student Score Checker
const studentName = document.querySelector('.student-name');
const studentScore = document.querySelector('.student-score');
const checkScore = document.querySelector('.checkScore');
const result = document.querySelector('.result');

const number = document.querySelector('.number');
const list = document.querySelector('.list');
const show = document.querySelector('.show');

show.addEventListener('click', () => { 
    const num = Number(number.value);
    list.innerHTML = "";
    console.log(`Multiplication Table for ${num}:`);
    
    for (let i = 1; i <= 10; i++) { 
        const li = document.createElement('li');
        li.textContent = `${num} x ${i} = ${num * i}`;
        list.appendChild(li);
        console.log(`${num} x ${i} = ${num * i}`);
    }
});

checkScore.addEventListener('click', () => {
    const name = studentName.value;
    const score = Number(studentScore.value);
    if (score < 0 || score > 100) {
        result.innerHTML = "score must be between 0 and 100";
        result.style.color = "red";
        console.log("score must be between 0 and 100");
    } else if (score >= 90) {
        result.innerHTML = `Student name is: ${name} <br> Grade is: A`;
        result.style.color = "green";
        console.log(`Student name is: ${name} Grade is: A`);
    } else if (score >= 80) {
        result.innerHTML = `Student name is: ${name} <br> Grade is: B`;
        result.style.color = "green";
        console.log(`Student name is: ${name} Grade is: B`);
    } else if (score >= 70) {
        result.innerHTML = `Student name is: ${name} <br> Grade is: C`;
        result.style.color = "yellow";
        console.log(`Student name is: ${name} Grade is: C`);
    } else if (score >= 60) {
        result.innerHTML = `Student name is: ${name} <br> Grade is: D`;
        result.style.color = "orange";
        console.log(`Student name is: ${name} Grade is: D`);
    } else {
        result.innerHTML = `Student name is: ${name} <br> Grade is: F`;
        result.style.color = "red";
        console.log(`Student name is: ${name} Grade is: F`);
    }
});
checkAge.addEventListener('click', () => { 
    const age = Number(theAge.value);
    if (age < 0) {
        const message = 'are you born on the stone age?age must be a positive number';
        warning.innerHTML = `Age: ${age}, Result: ${message}`;
        warning.style.color = 'red';
        console.log(`Age: ${age}, Result: ${message}`);
    }else if (age < 0) {
        const message = 'are alive ? age must be a positive number';
        warning.innerHTML = `Age: ${age}, Result: ${message}`;
        warning.style.color = "red";
        console.log(`Age: ${age}, Result: ${message}`);
    } else if (age <= 18) {
        const message = "you are too young";
        warning.innerHTML = `Age: ${age}, Result: ${message}`;
        warning.style.color = "red";
        console.log(`Age: ${age}, Result: ${message}`);
    } else if (age > 120) {
        const message = "you are too old";
        warning.innerHTML = `Age: ${age}, Result: ${message}`;
        warning.style.color = "red";
        console.log(`Age: ${age}, Result: ${message}`);
    } else {
        const message = "welcome you can drive";
        warning.innerHTML = `Age: ${age}, Result: ${message}`;
        warning.style.color = "green";
        console.log(`Age: ${age}, Result: ${message}`);
    }
});
