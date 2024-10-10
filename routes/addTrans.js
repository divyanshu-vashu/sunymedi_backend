const express = require('express');
const router = express.Router();
const {Alice} =require('../models/Alice')

router.put('/add-transaction/:alice', async (req, res) => {
    try {
        const alice= await Alice.findOne({ alice: req.params.alice });
        if (alice) 
        {
            alice.transactions.push(req.body.date);
            await alice.save();
            return res.json(alice); 
        } else {
            return res.status(404).send('Alice does not exists.'); 
        }
    } catch (err) {
        return res.status(500).send('Server error'); 
    }
});

module.exports = router;