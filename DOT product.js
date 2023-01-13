let n = 3;
function dotproduct(vA, vB) {
  let product = 0;
  for (i = 0; i < n; i++) {
    product = product + vA[i] * vB[i];
    return product;
  }
}
console.log(dotproduct([3, 4, -5], [2, 6, 5]));
