var fs = require('fs');

fs.unlink('first.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});