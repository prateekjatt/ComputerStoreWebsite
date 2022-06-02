export default function Footer() {
  let year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "upperfooter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul1"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, "COMPUTER STORE")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "INDIA")))), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, "INFORMATION")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Sitemap")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Payment Method")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Cancellation & Refund")))), /*#__PURE__*/React.createElement("div", {
    className: "newsletter"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul3"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, "NEWSLETTER")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Stay up to date with news and promotions.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter Email"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Send"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lowerfooter"
  }, /*#__PURE__*/React.createElement("p", null, "Copyright \xA9 ", year, ", Computer Store, All Rights Reserved.")));
}