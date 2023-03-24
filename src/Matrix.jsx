import React, { useState } from 'react';
import Seat from './Seatproperties';
import { seats } from './SeatComponent';

const SeatMatrix = ({ handleSeatSelection }) => {
  const [totalFare, setTotalFare] = useState(0);
  const [seatList, setSeatList] = useState(seats);

  const handleSeatClick = (newFare, index) => {
    const newSeatList = [...seatList];
    newSeatList[index].isSelected = !newSeatList[index].isSelected;
    setSeatList(newSeatList);
    setTotalFare(newFare);

    if (newSeatList[index].available) {
      handleSeatSelection({
        id: newSeatList[index].id,
        isSelected: newSeatList[index].isSelected,
      });
    }
  };

  const rows = [];
  let currentRow = [];

  seatList.forEach((seat, index) => {
    currentRow.push(
      <Seat
        key={seat.id + 1}
        backgroundColor={seat.available ? 'white' : 'gray'}
        borderColor={seat.available ? 'black' : 'gray'}
        isReserved={!seat.available}
        isSelected={seat.isSelected}
        handleSeatClick={(newFare) => handleSeatClick(newFare, index)}
        changeFare={totalFare}
        price={seat.price}
      />
    );

    if ((index + 1) % 20 === 0) {
      rows.push(<div key={index}>{currentRow}</div>);
      currentRow = [];
    }
  });

  if (currentRow.length > 0) {
    rows.push(<div key="lastRow">{currentRow}</div>);
  }

  return (
    <div>
      <div>{rows}</div>
      <div>Total Fare: {totalFare}</div>
    </div>
  );
};

export default SeatMatrix;
