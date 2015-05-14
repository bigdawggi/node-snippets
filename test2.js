var fs = require('fs')
var util = require('util')

util.log('Beginning Script')


var copy = function(src, dest, callback){
  fs.readFile(src, function(err, data){
    if ( err ) throw err

    fs.writeFile(dest, data)
    util.log('done writing file')
    if ( callback ) callback()
  })
}

copy('test2.js', 'test3.js');
// console.log()


// fs.unlink('/mattimages', createSymlink)

function createSymlink(){
  fs.symlink(
    process.env.HOME + '/Downloads/images',
    '/mattimages',
    function(err, data){
      if ( err ) util.log(err)
      else
        util.log('All Done with the symlink')
    }
  )
}
util.log('End of Script')