

( function(){
       
       'use strict';
       var concat = require('concat-stream');

       var write = function(body){
           var info = body.toString().split('').reverse().join('');
           console.log(info);
       };

     process.stdin.pipe(concat(write));

})();