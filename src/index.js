module.exports = function getZerosCount(number, base) {
  let n = number;
  let k = base;
  let test = 1e20;
  for (let i = 2; i <= k; i++) {
    if (k % i == 0) {
      let cnt_k1 = 0;
      while (k % i == 0) {
        cnt_k1++;
        k /= i;
      }
      //console.log('cnt_k1', cnt_k1)
      let cnt_k2 = 0;
      let t = n;
      while (t / i > 0 && t > i) {
        cnt_k2 += Math.floor(t/i);
        t /= i;
      }
      
      test = Math.min(test, cnt_k2/cnt_k1);
      test = Math.floor(test);
    }

  }
  
  return (test > 0) ? test : 1;
}
