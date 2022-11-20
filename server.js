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
//npm i method-override
const methodOverride = require('method-override')

//EXPORTED SCHEMA
const Collection = require('./models/userSchema.js')

//DELETE THIS AT END OF PROJECT
// SEED IMPORT
const seed = require("./models/collections.js")
const { findById, findByIdAndUpdate } = require('./models/userSchema.js')

// =============================================
//                    ROUTES
// =============================================

// NEW 
app.get('/storage/new', (req, res) => {
    res.render('new.ejs')
})

//POST
app.post('/storage', (req, res) => {
    Collection.create(req.body, (err, createdItem) => {
        res.redirect('/storage')
    })
})

// INDEX
app.get('/storage', (req, res) => {
    Collection.find({}, (err, allCollections) => {
        res.render('index.ejs', {
            collections: allCollections
        })
    })
})

//SEED DATA
app.get('/storage/seed', (req, res) => {
    Collection.create(seed, (err, data) => {
        res.send(data)
    })
})

//SHOW
app.get('/storage/:id', (req, res) => {
    Collection.findById(req.params.id, (err, foundItem) => {
        res.render('show.ejs', {
            collections: foundItem
        })
    })
})

//EDIT
app.get('/storage/:id/edit', (req, res) => {
    Collection.findById(req.params.id, (err, updatedItem) => {
        res.render('show.ejs', {
            collections: updatedItem
        })
    })
})

//PUT
app.put('/storage/:id', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        res.redirect('/storage')
    })
})
//DELETE
app.delete('/storage/:id', (req, res) => {
    Collection.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/storage')
    })
})

// app.get('/', (req, res) => {
//     res.send('test')
// })

// =============================================
//                  PORT SETUP
// =============================================

app.listen(PORT, () => {
    console.log('listening...');
})

mongoose.connect('mongodb+srv://Parrasite9:4Brothers1995^@cluster0.tw3kise.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('connected to mongo');
})
