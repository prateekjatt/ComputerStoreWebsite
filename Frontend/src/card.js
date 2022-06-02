
export default function Card(props){

    return(
        <div className="card">
            <div className="cardimg">
                <img src={props.image}/>
            </div>
            <hr className="divider"></hr>
            <div className="cardhead">
                <p>{props.itemname}</p>
            </div>
            <div className="cardprice">
                <p>&#8377; {props.price}</p>
            </div>
        </div>
    );
}