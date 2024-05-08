document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById("timer");
  
    function countdown() {
      const endTime = new Date("2024-12-31 23:59:59").getTime();
      
      const now = new Date().getTime();
      const distance = endTime - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (distance < 0) {
        clearInterval(interval);
        timerDisplay.innerHTML = "EXPIRED";
      }
    }
  
    countdown();
    const interval = setInterval(countdown, 1000);
  });
  