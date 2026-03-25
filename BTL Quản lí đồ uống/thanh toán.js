let cart = [];

function toggleCart(){
    document.getElementById("cart").classList.toggle("show");
}

// thêm vào giỏ
function addToCart(product){
    cart.push(product);
    renderCart();
}

// hiển thị giỏ
function renderCart(){
    const box = document.getElementById("cart-items");
    const count = document.getElementById("count");

    box.innerHTML = "";
    count.innerText = cart.length;

    cart.forEach(p=>{
        box.innerHTML += `
        <div class="cart-item">
            <img src="${p.img}">
            <div>
                <p>${p.name}</p>
                <span>${p.price}đ</span>
            </div>
        </div>
        `;
    });
}