module.exports = function reverse (n) {
  
  let arr = n.toString().split('');
  let arr1 = arr.reverse();
  let str = arr1.join('');
  return parseInt(str);
}
