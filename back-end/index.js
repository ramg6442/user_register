
const express = require('express');
const app = express();
//const bodyParser= require('body-parser');
const mysql = require('mysql');
const cors= require('cors');


// Set up connection to database.
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'user_register',
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.urlencoded({extended:false}));
app.post('/api/insert', (req, res)=> {
  const email=req.body.email
  const phone=req.body.phone
  const name=req.body.uname
  const password=req.body.password;
  const sql = "INSERT INTO register (email,phone, name, password) VALUES (?, ?, ?, ?)";
  con.query(sql,[email,phone,name, password],(err,result)=>
  {
      console.log(err);
    res.send('Success!');
  });
  
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});