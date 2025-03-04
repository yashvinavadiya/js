let count = 0;
let val;

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let resent = document.getElementById('resent');

start.addEventListener('click', function() {
  if (!val) {  
    val = setInterval(function() {
      count++;
      document.getElementById('counter').innerHTML = count;
    }, 300);
   
  }
});

stop.addEventListener('click', function() {
  clearInterval(val);  
  val = null;
 
});

resent.addEventListener('click', function() {
  count = 0;  
  document.getElementById('counter').innerHTML = count;
  clearInterval(val); 
  val= null;
 
});

