
export default function Guest(){

    return(<>

        <div className="user flex flex-row h-full">
            <div className="p-1 h-full">
                <a className="h-full"  href="/userauth.html">
                  <img className="h-full filter invert" src="/res/images/utils/login.png"/>
                </a>
              </div>
              <div className="text ml-1 text-white">
                <a href="/userauth.html">
                  <h4 className="h-full leading-10">Sign In</h4>
                </a>
              </div>
        </div>
    
    
    </>)
}