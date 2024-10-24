import React from "react";

function Home() {
  return (
    <>
      <header>
        <div className="search">
          <input type="text" placeholder="Search" />
          <svg
            className="search-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </header>

      <main>
        <div className="main-banner">
          <img src="icons/main.png" alt="Banner Image" />
        </div>

        <nav className="main-menu">
          <button className="nav-button">My Bookings</button>
          <button className="nav-button">Train Tickets</button>
          <button className="nav-button">Check PNR Status</button>
          <button className="nav-button">Live Train Status</button>
        </nav>

        <section className="offers">
          <h2 style="text-align: center;">Book your tickets now!</h2>
          <div className="offer-cards">
            <div className="offer-card">
              <img src="icons/train1.webp" alt="Train Offer" />
              <p>Get 50% off on your first booking</p>
              <h6>*Valid for new users only</h6>
            </div>
            <div className="offer-card">
              <img src="icons/train2.jpg" alt="Train Offer" />
              <p>Use code: WELCOME</p>
              <h6>*Limited time offer</h6>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <nav className="bottom-nav">
          <button>Home</button>
          <button>Tickets</button>
          <button>Status</button>
          <button>More</button>
        </nav>
      </footer>
    </>
  );
}

export default Home;
