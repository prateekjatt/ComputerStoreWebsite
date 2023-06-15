import Card from './card.js';
export default function Trending() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let res = await fetch('/trends', {
        method: "GET"
      });
      res = await res.json();
      setCards(res.trends);
    })();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "trending w-full p-12 text-center bg-black"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trending-text"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "sm:text-4xl text-2xl text-white tracking-widest"
  }, "Trending")), /*#__PURE__*/React.createElement("hr", {
    className: "divider border border-solid border-green-400 w-3/4 rounded-xl my-4 mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cardcontainer flex justify-evenly items-center flex-wrap"
  }, Array.from(cards).map((obj, idx) => {
    return /*#__PURE__*/React.createElement(Card, {
      key: idx,
      ID: obj.ID,
      image: obj.image,
      itemname: obj.item,
      price: obj.price
    });
  })));
}