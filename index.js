const   http = require('http'), //This module provides the HTTP server functionalities
        path = require('path'), //The path module provides utilities for working with file and directory paths
        express = require('express'); //This module allows this app to respond to HTTP requests, defines the routing and renders back the required content

const   router = express(), 
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'views'))); //We serve static content from "views" folder
router.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be encoded in a URL targeting our end point
router.use(express.json()); //We include support for JSON

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});

