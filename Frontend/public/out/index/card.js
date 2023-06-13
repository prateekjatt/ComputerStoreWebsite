export default function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card bg-white m-3 p-3 text-black w-60 h-80 rounded-md transition-all duration-500 cursor-pointer hover:scale-110"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardimg w-full h-1/2 p-3"
  }, /*#__PURE__*/React.createElement("img", {
    className: " max-h-full max-w-full m-auto",
    src: props.image
  })), /*#__PURE__*/React.createElement("hr", {
    className: "divider border border-solid border-red-400 my-[1px] mx-auto w-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cardhead p-2 w-full h-1/3 overflow-hidden"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-black font-bold text-left text-[1rem]"
  }, props.itemname)), /*#__PURE__*/React.createElement("div", {
    className: "cardprice table w-full h-1/6 p-3 overflow-hidden"
  }, /*#__PURE__*/React.createElement("p", {
    className: "table-cell align-middle h-full text-black text-left text-[0.9rem] font-semibold"
  }, "\u20B9 ", props.price)));
}