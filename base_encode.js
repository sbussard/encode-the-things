function base_encode(n, map) {
  var rem,
    arr = [],
    num = n || 0,
    charmap = map || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    base = charmap.length;

  if (num === 0) {
    return charmap[0];
  }

  while (num) {
    rem = num % base;
    num = (num - rem) / base;
    arr.push(charmap.substring(rem, rem + 1));
  }

  return arr.reverse().join('');
}

console.log(base_encode((new Date().getTime()), "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ"));