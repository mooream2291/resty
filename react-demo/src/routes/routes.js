'use strict'

const express = require('express');
const Pokemon = require('../models/poke');
const poke = new Poke();

const router = express.Router();

//RESTful routes

router.get('/poke', getPlace);
router.get('/poke/:id', getOnePlace);
router.post('/poke', createPlace);
router.put('/poke/:id', updatePlace);
router.delete('/poke/:id', deletePlace);

//RESTful route handlers

function getPoke(req, res) {
    const allPoke = poke.get();
    res.status(200).json(allPoke);
}

function getOnePoke(req, res) {
    const id = req.params.id;
    const onePoke = poke.get(id);
    res.status(200).json(onePoke);
}

function createPoke(req, res) {
    console.log(req.body.name);
    const obj = req.body;
    const newPoke = poke.create(obj);
    res.status(200).json(newPoke);
}

function updatePoke(req, res) {
    const updateId = req.params.id;
    const updatedPoke = poke.update(updateId, req.body);
    res.status(200).json(updatedPoke);
}

function deletePoke(req, res) {
    const deleteId = req.params.id;
    const deletePoke = place.delete(deleteId);
    res.status(200).send('deleting poke');
}

module.exports = router;