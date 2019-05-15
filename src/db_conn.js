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

  var newDbName = "i_"+req.body.firstname+"_"+req.body.lastname;

  userinit(newDbName);  
  
});

/**
 * initializes a new user in the postgres database
 * @param {String} newDbName the name of the new database 
 */
function userinit(newDbName){
  //the database 'postgres' is the default database created by postgresql 
  //and will server as the entry point for our database connection
  var config = {
    user: 'postgres', 
    database: 'postgres', 
    password: '', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
  };

  //connect to the database
  var pool = new Pool(config);

  //create new database
  pool.query("create database "+newDbName, (err)=>{
    if(err){
      console.log(err.stack);
    }else{
      //disconnect from the old database
      config.database = newDbName;
      //connect to the new databaase
      pool = new Pool(config);
    
      //create table items
      pool.query("create table items(id bigserial, type bytea,\
        name bytea,\
        value bytea,\
        key bytea);", (err)=>{
          if(err){
            console.log(err.stack);
          }else{
            //insert into the table
            pool.query("insert into items (type, name, value, key) values('cafe', 'cafe', 'cafe', 'cafe');", (err)=>{
              if(err){
                console.log(err.stack);
              }
            });
          }
          
        });
    }

  });
  //disconnect from the database
  pool.end();
}








