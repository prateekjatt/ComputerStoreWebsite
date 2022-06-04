

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
        <div className="topbrand">
            <div className="topbrand-head"><h1>Top Brands</h1></div>
            <hr className="divider"/>
            <div className="outercontainer">
                <button className="leftctrl"></button>
                <button className="rightctrl"></button>
                <div className="container">
                    <div className="brandcontainer">
                        <div className="brand"><img src="/res/images/brands/brand1.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand3.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand2.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand4.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand5.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand6.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand7.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand8.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand9.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand10.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand11.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand12.jpg"/></div>   
                        <div className="brand"><img src="/res/images/brands/brand13.jpg"/></div>   
                    </div>
                </div>
            </div>
        </div>
    );
}