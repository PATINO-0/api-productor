// src/models/eventModel.js

const db = require('../utils/db');

const createEvent = (eventData) => {
    const query = 'INSERT INTO events (name, description, date, attendees) VALUES (?, ?, ?, ?)';
    return db.execute(query, [eventData.name, eventData.description, eventData.date, eventData.attendees]);
};

const getEvents = () => {
    const query = 'SELECT * FROM events';
    return db.execute(query);
};

const subscribeToEvent = (userData) => {
    const query = 'INSERT INTO subscriptions (user_id, event_id) VALUES (?, ?)';
    return db.execute(query, [userData.user_id, userData.event_id]);
};

const unsubscribeFromEvent = (userData) => {
    const query = 'DELETE FROM subscriptions WHERE user_id = ? AND event_id = ?';
    return db.execute(query, [userData.user_id, userData.event_id]);
};

const updateEvent = (eventData) => {
    const query = 'UPDATE events SET name = ?, description = ?, date = ?, attendees = ? WHERE id = ?';
    return db.execute(query, [eventData.name, eventData.description, eventData.date, eventData.attendees, eventData.id]);
};

const deleteEvent = (eventId) => {
    const query = 'DELETE FROM events WHERE id = ?';
    return db.execute(query, [eventId]);
};



module.exports = {
    createEvent,
    getEvents,
    subscribeToEvent,
    unsubscribeFromEvent,
    updateEvent,
    deleteEvent,
};
