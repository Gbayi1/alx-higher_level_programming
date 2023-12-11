#!/usr/bin/node
const { argv } = require('node:process');

function add(a, b){
    console.log(a + b);
}

if(argv[2] && argv[3]){
    add(parseFloat(argv[2]), parseFloat(argv[3]));
}else{
    console.log(NaN);
}

