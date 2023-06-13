export default function Footer() {
  let year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "w-full bg-gray-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upperfooter text-white bg-gray-600 p-5 flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company p-2"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul1"
  }, /*#__PURE__*/React.createElement("li", {
    className: "ml-0 list-none text-base"
  }, /*#__PURE__*/React.createElement("h2", null, "COMPUTER STORE")), /*#__PURE__*/React.createElement("li", {
    className: "list-none ml-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "INDIA")))), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul2"
  }, /*#__PURE__*/React.createElement("li", {
    className: "ml-0 list-none text-base"
  }, /*#__PURE__*/React.createElement("h2", null, "INFORMATION")), /*#__PURE__*/React.createElement("li", {
    className: "ml-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Sitemap")), /*#__PURE__*/React.createElement("li", {
    className: "ml-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Payment Method")), /*#__PURE__*/React.createElement("li", {
    className: "ml-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Cancellation & Refund")))), /*#__PURE__*/React.createElement("div", {
    className: "newsletter"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ul3"
  }, /*#__PURE__*/React.createElement("li", {
    className: "ml-0 list-none text-base"
  }, /*#__PURE__*/React.createElement("h2", null, "NEWSLETTER")), /*#__PURE__*/React.createElement("li", {
    className: "ml-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Stay up to date with news and promotions.")), /*#__PURE__*/React.createElement("li", {
    className: "ml-6 cursor-pointer list-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "text-sm rounded-md border-none focus:outline-none px-4 py-2 rounded-tr-none rounded-br-none w-3/4 text-black",
    placeholder: "Enter Email"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    className: "text-sm rounded-md focus:outline-none rounded-tl-none rounded-bl-none bg-lime-400 text-white border-[2px] border-solid border-white px-[5px] py-[6px] w-[15%]",
    value: "Send"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lowerfooter text-white p-[10px] text-[0.8rem]"
  }, /*#__PURE__*/React.createElement("p", null, "Copyright \xA9 ", year, ", Computer Store, All Rights Reserved.")));
}