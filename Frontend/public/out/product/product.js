import Header from './../header/header.js';
import Footer from './../footer/footer.js';
import Content from './content.js';
export default function Product({
  product
}) {
  product = JSON.parse(product);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Content, {
    product: product
  }), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(Product, {
  product: data
}));