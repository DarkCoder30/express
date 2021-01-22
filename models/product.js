const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Product {
	constructor(name, price, url) {
		this.name = name
		this.price = price
		this.url = url
		this.id = uuidv4()
	}

	toJSON() {
		return {
			name: this.name,
			price: this.price,
			url: this.url,
			id: this.id
		}
	}

	async save() {
		const product = await Product.getAll()
		product.push(this.toJSON())
		return new Promise((resolve, reject) => {
			fs.writeFile(path.join(__dirname, '..', 'data', 'product.json'), JSON.stringify(product), err => {
				if (err) {
					reject(err)
				} else
					resolve()
			})
		})
	}

	static getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, '..', 'data', 'product.json'),
				'utf-8',
				(err, content) => {
					if (err) {
						reject(err)
					} else {
						resolve(JSON.parse(content))
					}
				}
			)
		})
	}
}

module.exports = Product