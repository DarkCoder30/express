const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const productRoute = require('./routes/product')
const aboutRoute = require('./routes/about')
const Product = require('./models/product')
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
})
const PORT = process.env.PORT || 3000
//todo engine hbs
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
//? USE добавление файлов без пути (по дефолту)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
	console.log(`Server is working on port: ${PORT}`)
})
//todo Routing
app.use('/', homeRoute)
app.use('/add', addRoute)
app.use('/about', aboutRoute)
app.use('/product', productRoute)
//todo RoutingEnd











