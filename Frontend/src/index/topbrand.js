

export default function Topbrand(){

    React.useEffect(()=>{
        let leftarr = document.querySelector(".leftctrl");
        let rightarr = document.querySelector(".rightctrl");
        let container = document.querySelector(".container");
        leftarr.addEventListener('click',()=>{
            container.scrollLeft -= 500;
        });
        rightarr.addEventListener('click',()=>{
            container.scrollLeft += 500;
        });
    });

    return (
        <div className="topbrand w-screen bg-white p-5 text-center text-black">
            <div className="topbrand-head"><h1 className="sm:text-4xl text-2xl tracking-[0.5rem]">Top Brands</h1></div>
            <hr className="divider"/>
            <div className="outercontainer relative">
                <button className="leftctrl absolute left-[3%] -translate-y-1/2 bg-contain bg-center bg-no-repeat top-1/2 bg-white border-none rounded-2xl h-[30px] w-[30px] p-2 shadow-lg shadow-black z-[9]"></button>
                <button className="rightctrl absolute right-[3%] -translate-y-1/2 bg-contain bg-center bg-no-repeat top-1/2 bg-white border-none rounded-2xl h-[30px] w-[30px] p-2 shadow-lg shadow-black z-[9]"></button>
                <div className="container relative h-48 overflow-x-scroll mx-auto overflow-hidden scroll-smooth">
                    <div className="brandcontainer flex absolute top-0 left-0 justify-between items-center m-4">
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand1.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand3.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand2.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand4.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand5.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand6.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand7.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand8.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand9.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand10.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand11.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand12.jpg"/></div>   
                        <div className="brand inline-block w-36 h-36 mx-2 my-0 bg-green-700"><img src="/res/images/brands/brand13.jpg"/></div>   
                    </div>
                </div>
            </div>
        </div>
    );
}