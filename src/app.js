const express = require('express')
const path = require('path')
const hbs = require('hbs')
const authenticate = require('./api/login')
const margin = require('./api/userMargin')
const { error } = require('console')
const orderbook = require('./api/userOrder')
const holding = require('./api/userHolding')
const position = require('./api/userPosition')



const app = express()
const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('views', viewsPath)
app.set('view engine', 'hbs')

app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: false }))

app.get('', (req, res) => {
    res.render('login')
})

app.post('', async(req, res) => {
    let { email, password, date } = req.body
    date = date.replace(/-/g, '')

    const result = await authenticate(email, password, date)

    if (result) {
        res.render('dashboard')

    } else {
        res.render("login", { message: "Invalid Credentials" })
    }
})


app.get('/margin', async(req, res) => {

    const result = await margin()
    if (result) {
        console.log(result)
        console.log(result.body.EquityMargin)
            //res.send(result)
    } else {
        console.log("oops")
            //res.status(400).send(error)
    }
})

app.get('/orderbook', async(req, res) => {

    const result = await orderbook()
    if (result) {
        console.log(result)
        console.log(result.body.OrderBookDetail)

        //res.send(result)
    } else {
        console.log("oops")
            //res.status(400).send(error)
    }
})

app.get('/holding', async(req, res) => {

    const result = await holding()
    if (result) {
        console.log(result)
        console.log(result.body.Data)

        //res.send(result)
    } else {
        console.log("oops")
            //res.status(400).send(error)
    }
})


app.get('/position', async(req, res) => {

    const result = await position()
    if (result) {
        console.log(result)
        console.log(result.Message)
            //console.log(result.body.EquityMargin)
            //res.send(result)
    } else {
        console.log("oops")
            //res.status(400).send(error)
    }
})
app.listen(port, () => {
    console.log("Server running at port " + port)
})