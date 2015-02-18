if (s.prop10.indexOf('2') > -1){
  twoPlus = true;
  console.log('twoPlus is ' + twoPlus);
} else {

  var int=setInterval(function(){
console.log('10 seconds');
tenPlus = true; // sets the 10+ var to true at 10 seconds
tenPlusRun(true);
clearInterval(int);
  },10000);

  function tenPlusRun(x){
    if(x){
      console.log('tenPlus is ' + tenPlus);
    }
  }
}