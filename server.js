// =============================================
//               CONNECT MONGOOSE
// =============================================

const mongoose = require('mongoose')
const mongoURI = 'mogodb://localhost:27017/storage'



// =============================================
//               CONNECT EXPRESS
// =============================================

const express = require('express')
const app = express()

// EXPRESS STATIC
app.use(express.urlencoded({extended:true})) // THIS ALLOWS YOU TO USE REQ.BODY
app.use(express.static('public'))


// =============================================
//                 DEPENDENCIES
// =============================================
let PORT = 3000
if(process.env.PORT){
    PORT = process.env.PORT
}

//DELETE FEATURE
// const methodOverride = require('method-override')

//EXPORTED SCHEMA
const Collection = require('./models/userSchema.js')

const seed = require("./models/collections.js")

// =============================================
//                    ROUTES
// =============================================
app.get('/storage/new', (req, res) => {
    res.render('new.ejs')
})


app.get('/', (req, res) => {
    res.send('test')
})

// =============================================
//                  PORT SETUP
// =============================================

app.listen(PORT, () => {
    console.log('listening...');
})

mongoose.connect('mongodb+srv://Parrasite9:4Brothers1995^@cluster0.tw3kise.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('connected to mongo');
})
