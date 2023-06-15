import Card from './card.js';

export default function Trending(){
    const [cards,setCards] = React.useState([]);

    React.useEffect(()=>{

        (async()=>{
            let res = await fetch('/trends',{method:"GET"})
            res = await res.json()
            setCards(res.trends)

        })();

    },[]);
    
    return (
        <div className="trending w-full p-12 text-center bg-black">
            <div className="trending-text"><h1 className="sm:text-4xl text-2xl text-white tracking-widest">Trending</h1></div>
            <hr className="divider border border-solid border-green-400 w-3/4 rounded-xl my-4 mx-auto"/>
            <div className="cardcontainer flex justify-evenly items-center flex-wrap">
                {Array.from(cards).map((obj,idx)=>{
                    return <Card key={idx} ID={obj.ID}image={obj.image} itemname={obj.item} price={obj.price}/>;
                })}
            </div>
        </div>
    );
}
