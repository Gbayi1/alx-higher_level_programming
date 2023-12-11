#!/usr/bin/node
const { argv } = require('node:process');

for(i=0; i<parseInt(argv[2]); i++){
    console.log('C is fun');
}

if(!argv[2]){
    console.log('Missing number of occurrences');
}
