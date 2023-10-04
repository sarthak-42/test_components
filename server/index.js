const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  database: "agent_db",
  user: "root",
  password: "@4200Sarthak",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM agent_table";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const {
    name,
    contact,
    email,
    destination,
    role,
  } = req.body;
  const sqlInsert =
    "INSERT INTO agent_table (name,contact, email,destination, role)VALUES (?,?,?,?,?)";
  db.query(sqlInsert,[name,contact, email,destination, role], (error,result)=>{
    if(error){
        console.log("Error",error)
    }
  })
});

app.get("/", (req, res) => {
  // const sqlInsert = 'INSERT INTO agent_table (agent_name,agent_contact, agent_email,agent_destination, agent_role)VALUES ("Jhon", "7878748958","jhon@gmail.com", "Europe", "Agent")'
  // db.query (sqlInsert, (error, result)=>{
  //     console.log("error",error)
  //     console.log("result",result)
  //     res.send("Kem palty")
  // })
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
