// author:    Stephen Bussard
// twitter:   @sbussard
//
// inspiration for this project was found at
// http://stackoverflow.com/questions/1119722/base-62-conversion-in-python

// defaultmap was designed for readability
var defaultmap = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";

/**
* encode
* @returns
* The string value of decimal n mapped to base map
* @params
* n - a decimal number
* map - a string representation of the base to be mapped to
*/
var encode = function (n, map) {
  var rem,
    arr = [],
    num = n || '',
    charmap = map || defaultmap,
    base = charmap.length;

  if (num === '') {
    return '';
  }

  while (num) {
    rem = num % base;
    num = (num - rem) / base;
    arr.push(charmap.substring(rem, rem + 1));
  }

  return arr.reverse().join('');
};


/**
* decode
* @returns
* The decoded decimal value of m
* @params
* m - the value of an encoded decimal number that has been mapped to map
* map - a string of characters that represents the base that m has been mapped to
*/
var decode = function(m, map) {
  var charmap = map || defaultmap,
    res = 0;

  for(var i = 0; i < m.length; i++) {
    var x = Math.pow(charmap.length, (m.length - i - 1)),
      val = parseInt(charmap.indexOf(m.charAt(i)), 10);
    res += x * val;
  }
  
  return res;
};

/**
* convert
* @returns
* The string that is a result of converting the value of n
* represented in map1 to the value of n represented in map2
* @params
* n - a number represented in map1
* map1 - initial map
* map2 - final map
* @example
* to convert between hex and binary one would use
* convert("FF", "0123456789ABDEF", "01");
* // => 11111111
*
*/
var convert = function (n, map1, map2) {
  return encode(decode(n, map1), map2);
};

// if it's a node.js module, export the functions
if(typeof module !== "undefined") {
  module.exports = {
    encode: encode,
    decode: decode,
    convert: convert
  };
}