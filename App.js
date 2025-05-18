function App() {
  return (
    <div>
      {/* Netflix Logo */}
      <div className="netflix-logo">
        NETFLIX
      </div>

      {/* Banner */}
      <div className="banner">
        <img
          className="banner-image"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80"
          alt="Netflix Banner"
        />
        <div className="banner-content">
          <h1>Netflix Home Page Clone</h1>
          <p>Unlimited movies, TV shows, and more.</p>
          <button className="banner-button">Watch Now</button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="trending-container">
        <h2>Trending Now</h2>
        <div className="trending-row">
          <img src="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" alt="Movie 1" />
          <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" alt="Movie 2" />
          <img src="https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg" alt="Movie 3" />
          <img src="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" alt="Movie 1" />
          <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" alt="Movie 2" />
          <img src="https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg" alt="Movie 3" />
          <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" alt="Movie 2" />
        </div>
      </div>

      {/* More Reasons Section */}
      <div className="reasons-container">
        <h2>More reasons to join</h2>
        <div className="reasons-list">
          <div className="reason-card">
            <h3>Enjoy on your TV</h3>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="reason-card">
            <h3>Download your shows to watch offline</h3>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
          <div className="reason-card">
            <h3>Watch everywhere</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
          </div>
          <div className="reason-card">
            <h3>Create profiles for kids</h3>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Corporate Information</a>
          </div>
          <p className="footer-copy">&copy; 2025 Netflix Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}