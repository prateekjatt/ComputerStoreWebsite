
export default function Card(props){

    const [wishlistbtn,setwishlistbtn] = React.useState({fun:addItem,src:"/res/images/utils/wishlist.png"})
    
    async function addItem(e){
        let res = await fetch('/wishlist/addItem',{method:"POST",body:JSON.stringify({itemId:props.ID}),headers:{'Content-Type': 'application/json'}})
        res = await res.json()
        if(res.success){
            setwishlistbtn({fun:removeItem,src:"/res/images/utils/heart.png"})
        }
    }
    async function removeItem(e){
        let res = await fetch('/wishlist/removeItem',{method:"POST",body:JSON.stringify({itemId:props.ID}),headers:{'Content-Type': 'application/json'}})
        res = await res.json()
        if(res.success){
            setwishlistbtn({fun:addItem,src:"/res/images/utils/wishlist.png"})
        }
    }
    
    React.useEffect(()=>{

        (async()=>{
            let res = await fetch('/wishlist/getWishlist',{method:"GET"})
    
            res = await res.json()
            if(res.success){
                if(res.wishlist.find(ele=>ele.ID==props.ID)){
                    setwishlistbtn({fun:removeItem,src:"/res/images/utils/heart.png"})
                }
                else setwishlistbtn({fun:addItem,src:"/res/images/utils/wishlist.png"})
            }
        })();
    },[])

    return(
        <div className="card relative bg-white m-3 p-3 text-black w-60 h-80 rounded-md transition-all duration-500 cursor-pointer hover:scale-110">
            <div className="absolute top-1 left-1 w-10 h-10">
                <img onClick={wishlistbtn.fun} src={wishlistbtn.src}/>
            </div>
            <div className="cardimg w-full h-1/2 p-3" onClick={()=>{window.location.href = `/product/${props.ID}`}}>
                <img className=" max-h-full max-w-full m-auto" src={props.image}/>
            </div>
            <hr className="divider border border-solid border-red-400 my-[1px] mx-auto w-full"></hr>
            <div className="cardhead p-2 w-full h-1/3 overflow-hidden" onClick={()=>{window.location.href = `/product/${props.ID}`}}>
                <p className="text-black font-bold text-left text-[1rem]">{props.itemname}</p>
            </div>
            <div className="cardprice table w-full h-1/6 p-3 overflow-hidden" onClick={()=>{window.location.href = `/product/${props.ID}`}}>
                <p className="table-cell align-middle h-full text-black text-left text-[0.9rem] font-semibold">&#8377; {props.price}</p>
            </div>
        </div>
    );
}