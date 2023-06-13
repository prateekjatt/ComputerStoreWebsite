import User from "./user.js";
import Guest from "./guest.js";
export default function RightNav() {
  return /*#__PURE__*/React.createElement("div", {
    className: "right-nav flex h-full w-11 grow justify-end"
  }, localStorage.getItem('name') ? /*#__PURE__*/React.createElement(User, null) : /*#__PURE__*/React.createElement(Guest, null));
}