
export default function Footer(){
    let year = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-500">
            <div className="upperfooter text-white bg-gray-600 p-5 sm:flex-row flex flex-col justify-between items-start">
                <div className="company p-2 m-4">
                    <ul className="ul1">
                        <li className="ml-0 list-none text-base cursor-pointer"><h2>COMPUTER STORE</h2></li>
                        <li className="list-none ml-6 cursor-pointer"><p className="text-sm">INDIA</p></li>
                    </ul>
                </div>
                <div className="info m-4">
                    <ul className="ul2">
                        <li className="ml-0 list-none text-base"><h2>INFORMATION</h2></li>
                        <li className="ml-6 cursor-pointer"><p className="text-sm">Sitemap</p></li>
                        <li className="ml-6 cursor-pointer"><p className="text-sm">Payment Method</p></li>
                        <li className="ml-6 cursor-pointer"><p className="text-sm">Cancellation & Refund</p></li>
                    </ul>
                </div>
                <div className="newsletter m-4">
                    <ul className="ul3">
                        <li className="ml-0 list-none text-base"><h2>NEWSLETTER</h2></li>
                        <li className="ml-6 cursor-pointer"><p className="text-sm">Stay up to date with news and promotions.</p></li>
                        <li className="ml-6 cursor-pointer list-none"><input type="text" className="text-sm rounded-md border-none focus:outline-none px-4 py-2 rounded-tr-none rounded-br-none w-3/4 text-black" placeholder="Enter Email"/><input type="submit" className="text-sm rounded-md focus:outline-none rounded-tl-none rounded-bl-none bg-lime-400 text-white border-[2px] border-solid border-white px-[5px] py-[6px] w-[15%]" value="Send"/></li>
                    </ul>
                </div>
            </div>
            <div className="lowerfooter text-white p-[10px] text-[0.8rem]">
                <p>Copyright © {year}, Computer Store Website, Created By Prateek Kumar, All Rights Reserved.</p>
            </div>
        </footer>
    );
}