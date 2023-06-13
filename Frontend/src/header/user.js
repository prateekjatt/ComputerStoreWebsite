
export default function User(){

    async function logout(e){
        let res = await fetch('/user/signOut',{method:"GET"})
        res = await res.json()
        if(res.success){
            localStorage.clear()
            window.location.href = '/index.html'
        }
        else alert(res.msg)
    }

    React.useEffect(()=>{
        let div = document.querySelector(".user");
        let dropdown = document.querySelector(".userchoice");

        div.addEventListener('click',()=>{
          dropdown.classList.toggle('hidden');
        });
    })

    return(<>

        <div className="user h-full text-white relative cursor-pointer hover:bg-gray-800 p-1">
            <div className="text ml-1 text-white" >
                <h4 className="h-full leading-10">{localStorage.getItem('name')}</h4>
            </div>
            <div className="userchoice bg-black absolute top-full left-0 w-full list-none hidden text-center">
                <ul>
                    <li className="px-5 py-3 hover:bg-gray-800 h-full"><a href="#">Wishlist</a></li>
                    <li className="px-5 py-3 hover:bg-gray-800 h-full" onClick={(e)=>logout(e)}><a href="#">Logout</a></li>
                </ul>
            </div>
            
        </div>


    </>)
}