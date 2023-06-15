export default function Card(props) {
  const [wishlistbtn, setwishlistbtn] = React.useState({
    fun: addItem,
    src: "/res/images/utils/wishlist.png"
  });

  async function addItem(e) {
    let res = await fetch('/wishlist/addItem', {
      method: "POST",
      body: JSON.stringify({
        itemId: props.ID
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res = await res.json();

    if (res.success) {
      setwishlistbtn({
        fun: removeItem,
        src: "/res/images/utils/heart.png"
      });
    }
  }

  async function removeItem(e) {
    let res = await fetch('/wishlist/removeItem', {
      method: "POST",
      body: JSON.stringify({
        itemId: props.ID
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res = await res.json();

    if (res.success) {
      setwishlistbtn({
        fun: addItem,
        src: "/res/images/utils/wishlist.png"
      });
    }
  }

  React.useEffect(() => {
    (async () => {
      let res = await fetch('/wishlist/getWishlist', {
        method: "GET"
      });
      res = await res.json();

      if (res.success) {
        if (res.wishlist.find(ele => ele.ID == props.ID)) {
          setwishlistbtn({
            fun: removeItem,
            src: "/res/images/utils/heart.png"
          });
        } else setwishlistbtn({
          fun: addItem,
          src: "/res/images/utils/wishlist.png"
        });
      }
    })();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "card relative bg-white m-3 p-3 text-black w-60 h-80 rounded-md transition-all duration-500 cursor-pointer hover:scale-110"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1 left-1 w-10 h-10"
  }, /*#__PURE__*/React.createElement("img", {
    onClick: wishlistbtn.fun,
    src: wishlistbtn.src
  })), /*#__PURE__*/React.createElement("div", {
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