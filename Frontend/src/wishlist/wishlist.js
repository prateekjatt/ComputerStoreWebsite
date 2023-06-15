import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import Card from './card.js'
import Modal from '../modal/modal.js'

const {useState,useEffect} = React

export default function Wishlist(){

    const [modal,setmodal] = useState({})
    const [showmodal,setshowmodal] = useState(0)

    const [Wishlist,setWishlist] = useState([]);

    useEffect(()=>{
        (async()=>{
            let res = await fetch('/wishlist/getWishlist',{method:"GET"})
    
            res = await res.json()
    
            if(res.success){
                setWishlist(res.wishlist)
            }
            else{
                setmodal({success:res.success,msg:res.msg})
                setshowmodal(1)
                setTimeout(()=>{window.location.href = '/userauth.html'},2000)
            }
        })();
    },[])

    return(<>
        <Header/>

        {showmodal? <Modal success={modal.success} onclick={setshowmodal} msg={modal.msg}/>:<></>}

        <div className="mx-auto min-h-screen shadow-2xl md:w-2/3 w-full p-5 mt-16 text-center text-3xl font-extrabold">
            <div>
                <h1>Wishlist</h1>
            </div>
            <div className="flex flex-col h-full justify-start items-center border-t-2 border-b-2 border-gray-600 w-full p-5 mt-8 text-center text-3xl text-gray-500 ">
                {Wishlist.length? Wishlist.map((item)=>{return <Card key={item.ID} wishlist={Wishlist} setwishlist={setWishlist}  ID={item.ID} item={item.item} img={item.image} price={item.price} />}):
                    <>
                        <div>
                            <h1>No Item present in Wishlist.</h1>
                        </div>
                    </>

                }
            </div>
        </div>

        <Footer/>
    
    </>)
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<Wishlist/>);