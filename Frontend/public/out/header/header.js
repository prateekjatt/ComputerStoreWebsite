import SideNav from "./sidenav.js";
import LeftNav from "./leftnav.js";
import RightNav from "./rightnav.js";
import MidNav from "./midnav.js";
export default function Header() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-row justify-between w-full bg-black fixed z-10 items-center h-fit px-4 py-2"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(LeftNav, null), /*#__PURE__*/React.createElement(MidNav, null), /*#__PURE__*/React.createElement(RightNav, null));
}