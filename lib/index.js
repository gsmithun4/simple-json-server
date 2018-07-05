const start = function(port, file) {
    const express = require('express');
	const fs = require('fs');
	const bodyParser = require("body-parser");
	let db = require(file);
	const app = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	const runport = port || 3000;

	fs.watchFile('./db.json', (curr, prev) => {
	  console.log('DB File Changed --> Reloading ---->');
	  const rawdata = fs.readFileSync(file);  
	  db = JSON.parse(rawdata); 
	  console.log('Reloaded --->');
	});

	app.all('*', function(req, res, next) {
	  console.log("\n\n\n\n\n\n----------------------------------New Request	-------------------------------------")
	  console.log(`----------Headers ---------- \n${JSON.stringify(req.headers).split(",").join("\n")}`)
	  console.log(`----------Body ------------ \n${JSON.stringify(req.body)}`)
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	  res.header('Access-Control-Allow-Headers', 'Content-Type');
	  res.header('Access-Control-Allow-Credentials','true');
	  res.header('Access-Control-Allow-Headers','access-control-allow-origin, authorization, content-type, x-auth-token, x-request-id, x-userid');
	  res.header('Access-Control-Max-Age', '1800');
	  res.header('Allow', 'GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH');
	  res.header('Vary', 'Origin');
	  next();
	});
	app.post('/:route', (request, response) => {
	  console.log(`----------URL ---------- \n${request.params.route}`);
	  response.send(db[request.params.route]);
	});
	app.get('/:route', (request, response) => {
	  console.log(`----------URL ---------- \n${request.params.route}`);
	  response.send(db[request.params.route]);
	});

	app.listen(runport, (err) => {
	  if (err) {
		return console.log('something bad happened', err);
	  }

	  console.log(`server is listening on ${runport}`);
	})

};
exports.start = start;