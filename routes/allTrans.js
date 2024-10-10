const express = require('express');
const router = express.Router();
const Joi = require("joi");
const { Alice } = require('../models/Alice');


router.get('/details', async (req, res) => {
  try {

    const alice = await Alice.find(); 
    //if (!alice) return res.status(404).send('Alice does not exists.');
    //console.log(email)
    res.send(alice);
  } catch (error) {
    res.status(500).send('Server error');
  }
});
module.exports = router;