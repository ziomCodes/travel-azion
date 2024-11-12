// Booking.js
import React, { useState } from 'react';
import Exploring from './Explore';
import BookingConfirmation from './BookingConfirmation';

function Booking({ username }) {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleConfirmBooking = (bookingDetails) => {
    console.log('Booking confirmed:', bookingDetails);
    setSelectedDestination(null); // Reset to allow new bookings
  };

  return (
    <div>
      {!selectedDestination ? (
        <Exploring onSelectDestination={handleSelectDestination} />
      ) : (
        <BookingConfirmation
          selectedDestination={selectedDestination}
          onConfirmBooking={handleConfirmBooking}
          username={username}
        />
      )}
    </div>
  );
}

export default Booking;
