export default function Failure(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between  bg-red-400 text-white p-4 border border-red-600"
  }, /*#__PURE__*/React.createElement("h2", null, props.msg), /*#__PURE__*/React.createElement("span", {
    className: "ml-4 cursor-pointer hover:bg-red-600",
    onClick: () => {
      props.onclick(0);
    }
  }, "\u2716")));
}