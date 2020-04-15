console.log('start');
var rez = document.getElementById('var_c');
var rezx = document.getElementById('var_x');
var rezy = document.getElementById('var_y');

function calc_click(){
  var r = document.getElementById('var_r').value;
  var h = document.getElementById('var_h').value;

  //var a = parseFloat(document.getElementById('var_a').value);
  //var b = parseFloat(document.getElementById('var_b').value);
  var p=3.141592;
  var c = p * h * Math.pow(r,2) ;
  rez.innerHTML = c;
}

function calc_click2(){
    
    var x1 = document.getElementById('var_x1').value;
    var p=3.141592;
  var x = 2*p *x1 ;
    rezx.innerHTML = x;
  }