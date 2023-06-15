
export default function LeftNav(){  

  return (
      <div className="left-nav md:text-base text-sm sm:justify-start flex flex-row justify-center items-center grow h-full">
            <div className="brand-logo p-1 md:h-11 h-9">
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