
export default function Header(){

    React.useEffect(()=>{
      
      let navtoggle = document.querySelector(".nav-toggle").childNodes;
      let navlist = document.querySelector(".nav-list");
      let dropdown = document.querySelectorAll(".dropdown");
      let navlistitems = document.querySelectorAll(".nav-list ul li a");
      let dropdown1 = document.querySelectorAll(".mid-nav > ul > li");
  
      navtoggle[0].addEventListener('click',(e)=>{
        navtoggle[0].style.display = 'none';
        navtoggle[1].style.display = 'block';
        navlist.style.transform = 'translateX(0)';
        
      });
      navtoggle[1].addEventListener('click',(e)=>{
        navtoggle[1].style.display = 'none';
        navtoggle[0].style.display = 'block';
        navlist.style.transform = 'translateX(-100%)';
      });

      for(let i=0;i<navlistitems.length;i++){
        navlistitems[i].addEventListener('click',()=>{
          if(window.getComputedStyle(dropdown[i]).display == 'none'){
            dropdown[i].style.display = 'block';
            for(let j=0;j<dropdown.length;j++){
              if(i != j) dropdown[j].style.display = 'none';
            }
          }   
          else dropdown[i].style.display = 'none';
        });
      }


      for(let i=0;i<dropdown1.length;i++){
        dropdown1[i].addEventListener('mouseover',()=>{
          dropdown1[i].lastChild.style.display = 'block';
        });
        dropdown1[i].addEventListener('mouseout',()=>{
          dropdown1[i].lastChild.style.display = 'none';
        });
      }

      

    });
    return (
      <nav>
        <div className="mob-nav">
          <div className="nav-toggle">
            <img src="/res/images/utils/navshow.png"/>
            <img src="/res/images/utils/navhide.png"/>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <a href="#">PC Components <span style={{fontSize:"0.7rem"}}>&#9660;</span></a>
                <ul className="dropdown">
                  <li>Motherboard</li>
                  <li>Processor/CPU</li>
                  <li>Memory/RAM</li>
                  <li>Graphics Card</li>
                  <li>Monitor</li>
                </ul>
              </li>
              <li>
                <a href="#">Accessories <span style={{fontSize:"0.7rem"}}>&#9660;</span></a>
                <ul className="dropdown">
                  <li>Keyboard</li>
                  <li>Charger</li>
                  <li>Webcams</li>
                  <li>Headset</li>
                </ul>
              </li>
              <li>
                <a href="#">Brands <span style={{fontSize:"0.7rem"}}>&#9660;</span></a>
                <ul className="dropdown">
                  <li>AMD</li>
                  <li>Asus</li>
                  <li>Corsair</li>
                  <li>Intel</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-nav">
              <div className="brand-logo">
                <a href="/index.html">
                  <img src="/res/images/utils/logo.png"/>
                </a>
              </div>
              <div className="text">
                <a href="/index.html">
                  <h4>
                    Computer Store
                  </h4>
                </a>
              </div>
        </div>

        <div className="mid-nav">
            <ul>
              <li className="float-left">
                <a href="#">PC Components</a>
                <ul className="dropdown1">
                  <li>Motherboard</li>
                  <li>Processor/CPU</li>
                  <li>Memory/RAM</li>
                  <li>Graphics Card</li>
                  <li>Monitor</li>
                </ul>
              </li>
              <li className="float-left">
                <a href="#">Accessories</a>
                <ul className="dropdown1">
                  <li>Keyboard</li>
                  <li>Charger</li>
                  <li>Webcams</li>
                  <li>Headset</li>
                </ul>
              </li>
              <li className="float-left">
                <a href="#">Brands</a>
                <ul className="dropdown1">
                  <li>AMD</li>
                  <li>Asus</li>
                  <li>Corsair</li>
                  <li>Intel</li>
                </ul>
              </li>
            </ul>
        </div>

        <div className="right-nav">
              <div className="user">
                <a href="#">
                    <img src="/res/images/utils/login.png"/>
                </a>
              </div>
              <div className="text">
                <a href="#">
                  <h4>
                    Sign In
                  </h4>
                </a>
              </div>
        </div> 
      </nav>
    );
}