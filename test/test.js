var yazl = require("../");
var path = require("path");

yazl.open(path.join(__dirname, "dump.zip"), function(err, zipfile) {
  if (err) throw err;
  // it's me!
  zipfile.addFile(__filename, "asdf.txt");
  zipfile.end();
});
