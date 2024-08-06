document.addEventListener('DOMContentLoaded', () => {
  // Carrossel Automático
  const track = document.querySelector('.new-carousel-track');
  const items = document.querySelectorAll('.new-carousel-item');
  let currentIndex = 0;
  let autoScroll = setInterval(nextSlide, 2000); // Ajuste o intervalo de tempo conforme necessário

  function nextSlide() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const amountToMove = items[0].offsetWidth;
    track.style.transform = translateX(-${amountToMove * currentIndex}px);
  }

  // Parar o carrossel quando o mouse estiver sobre ele
  track.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
  });

  track.addEventListener('mouseleave', () => {
    autoScroll = setInterval(nextSlide, 2000);
  });

  // Expandir o item ao clicar
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('expanded'));
      item.classList.add('expanded');
    });
  });

  // Mostrar mais projetos
  const showMoreButton = document.getElementById('show-more');
  const projectsContainer = document.querySelector('.projects');

  showMoreButton.addEventListener('click', () => {
    projectsContainer.classList.toggle('show-all');
    showMoreButton.textContent = projectsContainer.classList.contains('show-all') ? 'Mostrar Menos' : 'Saiba Mais';
  });

  // Certification Info Display
  const certificationItems = document.querySelectorAll('.certification-item');
  const certificationInfo = document.getElementById('certification-info');

  certificationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      certificationInfo.textContent = item.dataset.info;
      certificationInfo.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      certificationInfo.style.display = 'none';
    });
  });

  // Skill Info Display
  const skillItems = document.querySelectorAll('.skill-item');
  const skillInfo = document.getElementById('skill-info');

  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      skillInfo.textContent = item.dataset.info;
      skillInfo.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      skillInfo.style.display = 'none';
    });
  });
});