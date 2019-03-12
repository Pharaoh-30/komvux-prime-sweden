const flowers = [
    { name: 'Last Virsion of Mobile phones', price: 20000, id:1, description:"alot of kind of last vireson of mobile phones" },
    { name: "clocks mobile phones", Price: 6000, id:2},
    {name: "green", price:250, id:3},
    {name: "black",price:300, id:4},
    {name:"white",price:350, id:5},
    {name: "Laptops",price:18000,id:6},
    {name: "clothes",price:16000,id:7},
    {name:"Sport Clothes",price:15000,id:8},
    {name:"Toys",price:13000,id:9},
    {name:"Movies",price:14000,id:10},
    {name:"clocka&watches",price:10000,id:11},
    
    
    
    

];

const addToCard = (array, id, location) => {
    let a = array.find(i => i.id === id);

    const item = `
        <a class="item" id="${a.id}">
        <h4>${a.name} <small> ${a.price} kr</small></h4>
        <button type="button">x</button>
        </a>
    `;
    $(location).append(item); 
}

$('.Mohammed').on('click', 'button', (e) => {
    let Adam = e.currentTarget.id;
    addToCard(flowers, +Adam, $('.buylist'));
});

$('.buylist').on('click', 'button', e => {
    let item = $(e.currentTarget)
        .closest('a')
        .remove();
});


