const productos = [
    {
        id: '01',
        name: 'random1',
        category: 'nuevos',
        description: 'lorem adsjnkda',
        price: 100,
        img: 'https://picsum.photos/200',
        stock: 10
    },
    {
        id: '02',
        name: 'random2',
        category: 'mas vendidos',
        description: 'lorem adsjnkda',
        price: 150,
        img: 'https://picsum.photos/201',
        stock: 15
    },
    {
        id: '03',
        name: 'random3',
        category: 'ofertas',
        description: 'lorem adsjnkda',
        price: 10,
        img: 'https://picsum.photos/203',
        stock: 5
    },
    {
        id: '04',
        name: 'random4',
        category: 'ofertas',
        description: 'lorem adsjnkda',
        price: 180,
        img: 'https://picsum.photos/204',
        stock: 25
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },2000)
    })
}


export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No existe ese producto')
            }else{
                let oneProduct = productos.find((prod)=>prod.id === id)
                resolve(oneProduct)
            }
        },2000)
    })
}