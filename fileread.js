var fs_mod = require('fs');
console.log (fs_mod.readFileSync(process.argv[2]).toString().split('\n').length - 1);
