export default function SideNav() {
  React.useEffect(() => {
    let navtoggle = document.querySelector(".nav-toggle").childNodes;
    let navlist = document.querySelector(".nav-list");
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
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mob-nav text-sm sm:hidden grow h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-toggle relative md:h-10 h-9 p-2"
  }, /*#__PURE__*/React.createElement("img", {
    className: "h-full filter invert left-0 top-0",
    src: "/res/images/utils/navshow.png"
  }), /*#__PURE__*/React.createElement("img", {
    className: "h-full filter invert left-0 top-0 hidden",
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