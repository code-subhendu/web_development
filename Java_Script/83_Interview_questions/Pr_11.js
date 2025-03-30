function filterProduct(products,criterion){
    return products.filter(p=>p.category==criterion)
}
let products=[
    {name:'laptop',category:'electronics',price:80000},
    {name:'shoes',category:'fashion',price:5000},
    {name:'phone',category:'electronics',price:20000}
]
console.log(filterProduct(products,'electronics'))