#A library for encoding things  
Right now it just deals with encoding integers to an arbitrary base.

##Example usage in node.js
    var b = require("./base_encode");
    console.log(b.base_encode(777));

    // => "NV"

    console.log(b.base_decode("NV"));

    // => 777
    