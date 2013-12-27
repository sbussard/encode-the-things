#A library for encoding things  
Right now it just deals with encoding integers to an arbitrary base.

**FULL DISCLOSURE**: It's pretty unreliable at the moment.

##Example usage in node.js
    var b = require("./base_encode");

    console.log(b.encode(777));
    // => "NV"

    console.log(b.decode("NV"));
    // => 777

###Converting between hex, decimal, and binary

    var b = require("./base_encode");
    var hex = "0123456789ABCDEF";
    var binary = "01";

    console.log(b.encode(255, hex));
    // => "FF"

    console.log(b.decode("FF", hex));
    // => 255

    console.log(b.convert("FF", hex, binary));
    // => 11111111

###Using an arbitrary base

    var b = require("./base_encode");
    var mybase = "asdf123";
    
    console.log(b.encode(1981, mybase));
    // => "22fa"

    console.log(b.decode("22fa", mybase));
    // => 1981
