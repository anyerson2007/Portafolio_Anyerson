const skills = [
    { icon: '<img src="./html-5_5968267.png" width="60">', title: 'HTML', desc: 'Estructura y semántica' },
    { icon: '🟨', title: 'JavaScript', desc: 'DOM, ES6+, animaciones' },
    { icon: '🧠', title: 'Node.js', desc: 'APIs, autenticación, backend' },
    { icon: '🗃️', title: 'SQL', desc: 'Consultas, joins, escalabilidad' },
  ];

  const projects = [
    { img: './assets/pro1.png', title: 'LEX-time', desc: 'Página web de relojes responsive con HTML y CSS' },
    { img: './assets/Captura desde 2025-07-23 16-11-44.png', title: 'API Colombia Explorer', desc: 'Dashboard estadístico con filtros y diseño responsive' }
  ];

  const experience = [
    { title: 'Proyectos chatbot', date: '2025 - Actualidad', desc: 'Desarrollo de interfaces y flujos automatizados' },
    { title: 'Agregar API a página web', date: '2025', desc: 'Integraciones de datos, UI dinámica' },
    { title: 'Proyectos como estudiante', date: '2025', desc: 'JS, Python, HTML, CSS, API REST' }
  ];

  function renderItems(containerId, items, template) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(template).join('');
  }

  renderItems('skills-container', skills, item => `
    <div class="skill">
      <div class="skill-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `);

  renderItems('projects-container', projects, project => `
    <div class="project">
      <img src="${project.img}" alt="${project.title}" />
      <div class="project-description">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      </div>
    </div>
  `);

  renderItems('experience-container', experience, exp => `
    <div class="exp">
      <h3>${exp.title}</h3>
      <p>${exp.date}<br>${exp.desc}</p>
    </div>
  `);