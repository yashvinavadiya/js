let count = 0;
let counterInterval;
const counterDisplay = document.getElementById('counter');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const resent = document.getElementById('resent');

function updateCounterDisplay() {
  counterDisplay.textContent = count;
}

start.addEventListener('click', function() {
  if (!counterInterval) {  
    counterInterval = setInterval(function() {
      count++;
      updateCounterDisplay();
    }, 300);
    start.disabled = true;  
    stop.disabled = false; 
  }
});

stop.addEventListener('click', function() {
  clearInterval(counterInterval);  
  counterInterval = null;
  start.disabled = false; 
  stop.disabled = true;  
});

resent.addEventListener('click', function() {
  count = 0;  
  updateCounterDisplay();
  clearInterval(counterInterval); 
  counterInterval = null;
  start.disabled = false; 
  stop.disabled = true;  
});

