#!/usr/bin/node
const { argv } = require('node:process');

for(i=0; i < 3; i++){
    if(i > 1 && argv[i+1]){
        console.log(argv[i] + ' is ' + argv[i + 1]);    
    }
}

if(!argv[2]){
    console.log("undefine is undefine");
}

if(argv[2] && !argv[3]){
    console.log(argv[2] + ' is undefine' );
}
