const path = require('path');

//require.main.filename => gives us the path to the file that is responsible
//for the fact that our application is running
module.exports = path.dirname(require.main.filename);