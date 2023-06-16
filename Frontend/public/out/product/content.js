export default function Content({
  product
}) {
  const [wishlistbtn, setwishlistbtn] = React.useState({
    fun: addItem,
    src: "/res/images/utils/wishlist.png",
    text: "Add Item to Wishlist"
  });

  async function addItem(e) {
    let res = await fetch('/wishlist/addItem', {
      method: "POST",
      body: JSON.stringify({
        itemId: product.ID
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res = await res.json();

    if (res.success) {
      setwishlistbtn({
        fun: removeItem,
        src: "/res/images/utils/delete.png",
        text: "Remove Item From Wishlist"
      });
    }
  }

  async function removeItem(e) {
    let res = await fetch('/wishlist/removeItem', {
      method: "POST",
      body: JSON.stringify({
        itemId: product.ID
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res = await res.json();

    if (res.success) {
      setwishlistbtn({
        fun: addItem,
        src: "/res/images/utils/wishlist.png",
        text: "Add Item to Wishlist"
      });
    }
  }

  React.useEffect(() => {
    (async () => {
      let res = await fetch('/wishlist/getWishlist', {
        method: "GET"
      });
      res = await res.json();
      console.log(res);

      if (res.success) {
        if (res.wishlist.find(ele => ele.ID == product.ID)) {
          setwishlistbtn({
            fun: removeItem,
            src: "/res/images/utils/delete.png",
            text: "Remove Item From Wishlist"
          });
        }
      }
    })();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full p-4 mt-16 flex md:items-start items-center justify-evenly md:flex-row flex-col bg-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:h-full md:w-1/2 w-1/2 p-4"
  }, /*#__PURE__*/React.createElement("img", {
    className: "h-full w-full",
    src: product.image
  })), /*#__PURE__*/React.createElement("div", {
    className: "md:h-full md:w-1/2 h-1/2 w-full p-4"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-none text-md font-bold"
  }, /*#__PURE__*/React.createElement("li", {
    className: "text-4xl border-b-2 border-gray-700 m-2"
  }, /*#__PURE__*/React.createElement("h1", null, product.item)), /*#__PURE__*/React.createElement("li", {
    className: "m-2"
  }, /*#__PURE__*/React.createElement("h1", null, "Category: ", product.category)), /*#__PURE__*/React.createElement("li", {
    className: "m-2"
  }, /*#__PURE__*/React.createElement("h1", null, "Price: \u20B9 ", product.price)), /*#__PURE__*/React.createElement("li", {
    className: "m-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 flex flex-row justify-center items-center h-full border border-red-500 rounded-2xl hover:bg-red-500 hover:text-white",
    onClick: wishlistbtn.fun
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7"
  }, /*#__PURE__*/React.createElement("img", {
    className: "h-full w-full",
    src: wishlistbtn.src
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React.createElement("p", null, wishlistbtn.text)))), /*#__PURE__*/React.createElement("li", {
    className: "m-4 flex flex-col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "border-b border-gray-500 text-lg mb-3"
  }, "About Product"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc"
  }, product.about.map((text, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx,
    className: "mb-1 font-medium"
  }, /*#__PURE__*/React.createElement("p", null, text)))))))));
}