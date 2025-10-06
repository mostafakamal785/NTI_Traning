import express from 'express';
const app = express();

let users = [
  { id: 1, name: 'Amina', age: 25 },
  { id: 2, name: 'Khalid', age: 30 },
  { id: 3, name: 'Layla', age: 22 },
];

app.listen(3000);

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('welcome to mhy new website');
});

// app.get('/users', (req, res) => {
//   res.json(users);
// });
app.get('/users/:id', (req, res) => {
  let user;
  let isexist = false;
  if (req.params.id <= users[users.length-1].id) {
      let user = users.find((user) => {
        return user.id === Number(req.params.id);
      });
    isexist = 1;

  }
  if (isexist) {
    res.json(user);
  }
  res.status(404).send('user not found');
});


app.get('/users', (req,res) => {
  let usersval = users.filter((user) => { return user.name.toLowerCase() === req.query.name.toLowerCase(); })
  console.log(usersval);
   if (usersval.length== 0) {
    res.json(users)
  }
  res.json(usersval)
  
})

app.post('/add-users', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let newid = users.length + 1;
  let newuser = {
    id: newid,
    name,
    age
  }
  users.push(newuser);
  res.json(users)
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});