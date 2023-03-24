import React, { useState } from 'react';
import SeatMatrix from './Matrix';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      const index = prevSelectedSeats.findIndex((s) => s.id === seat.id);
      if (index === -1) {
        return [...prevSelectedSeats, seat];
      } else {
        const newSelectedSeats = [...prevSelectedSeats];
        newSelectedSeats.splice(index, 1);
        return newSelectedSeats;
      }
    });
  };
  const bookSeats = (selectedSeats) => {
    // perform the booking operations here
    console.log(`Successfully booked seats: ${selectedSeats.join(', ')}`);
  }

  const handleConfirmBooking = () => {
    bookSeats(selectedSeats);
    console.log(selectedSeats); // do something with the selected seats
  };
  
  return (
    <div class="position-absolute top-10 start-50 translate-middle-x" >This is BookingPage for id:{id}
      <SeatMatrix handleSeatSelection={handleSeatSelection} />
            <h2>Selected Seats:</h2>
                <ul>
                {selectedSeats.map((seat) => (
                    <li key={seat.number}>Seat {seat.id}</li>
                    ))}
                </ul>
      <button onClick={handleConfirmBooking} type="button" class="position-absolute top-10 start-50 translate-middle-x btn btn-outline-danger" >Confirm</button>
    </div>
  );
};

export default BookingPage;
