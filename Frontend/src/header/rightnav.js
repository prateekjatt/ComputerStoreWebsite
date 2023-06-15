import User from "./user.js"
import Guest from "./guest.js"
import Modal from '../modal/modal.js';

const {useState} = React;

export default function RightNav(){

    const [modal,setmodal] = useState({})
    const [showmodal,setshowmodal] = useState(0)
    

    return (
        <div className="right-nav md:text-base text-sm flex h-full grow justify-end">
            {showmodal? <Modal onclick={setshowmodal} success={modal.success} msg={modal.msg}/>:<></>}
            {localStorage.getItem('name')?<User setmodal={setmodal} setshowmodal={setshowmodal}/>:<Guest/>}
        </div> 
    );
}