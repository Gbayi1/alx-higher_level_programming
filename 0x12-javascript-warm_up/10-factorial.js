#!/usr/bin/node
const { argv } = require('node:process');
function factorial(a, b = 1){
    if(a == 0){
        return 1;
    }

    if(a == 1 || a == 2){
        return a;
    }

    if(a > 2){
        return a * factorial(a-1);
    }
}

if(parseInt(argv[2])){
    console.log(factorial(parseInt(argv[2])));
}else{
    console.log(1);
}