
const {useEffect} = React

export default function Success(props){

    useEffect(()=>{
        setTimeout(()=>props.onclick(0),2000)
    })

    return(<>
    
        <div className="flex flex-row justify-between bg-green-400 text-white p-4 border border-green-600">
            <h2>{props.msg}</h2>
        </div>
    
    
    </>)
}