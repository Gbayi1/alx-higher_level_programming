#!/usr/bin/node
const { argv } = require('node:process');

for(i=2; argv[i]; i++){

    console.log(argv[i]);    
}

if(!argv[2]){
    console.log("No Argument");
}
