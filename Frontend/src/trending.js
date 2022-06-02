import Card from './card.js';

export default function Trending(){
    const [cards,setCards] = React.useState([]);

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            setCards(Array.from(JSON.parse(this.response)));
        }
    };

    xhttp.open('GET','/trending');
    xhttp.send();

    return (
        <div className="trending">
            <div className="trending-text"><h1>Trending</h1></div>
            <hr className="divider"/>
            <div className="cardcontainer">
                {Array.from(cards).map((obj,idx)=>{
                    return <Card key={idx} image={obj.image} itemname={obj.itemname} price={obj.price}/>;
                })}
                
            </div>
        </div>
    );
}