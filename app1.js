var http = require("http");

http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   if (req.method === 'POST') {
	let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			console.log(
				parse(body)
			);
			res.end('ok');
		});   
}
 
   res.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   res.end('<p>Hi World</p> <button>hi</button>\n');
}).listen(3000);
 
// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")