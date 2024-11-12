import React, { useState, useEffect } from 'react';
import './styles/AboutUs.css';
import about from '../images/aboutUs.jpg';

function AboutUs() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(savedComments);
    }, []);

    const handleAddComment = () => {
        if (username && newComment) {
            const updatedComments = [...comments, { username, message: newComment }];
            setComments(updatedComments);
            localStorage.setItem('comments', JSON.stringify(updatedComments));
            setNewComment('');
            setUsername('');
        }
    };

    return (
        <div className="about-us">
            <div className="welcome-message">
                <h1>Welcome to Azion Travels</h1>
                <p>
                    Discover the journey that brought us here. We are passionate about travel and dedicated to creating unforgettable experiences for you. Join us as we continue to explore new destinations and redefine the travel experience.
                </p>
            </div>

            <div className="info-container">
                <img
                    src={about}
                    alt="Our Journey"
                    className="about-image"
                />
                <div className="info-text">
                    <h2>Our Mission</h2>
                    <p>
                        At the heart of our company is a desire to connect people with the Ethiopias most beautiful destinations. Our team of experts works tirelessly to bring you the best travel deals, curated itineraries, and unparalleled customer service. From the  streets of Traditional cities to the amazing churches and mosques, we strive to make every journey as memorable and unique as possible.
                    </p>
                </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Leave a Comment</h3>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Name"
                    className="input-field"
                />
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Leave a comment"
                    className="input-field"
                />
                <button onClick={handleAddComment}>Add Comment</button>

                <div className="comment-list">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-item">
                            <p><strong>{comment.username}</strong>: {comment.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
