/** Named Exports with exports single name and user proper function */
// exports.add = function (a, b) {
//   return a + b;
// };
// exports.sub = function (a, b) {
//   return a - b;
// };

/** Default Export */

// module.exports = function () {
//  return ("hello");
// };

/**  multiple exports default */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

module.exports = {
  add,
  sub,
  mul,
};
