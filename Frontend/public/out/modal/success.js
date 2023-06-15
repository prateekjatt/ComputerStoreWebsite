const {
  useEffect
} = React;
export default function Success(props) {
  useEffect(() => {
    setTimeout(() => props.onclick(0), 2000);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between bg-green-400 text-white p-4 border border-green-600"
  }, /*#__PURE__*/React.createElement("h2", null, props.msg)));
}