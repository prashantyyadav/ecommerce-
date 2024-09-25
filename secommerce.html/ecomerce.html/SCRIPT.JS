document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value;
    const searchResults = document.getElementById('searchResults');

    if (query.length > 3) {
        // Mocking search results for demonstration
        const results = [
            { name: 'T-Shirt', price: '$19.99', image: 'tshirt.jpg' },
            { name: 'Jeans', price: '$49.99', image: 'jeans.jpg' },
            { name: 'Jacket', price: '$89.99', image: 'jacket.jpg' }
        ];

        searchResults.innerHTML = results
            .map(item => `
                <a href="#" class="dropdown-item">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name} - ${item.price}</span>
                </a>
            `)
            .join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});
