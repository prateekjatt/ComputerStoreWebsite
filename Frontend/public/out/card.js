export default function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardimg"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.image
  })), /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cardhead"
  }, /*#__PURE__*/React.createElement("p", null, props.itemname)), /*#__PURE__*/React.createElement("div", {
    className: "cardprice"
  }, /*#__PURE__*/React.createElement("p", null, "\u20B9 ", props.price)));
}