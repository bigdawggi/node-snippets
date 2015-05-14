var fs = require('fs')

fs.readFile('test2.js', function(err, data){
  if ( err ) throw err
  fs.writeFile('test.js', data)
})