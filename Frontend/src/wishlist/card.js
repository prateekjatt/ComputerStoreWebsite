
export default function Card(props){

    async function removeItem(e){
        let res = await fetch('/wishlist/removeItem',{method:"POST",headers:{'Content-Type': 'application/json'}
            ,body:JSON.stringify({itemId:props.ID})})
        res = await res.json()

        if(res.success){
            let wl = props.wishlist.filter((item)=>item.ID != props.ID)
            props.setwishlist(wl)
        }
    }

    return(
        <div id={props.ID} className="flex flex-row w-full h-28 m-2 justify-start border-2 border-black  bg-white text-black rounded-md cursor-pointer hover:shadow-xl ">
            <div className="cardimg w-[25%] h-full p-3 flex items-center" onClick={()=>{window.location.href = `/product/${props.ID}`}}>
                <img className="m-auto max-h-full max-w-full" src={props.img}/>
            </div>
            <div className="cardhead flex flex-col w-[65%] p-2 h-full overflow-hidden" onClick={()=>{window.location.href = `/product/${props.ID}`}}>
                <p className="table-cell align-middle text-black font-bold text-left text-[1rem]">{props.item}</p>
                <p className="table-cell align-middle text-left h-full text-black text-[0.9rem] font-semibold">&#8377; {props.price}</p>
            </div>
            <div className="p-2 w-[15%] flex items-center h-full border-l border-black hover:bg-red-600" onClick={removeItem}>
                <img className="m-auto h-10" src="/res/images/utils/delete.png"/>
            </div>
        </div>
    );
}