document.addEventListener("DOMContentLoaded", function() {
    fetch('services.json')
        .then(response => response.json())
        .then(data => {
            const serviceCardsContainer = document.getElementById('service-cards');

            data.services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('service-card');

                const title = document.createElement('h3');
                title.textContent = service.title;

                const description = document.createElement('p');
                description.textContent = service.description;

                serviceCard.appendChild(title);
                serviceCard.appendChild(description);
                serviceCardsContainer.appendChild(serviceCard);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
