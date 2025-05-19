// src/routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// POST - Crear evento
router.post('/create', eventController.createEvent);

// GET - Obtener eventos
router.get('/', eventController.getEvents);

// POST - Suscribirse a evento
router.post('/subscribe', eventController.subscribeToEvent);

// DELETE - Desuscribirse de evento
router.delete('/unsubscribe', eventController.unsubscribeFromEvent);

// PUT - Actualizar evento
router.put('/update', eventController.updateEvent);

// DELETE - Eliminar evento
router.delete('/delete/:id', eventController.deleteEvent);


module.exports = router;
