var express = require("express");
var {Pool} = require("pg");


var app = express();
app.listen(3001, ()=>{
    console.log("server running");
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//recieve get request
app.get("/data", (req, res, next)=>{
    res.json({"response":"hello"})
});

//recieve post data
app.post("/data", (req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('hello client!');
  console.log(req.body.firstname);

  var config = {
    user: 'postgres', 
    database: 'postgres', 
    password: '', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
  };

  var pool = connect(config);
  var newDbName = "i_"+req.body.firstname+"_"+req.body.lastname
  pool.query("create database "+newDbName).then(()=>{
    //disconnect from the old database
    config.database = newDbName;
    //connect to the new databaase
    pool = connect(config);

    pool.query("create table items(name varchar(50),\
      lastname varchar(50),\
      email varchar(80));").then(()=>{
        pool.query("insert into items(name, lastname, email) values ('"+req.body.firstname+"', '"+req.body.lastname+"', '"+req.body.email+"');")
      });
  });

  //disconnect from the database
  disconnect(pool);
  
});


//connect to the postgres database
var config = {
    user: 'postgres', 
    database: 'test', 
    password: '', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};


/**
 * connects to a specified database
 * @param config the parameter object for the dtaabase
 * example:
 * 
 * var config = {
    user: 'postgres', 
    database: 'test', 
    password: '', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
  };
 * @returns pool object, the database conenction object
 */
function connect(config){
  const pool = new Pool(config);


  pool.on('connect', () => {
    console.log('connected to the db');
  });
  return pool;
}


/**
 * query the database
 * @param q (String) the database query
 * @param pool (connection object) the database conenction
 * object
 */
function query(q, pool){
  pool.query(q)
    .then((res) => {
      console.log(res.rows);
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * disconnects the database connection object
 * @param {Pool object} pool 
 */
function disconnect(pool){
  pool.end();
}
