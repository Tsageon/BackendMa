const express = require ("express");
const router = express.Router();
const { addItem, deleteItem, getItems, updateItem } = require('../Controllers/db');

router.post('/addItem', addItem)
router.delete('/deleteItem/:id', deleteItem)
router.get('/getItems',getItems)
router.put('/updateItem/:id',updateItem)

module.exports = router;