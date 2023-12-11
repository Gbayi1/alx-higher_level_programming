#!/usr/bin/node
const { argv } = require('node:process');

let firstBig = 0;
let secBig = 0;

for(i = 2; argv[i]; i++){
    if(parseInt(argv[i]) > parseInt(argv[i+1])){
       if(firstBig < parseInt(argv[i])){
            firstBig = parseFloat(argv[i]);
       }
        // console.log(parseInt(argv[i]))
    }else if(parseInt(argv[i]) < parseInt(argv[i+1])){

        // console.log(parseInt(argv[i+1]))
        if(firstBig < parseInt(argv[i+1]));
        firstBig = parseInt(argv[i+1]);
    }
}

for(j=2; argv[j]; j++){
                if(parseInt(argv[j]) != firstBig){
                    if(secBig < parseInt(argv[j])){
                        secBig = parseFloat(argv[j])
                   }
                    }

                    if(parseInt(argv[j+1]) != firstBig){
                        if(secBig < parseInt(argv[j+1])){
                            secBig = parseInt(argv[j+1])
                        }
                        }
                
                }
                
               console.log(secBig)
               