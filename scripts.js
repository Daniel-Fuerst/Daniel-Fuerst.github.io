document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            "id": 1,
            "name": "CarAPI",
            "description": "Control your Skoda Cars through the web",
            "price": 0,
            "status": "Unfinished, development active, partly working",
            "link": "carcontrol"
        },
        {
            "id": 2,
            "name": "LineageOS Auto Installer",
            "description": "Install LineageOS automatically through a GUI-Installer",
            "price": 0,
            "status": "Unfinished, development active, not avalible for public",
            "link": "losautoinstall",
            "disabled": "disabled"
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');

        productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">€${product.price}</p>
        <p>Status: ${product.status}</p>
        <button onclick="window.location.href = 'https://carcontrol.fuerst.priv.at/${product.link}'" ${product.disabled}>Go check it out!</button>
        `;

        productList.appendChild(productElement);
    });
});
