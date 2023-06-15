
const {useEffect} = React

export default function Failure(props){

    useEffect(()=>{
        setTimeout(()=>props.onclick(0),2000)
    })

    return(<>
    
        <div className="flex flex-row justify-between  bg-red-400 text-white p-4 border border-red-600">
            <h2>{props.msg}</h2>
        </div>
    
    
    </>)
}