
export default function MidNav(){

    React.useEffect(()=>{
        let dropdown1 = document.querySelectorAll(".mid-nav > ul > li");

        for(let i=0;i<dropdown1.length;i++){
            dropdown1[i].addEventListener('mouseover',()=>{
              dropdown1[i].lastChild.style.display = 'block';
            });
            dropdown1[i].addEventListener('mouseout',()=>{
              dropdown1[i].lastChild.style.display = 'none';
            });
          }

    })

    return (
        <div className="mid-nav md:text-base text-sm sm:block hidden h-full grow text-white">
            <ul className="flex flex-row items-center h-full w-full justify-center">
              <li className="cursor-pointer border-r border-solid leading-10 border-white md:px-5 px-2 relative hover:bg-gray-800 h-full">
                <a href="#">PC Components</a>
                <ul className="dropdown1 bg-black absolute top-full left-0 w-full list-none hidden text-center">
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Motherboard</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Processor/CPU</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Memory/RAM</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Graphics Card</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Monitor</li>
                </ul>
              </li>
              <li className="cursor-pointer hover:bg-gray-800 leading-10 h-full border-r border-solid border-white md:px-5 px-2 relative">
                <a href="#">Accessories</a>
                <ul className="dropdown1  bg-black absolute top-full left-0 w-full list-none hidden text-center">
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Keyboard</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Charger</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Webcams</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Headset</li>
                </ul>
              </li>
              <li className="cursor-pointer md:px-5 px-2 relative leading-10 hover:bg-gray-800 h-full">
                <a href="#">Brands</a>
                <ul className="dropdown1  bg-black absolute top-full left-0 w-full list-none hidden text-center">
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">AMD</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Asus</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Corsair</li>
                  <li className="px-5 py-3 hover:bg-gray-800 h-full">Intel</li>
                </ul>
              </li>
            </ul>
        </div>
    );
}