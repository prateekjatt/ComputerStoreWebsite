import Success from "./success.js";
import Failure from "./failure.js";
export default function Modal(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal absolute shadow-2xl shadow-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
  }, props.success ? /*#__PURE__*/React.createElement(Success, {
    onclick: props.onclick,
    msg: props.msg
  }) : /*#__PURE__*/React.createElement(Failure, {
    onclick: props.onclick,
    msg: props.msg
  })));
}