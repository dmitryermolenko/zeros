module.exports = function zeros(expression) {
   var index = expression.indexOf('!');
  var string = '';
  for (var i = 0; i < index; i++) {
    string = string + expression[i];
    string = parseInt(string, 10);
}
 var total = string;
  for (var i = string - 1; i > 0; i--) {
    total = total * i;
  }
  total = String(total);

var sum = 0;
var position = total.length - 1;


while (total[position] === '0') {
  sum = sum + 1;
  position--;
}
return sum;
};
