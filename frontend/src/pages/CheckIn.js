import { useState } from "react";
import API from "../services/api";

function CheckIn() {
  const [eventId, setEventId] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleCheckIn = async () => {
    try {
      const res = await API.post("/register/checkin", { eventId, walletAddress });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="page">
      <h1>Event Check-In</h1>
      <div className="checkin-form">
        <input
          type="text"
          placeholder="Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <button className="checkin-btn" onClick={handleCheckIn}>
          Check In
        </button>
      </div>
    </div>
  );
}

export default CheckIn;