module.exports = function zeros(expression) {

 /*запись в массив номеров позиций, в которых встречается * */
var listIdx = [];
for (var i = 0; i < expression.length; i++) {
  if (expression[i].indexOf('*') !== -1) {
      listIdx.push(i);
  }
}

/*запись в массив всех факториалов*/
var startIndex = 0;
var listFactorial = [];
for (var j = 0; j <= listIdx.length; j++ ) {
  listFactorial.push(expression.slice(startIndex, listIdx[j]));
  startIndex = listIdx[j] + 1;
}

/* запись в массив суммы '!' каждого факториала*/
var listExclamationMark = [];

for (var a = 0; a < listFactorial.length; a++) {
 var sum = 0;
 var position = listFactorial[a].length - 1;

while (listFactorial[a][position] === "!") {
  sum = sum + 1;
  position--;
 }
 listExclamationMark.push(sum);
}

/* приведение факториалов к числовому типу*/

for (var b = 0; b < listFactorial.length; b++) {
  listFactorial[b] = parseInt(listFactorial[b]);
}

var totalFactorial = 1;
for (var c = 0; c < listFactorial.length; c++) {
  var total = listFactorial[c];
  for (var d = listFactorial[c] - listExclamationMark[c]; d > 0; d = d - listExclamationMark[c]) {
   var total = total * d;
}
  totalFactorial = totalFactorial * total;
}
  totalFactorial = String(totalFactorial);


var zeroSum = 0;
var nextPosition = totalFactorial.length - 1;


while (totalFactorial[nextPosition] === '0') {
  zeroSum = zeroSum + 1;
  nextPosition--;
}
return zeroSum;

};


