const http = require('http'); // require is used to import modules

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res)=>{
	
	console.log(req);
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World\n');
	
});


server.listen(port, hostname, () => {
	
	console.log(`Server running at http://${hostname}:${port}/`);
	
});