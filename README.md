# Wallet-Based Event Registration & Check-In

A full-stack web app where users connect their crypto wallet (MetaMask) to register for events and check in on-site. Built for GDG Hackathon 2026.

## What it does

- Browse available events with live seat counts
- Connect a MetaMask wallet to identify yourself
- Register for an event using your wallet address
- Prevents the same wallet from registering twice for one event
- Check in at the event using your wallet address and event ID
- Seat counts update in real time as people register

## Tech Stack

**Frontend:** React, ethers.js, react-router-dom
**Backend:** Node.js, Express, Mongoose
**Database:** MongoDB

## Project Structure
wallet-event-checking/
├── backend/     → Express API + MongoDB models
└── frontend/    → React app (events page, check-in page)
## Running Locally

### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:
MONGO_URI=your_mongodb_connection_string
PORT=5000
Then run:

```bash
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Open the app in your browser at the port shown in the terminal.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/events` | Get all events |
| POST | `/api/events` | Create an event |
| DELETE | `/api/events/:id` | Delete an event |
| POST | `/api/register` | Register a wallet for an event |
| POST | `/api/register/checkin` | Check in a registered wallet |

## Author

Built by Sujit — Haldia Institute of Technology
