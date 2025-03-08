document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/raccoons')
        .then(response => response.json())
        .then(data => {
            const raccoonsContainer = document.getElementById('raccoons');
            data.forEach(raccoon => {
                const raccoonCard = document.createElement('div');
                raccoonCard.className = 'raccoon-card';
                raccoonCard.innerHTML = `
                    <img src="${raccoon.imageUrl}" alt="${raccoon.name}">
                    <h2>${raccoon.name}</h2>
                    <p>Age: ${raccoon.age} weeks</p>
                    <p>Price: $${raccoon.price}</p>
                    <p>${raccoon.description}</p>
                `;
                raccoonsContainer.appendChild(raccoonCard);
            });
        })
        .catch(error => console.error('Error fetching raccoons:', error));
}); 