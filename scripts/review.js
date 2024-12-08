let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

vistnumbers.innerHTML = `number of vists: <span class="highlight">${numVisits}</span>`;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

