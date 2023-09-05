const mongoose = require('mongoose');
require('dotenv/config')

mongoose
.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true})
.then(()=>{
    console.log("Connected to DB")
})
.catch(err => console.log(`DB Connection Error : ${err}`))

module.exports = mongoose