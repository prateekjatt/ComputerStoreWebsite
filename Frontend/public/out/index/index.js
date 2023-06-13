import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Content from './content.js';

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Content, null), /*#__PURE__*/React.createElement(Footer, null));
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(App, null));