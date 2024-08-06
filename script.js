document.addEventListener('DOMContentLoaded', function() {
  // Carrossel de experiências
  const carousel = document.querySelector('.new-carousel-track');
  let isExpanded = false;

  document.querySelectorAll('.new-carousel-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!isExpanded) {
        item.classList.add('expanded');
        carousel.style.transform = `scale(1.5)`;
      } else {
        item.classList.remove('expanded');
        carousel.style.transform = `scale(1)`;
      }
      isExpanded = !isExpanded;
    });
  });

  // Certificações
  const certificationItems = document.querySelectorAll('.certification-item');
  const certificationInfo = document.getElementById('certification-info');

  certificationItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const info = item.getAttribute('data-info');
      certificationInfo.textContent = info;
    });

    item.addEventListener('mouseout', () => {
      certificationInfo.textContent = 'Clique na imagem para ver com mais detalhes';
    });
  });

  // Habilidades
  const skillItems = document.querySelectorAll('.skill-item');
  const skillInfo = document.getElementById('skill-info');

  skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const info = item.getAttribute('data-info');
      skillInfo.textContent = info;
    });

    item.addEventListener('mouseout', () => {
      skillInfo.textContent = '';
    });
  });

  // Botão "Saiba Mais"
  const showMoreButton = document.getElementById('show-more');
  const showMoreCertificationsButton = document.getElementById('show-more-certifications');
  
  showMoreButton.addEventListener('click', () => {
    window.location.href = '#projetos';
  });
  
  showMoreCertificationsButton.addEventListener('click', () => {
    window.location.href = '#certificacoes';
  });
});
