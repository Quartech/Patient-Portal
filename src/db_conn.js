var express = require("express");
var app = express();
app.listen(3001, ()=>{
    console.log("server running");
});

app.get("/data", (req, res, next)=>{
    res.json(["test"])
});


var {Pool} = require("pg");
var config = {
    user: 'postgres', 
    database: 'test', 
    password: '', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('connected to the db');
});

pool.query("select * from test")
    .then((res) => {
      console.log(res.rows);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
