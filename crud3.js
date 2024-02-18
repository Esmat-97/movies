const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'movie'
});



app.get('/', (req, res) => {
  con.query("SELECT * FROM customers", (err, result) => {
      if (err) {
          console.error("Error executing doctors query:", err);
          return res.status(500).json({ error: "Failed to fetch doctors data" });
      }
      else{
        res.json({result});
      }

      
  });
});


    




app.post('/sign', (req, res) => {
  const { username, password} = req.body;
  
  // Insert data into MySQL
  const query = 'INSERT INTO customers (username, password) VALUES (?,?)';
  con.query(query, [ username, password ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});




    
app.listen(2000,()=>{
console.log('the server listen at posrt http://localhost:2000');
});