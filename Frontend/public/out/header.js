export default function Header() {
  React.useEffect(() => {
    let navtoggle = document.querySelector(".nav-toggle").childNodes;
    let navlist = document.querySelector(".nav-list");
    let dropdown = document.querySelectorAll(".dropdown");
    let navlistitems = document.querySelectorAll(".nav-list ul li a");
    let dropdown1 = document.querySelectorAll(".mid-nav > ul > li");
    navtoggle[0].addEventListener('click', e => {
      navtoggle[0].style.display = 'none';
      navtoggle[1].style.display = 'block';
      navlist.style.transform = 'translateX(0)';
    });
    navtoggle[1].addEventListener('click', e => {
      navtoggle[1].style.display = 'none';
      navtoggle[0].style.display = 'block';
      navlist.style.transform = 'translateX(-100%)';
    });

    for (let i = 0; i < navlistitems.length; i++) {
      navlistitems[i].addEventListener('click', () => {
        if (window.getComputedStyle(dropdown[i]).display == 'none') {
          dropdown[i].style.display = 'block';

          for (let j = 0; j < dropdown.length; j++) {
            if (i != j) dropdown[j].style.display = 'none';
          }
        } else dropdown[i].style.display = 'none';
      });
    }

    for (let i = 0; i < dropdown1.length; i++) {
      dropdown1[i].addEventListener('mouseover', () => {
        dropdown1[i].lastChild.style.display = 'block';
      });
      dropdown1[i].addEventListener('mouseout', () => {
        dropdown1[i].lastChild.style.display = 'none';
      });
    }
  });
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    className: "mob-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-toggle"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/utils/navshow.png"
  }), /*#__PURE__*/React.createElement("img", {
    src: "res/images/utils/navhide.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-list"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "PC Components ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7rem"
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("li", null, "Motherboard"), /*#__PURE__*/React.createElement("li", null, "Processor/CPU"), /*#__PURE__*/React.createElement("li", null, "Memory/RAM"), /*#__PURE__*/React.createElement("li", null, "Graphics Card"), /*#__PURE__*/React.createElement("li", null, "Monitor"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessories ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7rem"
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("li", null, "Keyboard"), /*#__PURE__*/React.createElement("li", null, "Charger"), /*#__PURE__*/React.createElement("li", null, "Webcams"), /*#__PURE__*/React.createElement("li", null, "Headset"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Brands ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7rem"
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("li", null, "AMD"), /*#__PURE__*/React.createElement("li", null, "Asus"), /*#__PURE__*/React.createElement("li", null, "Corsair"), /*#__PURE__*/React.createElement("li", null, "Intel")))))), /*#__PURE__*/React.createElement("div", {
    className: "left-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-logo"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/index.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/utils/logo.png"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/index.html"
  }, /*#__PURE__*/React.createElement("h4", null, "Computer Store")))), /*#__PURE__*/React.createElement("div", {
    className: "mid-nav"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "float-left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "PC Components"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1"
  }, /*#__PURE__*/React.createElement("li", null, "Motherboard"), /*#__PURE__*/React.createElement("li", null, "Processor/CPU"), /*#__PURE__*/React.createElement("li", null, "Memory/RAM"), /*#__PURE__*/React.createElement("li", null, "Graphics Card"), /*#__PURE__*/React.createElement("li", null, "Monitor"))), /*#__PURE__*/React.createElement("li", {
    className: "float-left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessories"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1"
  }, /*#__PURE__*/React.createElement("li", null, "Keyboard"), /*#__PURE__*/React.createElement("li", null, "Charger"), /*#__PURE__*/React.createElement("li", null, "Webcams"), /*#__PURE__*/React.createElement("li", null, "Headset"))), /*#__PURE__*/React.createElement("li", {
    className: "float-left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Brands"), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown1"
  }, /*#__PURE__*/React.createElement("li", null, "AMD"), /*#__PURE__*/React.createElement("li", null, "Asus"), /*#__PURE__*/React.createElement("li", null, "Corsair"), /*#__PURE__*/React.createElement("li", null, "Intel"))))), /*#__PURE__*/React.createElement("div", {
    className: "right-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "res/images/utils/login.png"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("h4", null, "Sign In")))));
}