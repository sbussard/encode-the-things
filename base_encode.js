/**
* base_encode
* @returns
* The string value of decimal n mapped to base map
* @params
* n - a decimal number
* map - a string representation of the base to be mapped to
*/
var base_encode = function (n, map) {
  var rem,
    arr = [],
    num = n || '',
    charmap = map || "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ",
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
* base_decode
* @returns
* The decoded decimal value of m
* @params
* m - the value of an encoded decimal number that has been mapped to map
* map - a string of characters that represents the base that m has been mapped to
*/
var base_decode = function(m, map) {
  var charmap = map || "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
  res = 0;
  for(var i = 0; i < m.length; i++) {
    var x = Math.pow(charmap.length, (m.length - i - 1));
    var val = parseInt(charmap.indexOf(m.charAt(i)), 10);
    res += x * val;
  }
  
  return res;
};

// if it's a node.js module, export the functions
if(typeof module !== "undefined") {
  module.exports = {
    base_encode: base_encode,
    base_decode: base_decode
  };
}