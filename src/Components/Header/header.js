import "./header.css";

export default function Header({ cards, setCards }) {
  const handleClick = () => {
    setCards((cards) => [...cards, Math.floor(Math.random() * 1000)]);
  };

  const handleSort = () => {
    setCards((cards) => [...cards.sort((a, b) => a - b)]);
  };

  return (
    <div className="header">
      <button className="button" onClick={handleClick}>
        add card
      </button>
      <button className="button" onClick={handleSort}>
        sort cards
      </button>
    </div>
  );
}
