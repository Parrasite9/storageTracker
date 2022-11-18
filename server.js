// =============================================
//               CONNECT MONGOOSE
// =============================================

const mongoose = require('mongoose')



// =============================================
//               CONNECT EXPRESS
// =============================================

const express = require('express')
const app = express()

// EXPRESS STATIC
app.use(express.urlencoded({extended:true})) // THIS ALLOWS YOU TO USE REQ.BODY


// =============================================
//                 DEPENDENCIES
// =============================================
let PORT = 3000
if(process.env.PORT){
    PORT = process.env.PORT
}

app.get('/', (req, res) => {
    res.send('hi')
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
