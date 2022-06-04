import Header from './header.js';
import Footer from './footer.js';
export default function Error() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Page not found"), /*#__PURE__*/React.createElement("h2", null, "Uh oh, we can't seem to find the page you're looking for."), /*#__PURE__*/React.createElement("a", {
    href: "/index.html"
  }, "Go To Home Page")), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(Error, null));