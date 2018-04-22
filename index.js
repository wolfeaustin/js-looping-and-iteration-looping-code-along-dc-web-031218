function printBadges(namesArray){
  for(let num = 0; num < namesArray.length; num++){
    console.log(`Welcome ${namesArray[num]}! You are employee #${num+1}.`);
  }
  return namesArray;
}

function tailsNeverFails(){
  let numTimes = 0;
  while(headsTails())
  {
    numTimes++;
  }
    return `You got ${numTimes} tails in a row!`

}
function headsTails () {
  return Math.random() >= 0.5;
}
