export default function MidNav() {
  React.useEffect(() => {
    let dropdown1 = document.querySelectorAll(".mid-nav > ul > li");

    for (let i = 0; i < dropdown1.length; i++) {
      dropdown1[i].addEventListener('mouseover', () => {
        dropdown1[i].lastChild.style.display = 'block';
      });
      dropdown1[i].addEventListener('mouseout', () => {
        dropdown1[i].lastChild.style.display = 'none';
      });
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mid-nav h-full grow text-white"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-row items-center h-full w-full justify-center"
  }, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer border-r border-solid leading-10 border-white px-5 relative hover:bg-gray-800 h-full"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "PC Components"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1 bg-black absolute top-full left-0 w-full list-none hidden text-center"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Motherboard"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Processor/CPU"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Memory/RAM"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Graphics Card"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Monitor"))), /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer hover:bg-gray-800 leading-10 h-full border-r border-solid border-white px-5 relative"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessories"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1  bg-black absolute top-full left-0 w-full list-none hidden text-center"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Keyboard"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Charger"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Webcams"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Headset"))), /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer px-5 relative leading-10 hover:bg-gray-800 h-full"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Brands"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1  bg-black absolute top-full left-0 w-full list-none hidden text-center"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "AMD"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Asus"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Corsair"), /*#__PURE__*/React.createElement("li", {
    className: "px-5 py-3 hover:bg-gray-800 h-full"
  }, "Intel")))));
}