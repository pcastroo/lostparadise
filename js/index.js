const items=[
    {
        id:0,
        name: 'Camiseta "DRAGON"',
        price: 65,
        img: './src/bluedragonshirt.jpg',
        type: 'shirt',
        quantities: 0
    },
    {
        id:1,
        name: 'Camiseta "Global Smile"',
        img: './src/globalsmileshirt.jpg',
        price: 65,
        type: 'shirt',
        quantities: 0
    },
    {
        id:2,
        name: 'Moletom preto "LOSTPARADISE GANG"',
        img: './src/blackLPGsweatshirt.jpg',
        price: 95,
        type: 'sweatshirt',
        quantities: 0
    },
    {
        id:3,
        name: 'Moletom branco "FUTURISM"',
        img: './src/futurismsweatshirt.jpg',
        price: 95,
        type: 'sweatshirt',
        quantities: 0
    },
    {
        id:4,
        name: 'Moletom branco "THE ROSES"',
        img: './src/whiteTRsweatshirt.jpg',
        price: 95,
        type: 'sweatshirt',
        quantities: 0
    }
]

function init(){
    var containerProducts = document.getElementById('products')
    items.map((val)=>{
        containerProducts.innerHTML += `
        <div class="single-product">
            <a href="#" key="`+val.id+`">
                <img src="`+val.img+`">
                <p>`+val.price+`</p>
                <p>`+val.name+`</p>
                <a href="#" key="`+val.id+`" class="addCart">add to cart</a>
            </a>
        </div>
        `;
    })
}

init()

function refreshCart(){
    items.map((val)=>{
        if (val.quantities > 0)
        document.getElementById('cart').style.color = "#50fa7b"
    })
}

var links = document.getElementsByClassName('addCart')

for(i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key')
        items[key].quantities++
        refreshCart()
        return false
    })
}
