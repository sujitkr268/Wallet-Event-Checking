const express = require("express");
const router = express.Router();

const Event = require("../models/Event");
const Registration = require("../models/Registration");

// Register for an event
router.post("/", async (req, res) => {
    try {
        const { eventId, walletAddress } = req.body;

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        if (event.availableSeats <= 0) {
            return res.status(400).json({
                message: "No seats available"
            });
        }

        const existing = await Registration.findOne({
            eventId,
            walletAddress: walletAddress.toLowerCase()
        });

        if (existing) {
            return res.status(400).json({
                message: "Wallet already registered"
            });
        }

        const registration = await Registration.create({
            eventId,
            walletAddress
        });

        event.availableSeats -= 1;
        await event.save();

        res.status(201).json({
            message: "Registration Successful",
            registration
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Check-in a registration
router.post("/checkin", async (req, res) => {
    try {
        const { eventId, walletAddress } = req.body;

        if (!eventId || !walletAddress) {
            return res.status(400).json({
                message: "eventId and walletAddress are required"
            });
        }

        const registration = await Registration.findOne({
            eventId,
            walletAddress: walletAddress.toLowerCase()
        });

        if (!registration) {
            return res.status(404).json({
                message: "Registration not found"
            });
        }

        if (registration.checkedIn) {
            return res.status(400).json({
                message: "Already checked in"
            });
        }

        registration.checkedIn = true;
        await registration.save();

        res.status(200).json({
            message: "Check-in successful",
            registration
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;