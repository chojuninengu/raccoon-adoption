document.addEventListener('DOMContentLoaded', () => {
    const raccoons = [
        {
            name: "Rocket",
            age: 5,
            description: "A playful and friendly raccoon.",
            price: 350,
            imageUrl: "https://res.cloudinary.com/<cloud-name>/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.45-PM.jpeg"
        },
        {
            name: "Bandit",
            age: 6,
            description: "A curious and adventurous raccoon.",
            price: 400,
            imageUrl: "https://res.cloudinary.com/<cloud-name>/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.46-PM.jpeg"
        },
        // Add more raccoons here
    ];

    const raccoonsContainer = document.getElementById('raccoons');
    raccoons.forEach(raccoon => {
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
});