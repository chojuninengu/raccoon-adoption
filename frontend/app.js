document.addEventListener('DOMContentLoaded', () => {
    const raccoons = [
        {
            name: "Rocket",
            age: 5,
            description: "A playful and friendly raccoon.",
            price: 350,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.45-PM.jpeg"
        },
        {
            name: "Bandit",
            age: 6,
            description: "A curious and adventurous raccoon.",
            price: 400,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.46-PM.jpeg"
        },
        {
            name: "Shadow",
            age: 4,
            description: "A shy but lovable raccoon.",
            price: 300,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.47-PM.jpeg"
        },
        {
            name: "Mittens",
            age: 7,
            description: "A raccoon with a love for cozy spaces.",
            price: 450,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.48-PM.jpeg"
        },
        {
            name: "Scout",
            age: 3,
            description: "A young and energetic raccoon.",
            price: 250,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.48-PM-1.jpeg"
        },
        {
            name: "Patches",
            age: 5,
            description: "A raccoon with a unique coat pattern.",
            price: 350,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.49-PM.jpeg"
        },
        {
            name: "Whiskers",
            age: 6,
            description: "A raccoon with a curious nature.",
            price: 400,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.51-PM.jpeg"
        },
        {
            name: "Rusty",
            age: 4,
            description: "A raccoon with a reddish-brown coat.",
            price: 300,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.52-PM.jpeg"
        },
        {
            name: "Luna",
            age: 5,
            description: "A raccoon with a calm and gentle demeanor.",
            price: 350,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.53-PM-1.jpeg"
        },
        {
            name: "Buddy",
            age: 6,
            description: "A loyal and affectionate raccoon.",
            price: 400,
            imageUrl: "https://res.cloudinary.com/denyzh0lv/image/upload/v1/WhatsApp-Image-2025-03-01-at-3.42.53-PM.jpeg"
        }
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