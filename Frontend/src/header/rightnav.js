import User from "./user.js"
import Guest from "./guest.js"

export default function RightNav(){

    return (
        <div className="right-nav flex h-full w-11 grow justify-end">
              {localStorage.getItem('name')?<User/>:<Guest/>}
        </div> 
    );
}