import Success from "./success.js";
import Failure from "./failure.js";

export default function Modal(props){


    return(<>
    
        <div className="modal absolute shadow-2xl shadow-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            {props.success? <Success onclick={props.onclick} msg={props.msg}/>:
                        <Failure onclick={props.onclick} msg={props.msg}/>}
        </div>
    
    </>)
}