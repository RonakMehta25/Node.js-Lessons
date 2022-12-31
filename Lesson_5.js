// Node.js URL Module

//https://www.w3schools.com/nodejs/nodejs_url.asp

const url = require('url');
const http = require('http');
const fs= require('fs');

http.createServer((req,res) =>{
	const q = url.parse(req.url,true);
	const filename = '.' + q.pathname;
	
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return res.end('404 Not Found');
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});
	
}).listen(8080);