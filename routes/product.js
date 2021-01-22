const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', async (req, res) => {
	const product = await Product.getAll()
	res.render('product', {
		title: 'Товары',
		isProduct: true,
		product
	})
})

module.exports = router