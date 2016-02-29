
(function(){

  'use strict';

  var through = require('through2');
 
  var write = function(buffer,encoding,callback){
  	var info = buffer.toString().toLocaleUpperCase();
    this.push(info);
    callback();
  };

 var stream = through(write);
 process.stdin.pipe(stream).pipe(process.stdout);


})();


