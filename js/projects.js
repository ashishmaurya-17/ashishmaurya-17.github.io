// Load projects dynamically
fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('projectsContainer');
      data.forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
              <img src="${project.image}" alt="${project.title}">
              <div class="project-info">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <a href="${project.link}" target="_blank">View Project</a>
              </div>
          `;
          container.appendChild(card);
      });
  });
