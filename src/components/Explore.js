import React from 'react';
import './styles/Exploring.css';

// Importing images directly
import afarImage from '../images/afar.jpg';
import axumImage from '../images/axum.jpg';
import axzionImage from '../images/axzion.jpg';
import GeraltaImage from '../images/Geralta.jpg';
import GondarImage from '../images/Gondar.webp';
import LalbImage from '../images/lallb.jpg';
import omoImage from '../images/ommo.jpg';
import harrarImage from '../images/harrar.jpg';
import wonchiImage from '../images/wonchi.jpg';
import nejashiImage from '../images/nejashi.jpg';




const destinations = [
    {
        id: 1,
        name: 'Dallol',
        image: afarImage,
        description: 'Explore the place of afar with stunning nature.',
        price: 240,
    },
    {
        id: 2,
        name: 'alNejashi',
        image: nejashiImage,
        description: 'Explore the Historical Mosque of Al Nejashi.',
        price: 180,
    },
    {
        id: 3,
        name: 'Zion',
        image: axzionImage,
        description: 'Discover about the Ark of The Covenant.',
        price: 250,
    },
    {
        id: 4,
        name: 'Geraalta',
        image: GeraltaImage,
        description: 'Discover the mountains and churchs of Geraalta.',
        price: 240,
    },
    {
        id: 5,
        name: 'Gondar',
        image: GondarImage,
        description: 'Explore the city of Gondar and its old castles.',
        price: 110,
    },
    {
        id: 6,
        name: 'Lalibela',
        image: LalbImage,
        description: 'Discover The Churches and monuments of Lalibela City.',
        price: 200,
    },
    {
        id: 7,
        name: 'Omo Valley',
        image: omoImage,
        description: 'Explore the diversity of Tribes in Omo Valley.',
        price: 89,
    },
    {
        id: 8,
        name: 'Harrar City',
        image: harrarImage,
        description: 'Discover Harrar A city of tradition and pure love.',
        price: 104,
    },
    {
        id: 9,
        name: 'Wonchi Lake',
        image: wonchiImage,
        description: 'Discover Harrar A city of tradition and pure love.',
        price: 104,
    },
    {
        id: 10,
        name: 'Axum',
        image: axumImage,
        description: 'Experience the Traditional city and churches of Axum.',
        price: 104,
    }
];

function Exploring({ onSelectDestination }) {

    return (
        <div className="exploring-container">
            <h2>Explore Your Next Destination</h2>
            <div className="destinations-list">
                {destinations.map((destination) => (
                    <div key={destination.id} className="destination-card">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="destination-image"
                        />
                        <div className="destination-info">
                            <h3>{destination.name}</h3>
                            <p>{destination.description}</p>
                            <div className="price">Price: ${destination.price}</div>
                            <button
                                className="book-now-btn"
                                onClick={() => onSelectDestination(destination)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exploring;
