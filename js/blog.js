fetch('data/blog.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('blogContainer');
      data.forEach(post => {
          const card = document.createElement('div');
          card.className = 'blog-card';
          card.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <a href="${post.link}" target="_blank">Read More</a>
          `;
          container.appendChild(card);
      });
  });
