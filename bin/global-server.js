#!/usr/bin/env node

const args = process.argv.splice(process.execArgv.length + 2);
var file = `${process.cwd()}\\db.json`;
var port = 3000;
if (args && args.length > 0) {
	args.map((arg, index) => {
		if (arg === '-p')
			port = args[index + 1];
		else if (arg === '-f')
			file = `${process.cwd()}\\${args[index + 1]}`;
		else if (arg === '-fp') 
			file = args[index + 1];
	});
}
const appStarter = require('../lib/index.js');
console.log('-------------------Json Server Starting---------------------')
console.log('DB File : ' + file);
console.log('Port : ' + port);
console.log('------------------------------------------------------------')
appStarter.start(port, file);