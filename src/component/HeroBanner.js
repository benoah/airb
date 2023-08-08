import React, { useEffect, useState } from "react";
import axios from 'axios';

function HeroBanner() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random?count=6&client_id=o8G1B8MK7t9OXnhaL4a3-9I7uf34ngKzyyo5l7HW9bE')
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="hero-banner">
      <div className="photo-grid">
        {photos.map((photo) => (
          <img src={photo.urls.small} alt={photo.alt_description} key={photo.id} />
        ))}
      </div>
      <div>
                  <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}

export default HeroBanner;
