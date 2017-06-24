var fs_node = require('fs');
fs_node.readFile(process.argv[2], 'utf-8', function myFunction(err, data)
{
	console.log(data.split('\n').length -1);
});
