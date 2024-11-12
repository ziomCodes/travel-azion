import React, { useState } from 'react';
import './styles/BookingConfirmation.css';

function BookingConfirmation({ selectedDestination, onConfirmBooking, username }) {
    const [bookingDetails, setBookingDetails] = useState({
        firstName: '',
        lastName: '',
        startDate: '',
        endDate: '',
        phone: '',
        persons: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleConfirm = () => {
        if (window.confirm('Are you sure you want to confirm this booking?')) {
            const totalPrice = selectedDestination.price * bookingDetails.persons;
            onConfirmBooking({ ...selectedDestination, ...bookingDetails, totalPrice });
            alert(
                `Booking Confirmed\n
         Destination: ${selectedDestination.name}\n
         Total Price: $${totalPrice}\n
         Thanks for using our website!`
            );
        }
    };

    return (
        <div className="confirmation-container">
            <div className="confirmation-content">
                <img src={selectedDestination.image} alt={selectedDestination.name} className="confirmation-image" />
                <div className="confirmation-details">
                    <h3>{selectedDestination.name}</h3>
                    <p>{selectedDestination.description}</p>
                    <p>Price per person: ${selectedDestination.price}</p>
                    <form className="booking-form">
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={bookingDetails.firstName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={bookingDetails.lastName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Travel Start Date:
                            <input
                                type="date"
                                name="startDate"
                                value={bookingDetails.startDate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Travel End Date:
                            <input
                                type="date"
                                name="endDate"
                                value={bookingDetails.endDate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="tel"
                                name="phone"
                                value={bookingDetails.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Number of Persons:
                            <input
                                type="number"
                                name="persons"
                                min="1"
                                value={bookingDetails.persons}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="button" onClick={handleConfirm}>
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingConfirmation;
