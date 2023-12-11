#!/usr/bin/node
const { argv } = require('node:process');


if(argv[2]){

    if(parseFloat(argv[2])){
        console.log('My number: ' + parseFloat(argv[2]));
    }
}

if(argv[2]){
    if(!parseInt(argv[2])){
        console.log("Not a number");
    }
}

if(!argv[2]){
    console.log("Not a number");
}
