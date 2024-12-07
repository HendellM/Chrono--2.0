document.addEventListener("DOMContentLoaded", () => {
    const btnLupa = document.getElementById("btn-lupa");
    const inputPesquisa = document.getElementById("input-pesquisa");
    btnLupa.addEventListener("click", () => {
      inputPesquisa.classList.toggle("show");
      inputPesquisa.focus();
    });
  });

  document.querySelectorAll('.slider-container').forEach(sliderContainer => {
    let isDown = false;
    let startX;
    let scrollLeft;
  
    sliderContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      sliderContainer.classList.add('active');
      startX = e.pageX - sliderContainer.offsetLeft;
      scrollLeft = sliderContainer.scrollLeft;
    });
  
    sliderContainer.addEventListener('mouseleave', () => {
      isDown = false;
      sliderContainer.classList.remove('active');
    });
  
    sliderContainer.addEventListener('mouseup', () => {
      isDown = false;
      sliderContainer.classList.remove('active');
    });
  
    sliderContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderContainer.offsetLeft;
      const walk = (x - startX) * 2;
      sliderContainer.scrollLeft = scrollLeft - walk;
    });
  
    sliderContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - sliderContainer.offsetLeft;
      scrollLeft = sliderContainer.scrollLeft;
    });
  
    sliderContainer.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - sliderContainer.offsetLeft;
      const walk = (x - startX) * 2;
      sliderContainer.scrollLeft = scrollLeft - walk;
    });
  
    sliderContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      sliderContainer.scrollLeft += e.deltaY;
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const elementPosition = targetElement.offsetTop;
        const viewportHeight = window.innerHeight; 
        const elementHeight = targetElement.offsetHeight; 
  
        const scrollPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);
  
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    });
  });