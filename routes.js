//routers are in this file 
const express = require('express');
const router = express.Router();
const { 
	showItem,
	showItems,
	updateItem,
	newItem,
	deleteItem} = require('../controller.js');

router.get('/',showItems);
router.get('/:itemID',showItem);

router.post('/:itemID',newItem);
router.put('/:itemID',updateItem);

router.delete('/:itemID',deleteItem);

module.exports = router;