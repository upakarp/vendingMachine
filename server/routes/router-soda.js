const express = require('express');
const router = express.Router();
const Sodas = require('../model/soda');

router.get('/', async(req, res) => {
    try{
        const sodas = await Sodas.find();
        res.json(sodas);
    }catch(err){
        res.send('Error ' + err);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const sodas = await Sodas.findById(req.params.id);
        res.json(sodas);
    }catch(err){
        res.send('Error ' + err);
    }
});

router.post('/', async(req, res) => {
    const soda = new Sodas({
        product_name: req.body.product_name,
        description: req.body.description,
        cost: req.body.cost,
        quantity: req.body.quantity,
    })

    try{
        const s1 = await soda.save();
        res.json(s1);
    } catch(err) {
        res.send('Error');
    }
});

router.put('/:id', async(req, res) => {
    try{
        const soda = await Sodas.findById(req.params.id);
        soda.quantity = req.body.quantity;
        const s1 = await soda.save();
        res.json(s1);
    }catch(err) {
        res.send('Error')
    }
})

module.exports = router;