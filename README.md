#A library for encoding things  
Right now it just deals with encoding integers to an arbitrary base.

##Example usage in node.js
    var b = require("./base_encode");

    console.log(b.base_encode(777));
    // => "NV"

    console.log(b.base_decode("NV"));
    // => 777

###Converting between hex and decimal

    var b = require("./base_encode");
    var hex = "0123456789ABCDEF";

    console.log(b.base_encode(255, hex));
    // => "FF"

    console.log(b.base_decode("FF", hex));
    // => 255

###...using an arbitrary base

    var b = require("./base_encode");
    var mybase = "asdf123";
    
    console.log(b.base_encode(1981, mybase));
    // => "22fa"

    console.log(b.base_decode("22fa", mybase));
    // => 1981