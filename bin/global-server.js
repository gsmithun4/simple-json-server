#!/usr/bin/env node
const appStarter = require('../lib');

const args = process.argv.splice(process.execArgv.length + 2);
let file = `${process.cwd()}\\db.json`;
let port = 3000;
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
console.log('-------------------Json Server Starting---------------------')
console.log('DB File : ' + file);
console.log('Port : ' + port);
console.log('------------------------------------------------------------')
appStarter.start(port, file);