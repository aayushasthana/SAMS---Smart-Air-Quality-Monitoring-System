const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Raspberry1$" ,
  database: "test_sams_db"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));
var test;

app.post('/sgp30',function(req,res){
	
  var thetime = req.body.TimeStamp
  var CO2=req.body.CO2;
  var TVOC=req.body.TVOC;
  var humidity=req.body.Humidity;
  var temperature=req.body.Temperature;
  

   var sql = "INSERT INTO airQuality (piTime, piNUM, piNAME, piCO2, piTVOC, piTemp, piHumidity) VALUES ("+  " ' " + thetime +" ' "+",1, 'Master Bedroom', " +CO2+" ,"+TVOC+", "+temperature+", "+humidity+")";
  
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" Time: ", thetime, 
                    " CO2:", CO2,
					" TVOC: ", TVOC, 
					" Humidity: ",humidity ,
					" Temperature: ", temperature);
  });
  
  
  res.end("yes");
});

app.get('/sgp30',function(req, res, next) {
	
	console.log("GET Request called");
	
	var list_query = "SELECT * from airQuality"

	
	con.query(list_query, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
			console.log("GET Request :status : 500");
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200 OK..log
			console.log("GET Request: status: 200 OK");
	  	}
  	});
});




app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
