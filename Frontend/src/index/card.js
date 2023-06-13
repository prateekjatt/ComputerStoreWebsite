
export default function Card(props){

    return(
        <div className="card bg-white m-3 p-3 text-black w-60 h-80 rounded-md transition-all duration-500 cursor-pointer hover:scale-110">
            <div className="cardimg w-full h-1/2 p-3">
                <img className=" max-h-full max-w-full m-auto" src={props.image}/>
            </div>
            <hr className="divider border border-solid border-red-400 my-[1px] mx-auto w-full"></hr>
            <div className="cardhead p-2 w-full h-1/3 overflow-hidden">
                <p className="text-black font-bold text-left text-[1rem]">{props.itemname}</p>
            </div>
            <div className="cardprice table w-full h-1/6 p-3 overflow-hidden">
                <p className="table-cell align-middle h-full text-black text-left text-[0.9rem] font-semibold">&#8377; {props.price}</p>
            </div>
        </div>
    );
}