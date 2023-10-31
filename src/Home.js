import React from "react";
import NavBar from "./NavBar";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <header>
        <NavBar />
      </header>
      <div>
          <h1>Welcome to Our Music World</h1>
          <p>Discover the rhythm of your soul</p>
        </div>
      <main className="main-content">
        <section className="feature-section">
          <h2>Why Choose Us?</h2>
          <div className="feature">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-song-1628488-1382542.png?f=webp" alt="Feature 1" />
            <h3>Amazing Songs</h3>
            <p>Explore a vast collection of music that suits your taste.</p>
          </div>
          <div className="feature">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-customer-review-2089397-1774770.png?f=webp&w=256" alt="Feature 2" />
            <h3>Leave a Review</h3>
            <p>Share your thoughts on your favorite tracks and artists.</p>
          </div>
          <div className="feature">
            <img src="https://static.thenounproject.com/png/3580649-200.png" alt="Feature 3" />
            <h3>Connect with Artists</h3>
            <p>Stay updated with your favorite musicians and bands.</p>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Home;
