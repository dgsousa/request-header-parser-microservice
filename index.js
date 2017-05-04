const http = require("http");
const port = process.env.PORT || 3000;
const querystring = require("querystring");



const server = http.createServer((req, res) => {
	homeRoute(req, res);
}).listen(port);

console.log("The server is running on port ", port);

const homeRoute = (req, res) => {
	let body = "";
	req.on("data", (chunk) => {
		body += chunk;
	});
	req.on("end", () => {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(JSON.stringify({
			"ipaddress": req.headers.host,
			"language": req.headers["accept-language"].split(",")[0],
			"software": req.headers["user-agent"].split(/\(|\)/)[1]
		}));
		res.end();
	})

}

