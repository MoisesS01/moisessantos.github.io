document.addEventListener('DOMContentLoaded', function() {
  // Carrossel de experiências
  const carousel = document.querySelector('.new-carousel-track');
  const items = document.querySelectorAll('.new-carousel-item');
  let autoScroll;
  let currentIndex = 0;
  let isPaused = false;

  function updateCarousel() {
    const amountToMove = items[0].offsetWidth;
    carousel.style.transform = `translateX(-${amountToMove * currentIndex}px)`;
  }

  function nextSlide() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 2000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // Iniciar o carrossel
  startAutoScroll();

  // Adicionar eventos de mouse
  carousel.addEventListener('mouseover', stopAutoScroll);
  carousel.addEventListener('mouseout', startAutoScroll);

  document.querySelectorAll('.new-carousel-item').forEach(item => {
    item.addEventListener('click', () => {
      if (isPaused) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
      isPaused = !isPaused;
    });
  });

  // Certificações
  const certificationItems = document.querySelectorAll('.certification-item');
  const certificationInfo = document.getElementById('certification-info');

  certificationItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const info = item.getAttribute('data-info');
      certificationInfo.textContent = info;
      certificationInfo.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
      certificationInfo.textContent = 'Clique na imagem para ver com mais detalhes';
      certificationInfo.style.display = 'none';
    });
  });

  // Habilidades
  const skillItems = document.querySelectorAll('.skill-item');
  const skillInfo = document.getElementById('skill-info');
  const showMoreSkillsButton = document.getElementById('show-more-skills');
  const allSkillItems = Array.from(skillItems);

  skillItems.forEach((item, index) => {
    if (index >= 10) { // Mostra apenas os primeiros 10 itens
      item.classList.add('hidden');
    }
  });

  showMoreSkillsButton.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.skill-item.hidden');
    if (hiddenItems.length > 0) {
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      showMoreSkillsButton.textContent = 'Mostrar Menos';
    } else {
      allSkillItems.forEach((item, index) => {
        if (index >= 10) {
          item.classList.add('hidden');
        }
      });
      showMoreSkillsButton.textContent = 'Saiba Mais';
    }
  });

  skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const info = item.getAttribute('data-info');
      skillInfo.textContent = info;
      skillInfo.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
      skillInfo.textContent = '';
      skillInfo.style.display = 'none';
    });
  });

  // Botão "Saiba Mais" para Projetos
  const showMoreButton = document.getElementById('show-more');
  const projectsContainer = document.querySelector('.projects');

  // Configurar o estado inicial do contêiner de projetos
  projectsContainer.style.height = '300px'; // Define a altura inicial como colapsada
  showMoreButton.textContent = 'Saiba Mais'; // Define o texto inicial do botão

  showMoreButton.addEventListener('click', () => {
    const isExpanded = projectsContainer.classList.toggle('expanded');
    showMoreButton.textContent = isExpanded ? 'Mostrar Menos' : 'Saiba Mais';
    projectsContainer.style.height = isExpanded ? 'auto' : '300px';
  });

  // Botão "Saiba Mais" para Certificações
  const showMoreCertificationsButton = document.getElementById('show-more-certifications');
  const certificationsContainer = document.querySelector('.certifications');

  // Configurar o estado inicial do contêiner de certificações
  certificationsContainer.style.height = '300px'; // Define a altura inicial como colapsada
  showMoreCertificationsButton.textContent = 'Saiba Mais'; // Define o texto inicial do botão

  showMoreCertificationsButton.addEventListener('click', () => {
    const isExpanded = certificationsContainer.classList.toggle('expanded');
    showMoreCertificationsButton.textContent = isExpanded ? 'Mostrar Menos' : 'Saiba Mais';
    certificationsContainer.style.height = isExpanded ? 'auto' : '300px';
  });
});
