const mongoose = require('mongoose')
const dbConfig = require('./dbconfig')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(dbConfig.database,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
        console.log('MongoDB Connected')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB