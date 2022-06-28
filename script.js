window.onload = () => {
  
  const box = document.querySelector('.box');
  setTimeout(() => box.classList.add('active'), 2000);
  
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
      box.classList.remove('active');
    }
  });
  
}