// src/services/eventService.js

const EventModel = require('../models/eventModel');
const snsService = require('./snsService');

const createEvent = async (eventData) => {
    const event = await EventModel.createEvent(eventData);
    await snsService.sendMessage('Nuevo Evento Creado', eventData);
    return event;
};

const getEvents = async () => {
    return await EventModel.getEvents();
};

const subscribeToEvent = async (userData) => {
    const result = await EventModel.subscribeToEvent(userData);
    await snsService.sendMessage('Nuevo Suscriptor', userData);
    return result;
};

const unsubscribeFromEvent = async (userData) => {
    const result = await EventModel.unsubscribeFromEvent(userData);
    await snsService.sendMessage('Desuscripción', userData);
    return result;
};

const updateEvent = async (eventData) => {
    return await EventModel.updateEvent(eventData);
};

const deleteEvent = async (eventId) => {
    return await EventModel.deleteEvent(eventId);
};



module.exports = {
    createEvent,
    getEvents,
    subscribeToEvent,
    unsubscribeFromEvent,
    updateEvent,
    deleteEvent,
    
};
