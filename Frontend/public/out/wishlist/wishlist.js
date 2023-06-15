import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Card from './card.js';
import Modal from '../modal/modal.js';
const {
  useState,
  useEffect
} = React;
export default function Wishlist() {
  const [modal, setmodal] = useState({});
  const [showmodal, setshowmodal] = useState(0);
  const [Wishlist, setWishlist] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch('/wishlist/getWishlist', {
        method: "GET"
      });
      res = await res.json();

      if (res.success) {
        setWishlist(res.wishlist);
      } else {
        setmodal({
          success: res.success,
          msg: res.msg
        });
        setshowmodal(1);
        setTimeout(() => {
          window.location.href = '/userauth.html';
        }, 2000);
      }
    })();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), showmodal ? /*#__PURE__*/React.createElement(Modal, {
    success: modal.success,
    onclick: setshowmodal,
    msg: modal.msg
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto min-h-screen shadow-2xl md:w-2/3 w-full p-5 mt-16 text-center text-3xl font-extrabold"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Wishlist")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-full justify-start items-center border-t-2 border-b-2 border-gray-600 w-full p-5 mt-8 text-center text-3xl text-gray-500 "
  }, Wishlist.length ? Wishlist.map(item => {
    return /*#__PURE__*/React.createElement(Card, {
      key: item.ID,
      wishlist: Wishlist,
      setwishlist: setWishlist,
      ID: item.ID,
      item: item.item,
      img: item.image,
      price: item.price
    });
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "No Item present in Wishlist."))))), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(Wishlist, null));