

(function(){

	'use strict';

	var split = require('split');
    var through = require('through2');

    
    //var numbers =['one','two','three','four','five','six','seven','eight','nine'];
    var lineNumber = 0;
    var write = function(buffer, encoding, callback){
      var info =  "";
     if(lineNumber % 2 === 0){
       info = buffer.toString().toLocaleLowerCase() + '\n';
     }else{
     	info = buffer.toString().toLocaleUpperCase() + '\n';
     }
     this.push(info);
     lineNumber++;
     callback();
    };

    var stream = through(write);
	process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);

})();