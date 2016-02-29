

(function(){
     
     var through = require('through2');
     var http = require('http');

     var server = http.createServer(function(req, res){
     	if(req.method === 'POST'){
     		req.pipe(through(write)).pipe(res);
     	}else{
     		res.end();
     	}
     });

     var write = function(buffer, encoding, callback){
          this.push(buffer.toString().toLocaleUpperCase());
          callback();
     };

     server.listen(process.argv[2]);

})();