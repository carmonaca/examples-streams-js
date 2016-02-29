
(function(){
   
   'use strict';

   var duplexer = require('duplexer2');
   var through = require('through2');

   module.exports = function(counter){
         var writableStream = through(write,end);
         var resultCount = {};

         var write = function(buffer,encoding,callback){
              resultCount[buffer.country]   =+  1;
              callback();
          };

          var end = function(done){
          	  counter.setCounts(resultCount);
          	  done();
          };

          return duplexer(writableStream, counter);
   };

})();