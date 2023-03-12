const express = require('express')
const config = require("config")
const mongoose = require("mongoose")


const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({extended: true}))

//эндпоинты
app.use('/api/auth', require('./routes/auth.routes')) 
app.use('/api/items', require('./routes/items.routes')) 



async function start () {
    try {
        await mongoose.connect(config.get('mongoURI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModidy: true 

        }))
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

start ()




