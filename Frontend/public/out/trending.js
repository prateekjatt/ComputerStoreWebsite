import Card from './card.js';
export default function Trending() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        setCards(Array.from(JSON.parse(this.response)));
      }
    };

    xhttp.open('GET', '/trending');
    xhttp.send();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "trending"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trending-text"
  }, /*#__PURE__*/React.createElement("h1", null, "Trending")), /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cardcontainer"
  }, Array.from(cards).map((obj, idx) => {
    return /*#__PURE__*/React.createElement(Card, {
      key: idx,
      image: obj.image,
      itemname: obj.itemname,
      price: obj.price
    });
  })));
}