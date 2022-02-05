const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const router = express.Router();

const app = express();

/*
var corsOptions = {
	origin: "http://localhost:6000"
};

app.use(cors(corsOptions));
*/

/******************************************************************/
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:false}));

/******************************************************************/
var file = fs.readFileSync('./data.json','utf8',(err,data)=>{
	if(err){
		console.error(err);
		return;	
	}
	console.log(data);
}); 

export default file;

var obj = JSON.parse(file);

console.log("type of obj:",typeof obj,"\n"); //type : object
console.log("obj:",obj);

console.log("\n","type of file:",typeof file);  //type : string
console.log("\n","file->",file);
/******************************************************************/

/*********************************************************************/
const port = process.env.PORT || 6000;
app.listen(port,()=>{
		console.log(`api running on port:${port}`);
});
/**********************************************************************/




