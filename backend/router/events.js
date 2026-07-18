const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

// Create Event
router.post("/", async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Get All Events
router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Get Single Event by ID
router.get("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Event
router.delete("/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;