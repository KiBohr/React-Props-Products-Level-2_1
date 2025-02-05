
// - Erstelle eine Produktkomponente, die die Produktkarten ausgibt.
// - Dabei werden Preis, Name und Bild des Produkts über props (img, Product, Price) übergeben.
// - Programmiere eine Komponente, die drei Produktkarten rendert. Gib jeder Karte eigene props.


//? Objekte für die Karte erstellen mit Bild, Preis und Product
export const products = [
    {
        id: 1,
        imgUrl : "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
        name: "cocooil",
        price: 30,
    },
    {
        id: 2,
        imgUrl : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        name: "vintage camera",
        price: 60,
    },
    {
        id: 3,
        imgUrl : "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
        name: "maui drink",
        price: 20,
    }
]

//? passender Type
type Product = {
    id : number,
    imgUrl: string,
    name: string,
    price: number,
}
// ? Funktion, die die über dem Array Objekt iterriert und die einzelnen Prdoukte ausgibt
export function CreateProduct(){
return (
    <div className="flex gap-10 justify-evenly items-center">
        {products.map((product: Product) =>{
        return (
            <div className="flex flex-col gap-0.5 items-center shadow-xl rounded-sm bg-amber-50 transition ease-in-out hover:shadow-2xl">
                <div className="w-100 h-70 overflow-hidden">
                     <img className="object-cover" src={product.imgUrl} alt={product.name} />
                </div>
                <h2 className="text-2xl uppercase">{product.name}</h2>
                <p className="text-xl">${product.price}</p>
                <button className="mb-2 border-2 border-amber-800 bg-amber-800 px-10 py-1 rounded-sm text-amber-50 cursor-pointer transition ease-in-out hover:border-amber-800 hover:text-amber-800 hover:bg-amber-50">Buy Now</button>
            </div>
        ) 
    })}
    </div>
    ) 
}
