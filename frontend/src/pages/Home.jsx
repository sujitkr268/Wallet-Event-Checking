import { useEffect, useState } from "react";
import API from "../services/api";
import { registerForEvent } from "../services/register";
import { connectWallet } from "../services/wallet";

function Home() {
  const [events, setEvents] = useState([]);
  const [wallet, setWallet] = useState("");

  const fetchEvents = () => {
    API.get("/events")
      .then((res) => setEvents(res.data))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleConnect = async () => {
    const address = await connectWallet();
    if (address) setWallet(address);
  };

  const handleRegister = async (eventId) => {
    if (!wallet) {
      alert("Connect your wallet first");
      return;
    }
    try {
      const res = await registerForEvent(eventId, wallet);
      alert(res.data.message);
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="page">
      <h1>Available Events</h1>
      <p>Total Events: {events.length}</p>

      {wallet ? (
        <div className="wallet-badge">
          Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
        </div>
      ) : (
        <button className="connect-btn" onClick={handleConnect} style={{ marginBottom: "20px" }}>
          Connect Wallet
        </button>
      )}

      <div className="event-grid">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>📍 {event.location}</p>
            <span className="seats-tag">{event.availableSeats} seats left</span>
            <div style={{ marginTop: "10px" }}>
              <button className="register-btn" onClick={() => handleRegister(event._id)}>
                Register with Wallet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;