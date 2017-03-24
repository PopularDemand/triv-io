const server = require('./lib/server.js');
const io = require('./lib/socket');

// Constants
const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`listening on port ${PORT}`));