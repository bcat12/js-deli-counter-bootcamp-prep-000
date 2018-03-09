var katzDeliLine= [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
 return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

function currentLine(katzDeliLineline) {
   var newarray = [];
   if (katzDeliLinelinee.length === 0) {
     return "The line is currently empty.";
   }
   for (var i = 0; i < katzDeliLinelinee.length; i++) {
     newarray.push(` ${i+1}. ${katzDeliLinelinee[i]}`);
 	}
   return "The line is currently:" + newarray;
}