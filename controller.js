//controllers are in this file 
//import file from '../data.json';

const everything = require('./data.json');
const fs = require('fs');
const express = require('express');
const router = express.Router();
/**************************************************************************** */
const data = fs.readFileSync('./data.json','utf8',(err,data)=>{
   if(err){ console.error("failed to read file");}
   else{
       console.log("successfully read");
   }
});
console.log(data);
console.log(typeof data); //string data type 
/************************************************************************* */
const showItems = ((req,res)=>{
    res.json(everything);
});


exports.list = function(req,res) {
    res.send(file);
}
/************************************************************************* */