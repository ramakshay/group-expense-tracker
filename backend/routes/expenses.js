const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');

router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    }
    catch(err) {
        res.status(500).json({error: err.message});
    }
});

//POST
router.post('/', async (req, res) => {
    const { name, amount, date, category } = req.body;
    try {
        const newExpense = new Expense({name, amount, date, category});
        await newExpense.save();
        res.json(newExpense);
    }
    catch(err) {
        res.status(400).json({error: err.message});
    }
});


module.exports = router;