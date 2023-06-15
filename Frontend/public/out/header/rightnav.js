import User from "./user.js";
import Guest from "./guest.js";
import Modal from '../modal/modal.js';
const {
  useState
} = React;
export default function RightNav() {
  const [modal, setmodal] = useState({});
  const [showmodal, setshowmodal] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "right-nav md:text-base text-sm flex h-full grow justify-end"
  }, showmodal ? /*#__PURE__*/React.createElement(Modal, {
    onclick: setshowmodal,
    success: modal.success,
    msg: modal.msg
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), localStorage.getItem('name') ? /*#__PURE__*/React.createElement(User, {
    setmodal: setmodal,
    setshowmodal: setshowmodal
  }) : /*#__PURE__*/React.createElement(Guest, null));
}