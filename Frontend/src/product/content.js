
export default function Content({product}){

    const [wishlistbtn,setwishlistbtn] = React.useState({fun:addItem,src:"/res/images/utils/wishlist.png",text:"Add Item to Wishlist"})

    async function addItem(e){
        let res = await fetch('/wishlist/addItem',{method:"POST",body:JSON.stringify({itemId:product.ID}),headers:{'Content-Type': 'application/json'}})
        res = await res.json()
        if(res.success){
            setwishlistbtn({fun:removeItem,src:"/res/images/utils/delete.png",text:"Remove Item From Wishlist"})
        }
    }
    async function removeItem(e){
        let res = await fetch('/wishlist/removeItem',{method:"POST",body:JSON.stringify({itemId:product.ID}),headers:{'Content-Type': 'application/json'}})
        res = await res.json()
        if(res.success){
            setwishlistbtn({fun:addItem,src:"/res/images/utils/wishlist.png",text:"Add Item to Wishlist"})
        }
    }


    React.useEffect(()=>{
        (async()=>{
            let res = await fetch('/wishlist/getWishlist',{method:"GET"})
    
            res = await res.json()
            console.log(res)
            if(res.success){
                if(res.wishlist.find(ele=>ele.ID==product.ID)){
                    setwishlistbtn({fun:removeItem,src:"/res/images/utils/delete.png",text:"Remove Item From Wishlist"})
                }
            }
        })();

    },[])




    return(<>

        <div className="w-full p-4 mt-16 flex md:items-start items-center justify-evenly md:flex-row flex-col bg-slate-200">
            <div className="md:h-full md:w-1/2 w-1/2 p-4">
                <img className="h-full w-full" src={product.image}/>
            </div>

            <div className="md:h-full md:w-1/2 h-1/2 w-full p-4">
                <ul className="list-none text-md font-bold">
                    <li className="text-4xl border-b-2 border-gray-700 m-2"><h1>{product.item}</h1></li>
                    <li className="m-2"><h1>Category: {product.category}</h1></li>
                    <li className="m-2"><h1>Price: &#8377; {product.price}</h1></li>
                    <li className="m-2">
                        <button className="p-2 flex flex-row justify-center items-center h-full border border-red-500 rounded-2xl hover:bg-red-500 hover:text-white" onClick={wishlistbtn.fun}>
                            <div className="w-7"><img className="h-full w-full" src={wishlistbtn.src}/></div>    
                            <div className="ml-2"><p>{wishlistbtn.text}</p></div>
                        </button>
                    </li>
                    <li className="m-4 flex flex-col">
                        <h2 className="border-b border-gray-500 text-lg mb-3">About Product</h2>
                        <ul className="list-disc">
                            {product.about.map((text,idx)=><li key={idx} className="mb-1 font-medium"><p>{text}</p></li>)}

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
    
    </>)
}