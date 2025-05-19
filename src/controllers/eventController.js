// src/controllers/eventController.js

const EventService = require('../services/eventService');

const createEvent = async (req, res) => {
    try {
        const event = await EventService.createEvent(req.body);
        res.status(201).json({ message: 'Evento creado con éxito', event });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el evento', error });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await EventService.getEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener eventos', error });
    }
};

const subscribeToEvent = async (req, res) => {
    try {
        const result = await EventService.subscribeToEvent(req.body);
        res.status(200).json({ message: 'Suscripción exitosa', result });
    } catch (error) {
        res.status(500).json({ message: 'Error al suscribirse al evento', error });
    }
};

const unsubscribeFromEvent = async (req, res) => {
    try {
        const result = await EventService.unsubscribeFromEvent(req.body);
        res.status(200).json({ message: 'Desuscripción exitosa', result });
    } catch (error) {
        res.status(500).json({ message: 'Error al desuscribirse del evento', error });
    }
};

const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await EventService.updateEvent(req.body);
        res.status(200).json({ message: 'Evento actualizado', updatedEvent });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el evento', error });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const result = await EventService.deleteEvent(eventId);
        res.status(200).json({ message: 'Evento eliminado correctamente', result });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el evento', error });
    }
};




module.exports = {
    createEvent,
    getEvents,
    subscribeToEvent,
    unsubscribeFromEvent,
    updateEvent,
    deleteEvent,
};
