const http = require('http');
const dt = require('./Lesson_3');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req,res) => {
	
	

	res.statusCode = 200;
	
	res.setHeader('Content-Type','text/html');
	
	const myDate = dt.myDateTime();
	
	res.end(`<html>
		<body>
			<h1>hello world : ${myDate} </h1>
		</body>
	</html>`);

});


//backtick can be used for writing string literal without use of backslash or concatenation.

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});