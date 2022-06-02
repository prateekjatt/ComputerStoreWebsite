export default function Topbrand() {
  React.useEffect(() => {
    let leftarr = document.querySelector(".leftctrl");
    let rightarr = document.querySelector(".rightctrl");
    let container = document.querySelector(".container");
    leftarr.addEventListener('click', () => {
      container.scrollLeft -= 500;
    });
    rightarr.addEventListener('click', () => {
      container.scrollLeft += 500;
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "topbrand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbrand-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Top Brands")), /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "outercontainer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "leftctrl"
  }), /*#__PURE__*/React.createElement("button", {
    className: "rightctrl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brandcontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand1.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand2.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand3.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand4.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand5.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand6.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand7.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand8.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand9.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand10.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand11.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand12.jpg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/brands/brand13.jpg"
  }))))));
}