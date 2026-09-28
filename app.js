async function loadProducts() {

    const response = await fetch("/api/products");

    const products = await response.json();

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;

        container.appendChild(div);
    });
}