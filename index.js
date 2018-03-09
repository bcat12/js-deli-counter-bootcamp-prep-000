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

function currentLine(katzDeliLine){
   if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
  var newarray= []
  var i=0;
  while( i<katzDeliLine.length){
    i++;
  }
 
  }
  else
  newarray += newarray.push(` ${i+1}. ${katzDeliLine[i]}`);
  return "The line is currently:"+ newarray
}