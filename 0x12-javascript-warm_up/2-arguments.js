#!/usr/bin/node
const { argv } = require('node:process');

if(argv[2]){
    console.log("Argument Found");
}else{
    console.log("No Argument");
}
