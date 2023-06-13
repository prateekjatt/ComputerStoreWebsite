
export default function LeftNav(){

    return (
        <div className="left-nav flex flex-row justify-start items-center grow h-full">
              <div className="brand-logo p-1 h-full">
                <a className="h-full"  href="/index.html">
                  <img className="h-full" src="/res/images/utils/logo.png"/>
                </a>
              </div>
              <div className="text ml-1 text-white">
                <a href="/index.html">
                  <h4>Computer Store</h4>
                </a>
              </div>
        </div>
    );
}