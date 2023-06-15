export default function Card(props) {
  async function removeItem(e) {
    let res = await fetch('/wishlist/removeItem', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId: props.ID
      })
    });
    res = await res.json();

    if (res.success) {
      let wl = props.wishlist.filter(item => item.ID != props.ID);
      props.setwishlist(wl);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    id: props.ID,
    className: "flex flex-row w-full h-28 m-2 justify-start border-2 border-black  bg-white text-black rounded-md cursor-pointer hover:shadow-xl "
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardimg w-[25%] h-full p-3 flex items-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "m-auto max-h-full max-w-full",
    src: props.img
  })), /*#__PURE__*/React.createElement("div", {
    className: "cardhead flex flex-col w-[65%] p-2 h-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("p", {
    className: "table-cell align-middle text-black font-bold text-left text-[1rem]"
  }, props.item), /*#__PURE__*/React.createElement("p", {
    className: "table-cell align-middle text-left h-full text-black text-[0.9rem] font-semibold"
  }, "\u20B9 ", props.price)), /*#__PURE__*/React.createElement("div", {
    className: "p-2 w-[15%] flex items-center h-full border-l border-black hover:bg-red-600",
    onClick: removeItem
  }, /*#__PURE__*/React.createElement("img", {
    className: "m-auto h-10",
    src: "/res/images/utils/delete.png"
  })));
}