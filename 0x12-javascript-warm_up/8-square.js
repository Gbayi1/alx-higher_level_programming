#!/usr/bin/node
const { argv } = require('node:process');

for(i=0; i<parseInt(argv[2]); i++){
    let x = '';
    for(j=0; j<parseInt(argv[2]); j++){
        x += 'x';
    }
    console.log(x);
}


if(!argv[2] || (argv[2] && !parseInt(argv[2]))){
    console.log('Missing size');
}


