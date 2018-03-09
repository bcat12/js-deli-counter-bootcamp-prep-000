var katzDeliLine= [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
 return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if (katzDeliLine==0)
   return "the line is empty"
}