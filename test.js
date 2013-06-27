
var os = require('os');

console.log("\n\nCPUs");
console.dir(os.cpus());

console.log("\n\nfree memory in MB");
console.dir(os.freemem() / (1024*1024));
