export default function SideNav() {
  React.useEffect(() => {
    let navtoggle = document.querySelector(".nav-toggle").childNodes;
    let navlist = document.querySelector(".nav-list");
    let dropdown = document.querySelectorAll(".dropdown");
    let navlistitems = document.querySelectorAll(".nav-list ul li a");
    navtoggle[0].addEventListener('click', e => {
      navtoggle[0].style.display = 'none';
      navtoggle[1].style.display = 'block';
      navlist.style.transform = 'translateX(0)';
    });
    navtoggle[1].addEventListener('click', e => {
      navtoggle[1].style.display = 'none';
      navtoggle[0].style.display = 'block';
      navlist.style.transform = 'translateX(-100%)';
    });

    for (let i = 0; i < navlistitems.length; i++) {
      navlistitems[i].addEventListener('click', () => {
        if (window.getComputedStyle(dropdown[i]).display == 'none') {
          dropdown[i].style.display = 'block';

          for (let j = 0; j < dropdown.length; j++) {
            if (i != j) dropdown[j].style.display = 'none';
          }
        } else dropdown[i].style.display = 'none';
      });
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mob-nav flex md:hidden grow h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-toggle relative h-full"
  }, /*#__PURE__*/React.createElement("img", {
    className: " w-10 h-full filter invert absolute left-0 top-0",
    src: "/res/images/utils/navshow.png"
  }), /*#__PURE__*/React.createElement("img", {
    className: "w-10 h-full filter invert absolute left-0 top-0 hidden",
    src: "/res/images/utils/navhide.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-list text-white absolute left-0 top-full bg-gray-500 w-screen h-screen -translate-x-full transition-all duration-1000 overflow-x-hidden overflow-y-scroll"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "w-full mt-4 list-disc relative"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-4 py-2 m-5 border solid border-white mx-2 active:bg-black"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "PC Components")), /*#__PURE__*/React.createElement("li", {
    className: "px-4 py-2 m-5 border solid border-white mx-2 active:bg-black"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessories")), /*#__PURE__*/React.createElement("li", {
    className: "px-4 py-2 m-5 border solid border-white mx-2 active:bg-black"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Brands")))));
}