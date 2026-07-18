import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CheckIn from "./pages/CheckIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Events</Link>
        <Link to="/checkin">Check-In</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;