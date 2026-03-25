const products = [
    {name:"Cà phê đen", price:20000, img:"https://cdn.nhathuoclongchau.com.vn/v1/static/uong_ca_phe_den_dung_cach_de_tot_cho_suc_khoe_1_ea5dde59bd.png", type:"coffee"},
    {name:"Cà phê sữa", price:25000, img:"https://www.cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg", type:"coffee"},
    {name:"Cà phê trứng", price:50000, img:"https://statics.vinwonders.com/cafe-trung-ha-noi-so-1_1679647446.jpg", type:"coffee"},
    {name:"Bạc xỉu", price:30000, img:"https://horecavn.com/wp-content/uploads/2024/05/bac-xiu-da_20240527105417.jpg", type:"coffee"},
    {name:"Cà phê muối", price:45000, img:"https://static.vinwonders.com/production/2025/03/thuong-thuc-ca-phe-muoi-ha-noi-thom-ngon.jpg", type:"coffee"},

    {name:"Trà sữa trân châu đường đen", price:30000, img:"https://dayphache.edu.vn/wp-content/uploads/2019/02/519cb84dfa56f4e64bd73c0393e49890.jpg", type:"trasua"},
    {name:"Trà sữa matcha", price:32000, img:"https://horecavn.com/wp-content/uploads/2024/05/matcha-sua-dua-tran-chau-duong-den-ly-500ml_20240527105009.jpg", type:"trasua"},
    {name:"Trà sữa khoai môn", price:35000, img:"https://file.hstatic.net/200000538679/file/tra-sua-khoai-mon__2__3d8987df6b8a44aab040015839787cc7_grande.png", type:"trasua"},
    {name:"Trà sữa socola", price:30000, img:"https://www.huongnghiepaau.com/wp-content/uploads/2019/10/tra-sua-chocolate.jpg", type:"trasua"},
    {name:"Trà sữa dâu", price:30000, img:"https://cdn.shopify.com/s/files/1/0617/2497/files/tra-sua-vi-dau.jpg?v=1656752865", type:"trasua"},

    {name:"Trà đào", price:15000, img:"https://www.unileverfoodsolutions.com.vn/dam/global-ufs/mcos/phvn/vietnam/calcmenu/recipes/VN-recipes/other/fresh-peach-tea/main-header.jpg", type:"tra"},
    {name:"Trà chanh", price:15000, img:"https://www.unileverfoodsolutions.com.vn/dam/global-ufs/mcos/phvn/vietnam/calcmenu/recipes/VN-recipes/other/energizing-lemon-tea/main-header.jpg", type:"tra"},
    {name:"Trà vải", price:20000, img:"https://www.unileverfoodsolutions.com.vn/dam/global-ufs/mcos/phvn/vietnam/calcmenu/recipes/VN-recipes/other/sweet-lychee-tea/main-header.jpg", type:"tra"},
    {name:"Trà tắc", price:15000, img:"https://trahoatanuc.vn/wp-content/uploads/2023/07/tra-tac-3.jpg", type:"tra"},

    {name:"Sinh tố xoài", price:35000, img:"https://dayphache.edu.vn/wp-content/uploads/2016/02/cach-lam-sinh-to-xoai-sua-dac.jpg", type:"sinhto"},
    {name:"Sinh tố dâu", price:35000, img:"https://png.pngtree.com/png-clipart/20240816/original/pngtree-cherry-strawberry-vanilla-smoothie-with-a-solid-png-image_15781151.png", type:"sinhto"},
    {name:"Sinh tố bơ", price:35000, img:"https://tiki.vn/blog/wp-content/uploads/2023/04/sinh-to-bo-sua-chua.jpg", type:"sinhto"},
    {name:"Sinh tố ổi", price:35000, img:"https://cdn.tgdd.vn//News/1501193//sinh-to-oi-cho-be-845x558.jpg", type:"sinhto"},

    {name:"Soda bạc hà", price:15000, img:"https://storage.googleapis.com/onelife-public/blog.onelife.vn/2021/10/cach-lam-soda-chanh-bac-ha-nhanh-de-962570165920.jpg", type:"soda"},
    {name:"Soda việt quất", price:15000, img:"https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/173051/Originals/soda-viet-quat-9.jpg", type:"soda"},
    {name:"Soda dâu", price:15000, img:"https://lypham.vn/wp-content/uploads/2025/08/soda-dau-tay.jpg", type:"soda"},
];

const list = document.getElementById("product-list");

// hiển thị
function showProduct(data){
    list.innerHTML = "";
    data.forEach(p=>{
        list.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price}đ</p>
        </div>
        `;
    });
}

// lọc
function filterProduct(type){
    const filtered = products.filter(p => p.type === type);
    showProduct(filtered);
}

// mặc định coffee
showProduct(products.filter(p => p.type === "coffee"));
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