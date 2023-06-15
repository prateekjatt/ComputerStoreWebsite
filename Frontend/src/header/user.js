

export default function User(props){

    async function logout(e){
        let res = await fetch('/user/signOut',{method:"GET"})
        res = await res.json()

        props.setmodal({success:res.success,msg:res.msg})
        props.setshowmodal(1)

        if(res.success){
            localStorage.clear()
            setTimeout(()=>{window.location.href='/index.html'},200)
        }
    }

    function click(e){
        let dropdown = document.querySelector(".userchoice");
        dropdown.classList.toggle('hidden');        
    }

    return(<>

        

        <div className="user h-full text-white cursor-pointer hover:bg-gray-800 p-1">
            <div className="text ml-1 text-white"  onClick={click} >
                <h4 className="h-full leading-10">{localStorage.getItem('name')}</h4>
            </div>
            <div className="userchoice bg-black absolute top-full right-0 list-none hidden text-center">
                <ul>
                    <li className="py-3 px-2 hover:bg-gray-800 h-full"><a href="/wishlist.html">Wishlist</a></li>
                    <li className="py-3 px-2 hover:bg-gray-800 h-full" onClick={(e)=>logout(e)}><a href="#">Logout</a></li>
                </ul>
            </div>
            
        </div>


    </>)
}