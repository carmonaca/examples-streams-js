

(function(){
     var trumpet = require('trumpet');
     var through = require('through2');
     var tr = trumpet();
  

	   var write = function(buffer, enconding, callback){
	     this.push(buffer.toString().toLocaleUpperCase());
	   	 callback();
	   }
   var stream = through(write);
   var str = tr.select('.loud').createStream();

   str.pipe(stream).pipe(str);
   process.stdin.pipe(tr).pipe(process.stdout);
})();