const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', (req, res) => {
	res.render('add', {
		title: 'Добавление товара',
		isAdd: true
	})
})

router.post('/', async (req, res) => {
	const product = new Product(req.body.name, req.body.price, req.body.url)
	await product.save()
	res.redirect('/product')
})

module.exports = router