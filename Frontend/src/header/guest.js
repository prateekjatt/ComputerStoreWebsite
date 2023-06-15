
export default function Guest(){

    return(<>

      <div className="flex flex-row text-white cursor-pointer hover:bg-gray-800 p-1">
        <div className="md:h-10 h-9">
          <a className="h-full"  href="/userauth.html">
            <img className="h-full filter invert" src="/res/images/utils/login.png"/>
          </a>
        </div>
        <div className="text ml-1">
          <a href="/userauth.html">
            <h4 className="h-full leading-10">Sign In</h4>
          </a>
        </div>
      </div>

    </>)
}