const items=[
    {
        id:0,
        name: 'Camiseta "DRAGON" preta',
        price: 65.00,
        img: './src/bluedragonshirt.jpg',
        type: 'shirt',
        description:"Camiseta preta , estampa silkscreen modelo unisexx, com dupla costura e cobre gola para maior resistencia.",
        quantities: 0
    },
    {
        id:1,
        name: 'Camiseta "GLOBAL SMILE" preta',
        img: './src/globalsmileshirt.jpg',
        price: 65.00,
        type: 'shirt',
        description:"Camiseta preta , estampa silkscreen modelo unisexx, com dupla costura e cobre gola para maior resistencia.",
        quantities: 0
    },
    {
        id:2,
        name: 'Moletom "FUTURISM" preto',
        img: './src/blackLPGsweatshirt.jpg',
        price: 95.00,
        type: 'sweatshirt',
        description:"Moletom lostparadise allblack, peça feita em algodão premium, flanelado e super quente para sua sessão com os amigos, modelo com logotipia FUTURISM NO PEITO.",
        quantities: 0
    },
    {
        id:3,
        name: 'Moletom "FUTURISM" branco',
        img: './src/futurismsweatshirt.jpg',
        price: 95.00,
        type: 'sweatshirt',
        description:"Moletom LOSTPARADISE, peça feita em algodão premium, flanelado e super quente para sua sessão com os amigos, modelo com logotipia FUTURISM NO PEITO.",
        quantities: 0
    },
    {
        id:4,
        name: 'Moletom "THE ROSES" branco',
        img: './src/whiteTRsweatshirt.jpg',
        price: 95.00,
        type: 'sweatshirt',
        description:"Moletom flanelado , estampa silkscreen modelo unisexx, com dupla costura e cobre gola para maior resistencia.",
        quantities: 0
    },
    {
        id:5,
        name: 'Camiseta "GLOBAL SMILE" branca',
        img: './src/whiteglobalsmileshirt.jpg',
        price: 65.00,
        type: 'shirt',
        description:"Camiseta branca , estampa silkscreen modelo unisexx, com dupla costura e cobre gola para maior resistencia.",
        quantities: 0
    },
    {
        id:6,
        name: 'Moletom "DRAGON" preto',
        price: 120.00,
        img: './src/dragonsweatshirt.jpg',
        type: 'sweatshirt',
        description:"Moletom DRAGON, vem somente com 12 unidades para venda, a linha vem com estampa simples na frente e com o dragão maior nas costas, as peças vão ser disponibilizadas no dia 18/08, modelo sujeito a alteração de preço após o lançamento, preço para pre-venda.",
        quantities: 0
    },
    {
        id:7,
        name: 'Manga longa "GLOBAL SMILE" cinza',
        price: 79.00,
        img: './src/greyglobalsmilelong.jpg',
        type: 'long-sleeved',
        description:"Manga longa cinza/mescla, estampa silkscreen modelo unisexx, com dupla costura e cobre gola para maior resistencia, tecido com lavagem de fabrica ",
        quantities: 0
    },
    {
        id:8,
        name: 'Moletom "THE ROSES" preto',
        img: './src/blackTRswearshirt.jpg',
        price: 95.00,
        type: 'sweatshirt',
        description:"Moletom LOSTPARADISE, desenvolvido com o melhor algodão e costura, modelo perfeito para qualquer ocasião, momento, seu corte foi definido com qualquer padrão de estilo e de corpo, modelo vem também com cobre gola para uma maior resistência e acabamento, com forro no gorro do moletom, série vem com poucas unidades.",
        quantities: 0
    },
]

function init(){
    var containerProducts = document.getElementById('products')
    items.map((val)=>{
        containerProducts.innerHTML += `
        <div class="single-product border border-dark rounded-lg">
            <a class="deco-none" href="#" key="`+val.id+`">
                <img src="`+val.img+`"><hr>
                <h4>R$`+val.price+`,00</h4>
                <p>`+val.name+`</p><button class="btn btn-danger btn-add" type="button"><a href="#" key="`+val.id+`" class="addCart deco-none"><i class="fas fa-shopping-cart" id="cart"></i></a></button>
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
