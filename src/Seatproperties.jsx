const Seat = ({ backgroundColor, borderColor, isReserved, isSelected, handleSeatClick, changeFare ,price}) => {
  const handleClick = () => {
    if (!isReserved) {
      const newFare = isSelected ? (changeFare - price) : (changeFare + price);
      handleSeatClick(newFare);
    }
  };

  const style = {
    width: '40px',
    height: '40px',
    backgroundColor: isSelected ? 'green' : backgroundColor,
    border: `0.1px solid ${borderColor}`,
    borderRadius: '5px',
    margin: 5,
    cursor: isReserved ? 'not-allowed' : 'pointer',
  };

  return (
    <button style={style} onClick={handleClick}>
    </button>
  );
};

export default Seat;