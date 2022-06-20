var fs = require('fs');

fs.writeFile('first.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
