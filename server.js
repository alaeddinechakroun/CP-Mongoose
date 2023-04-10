const express = require('express')
const app = express()
app.use(express.json())
const PORT = 7000 
const mongoose = require('mongoose')

app.use(express.json())


mongoose.connect("mongodb+srv://mongodb-user:54077091@cluster0.cu5obte.mongodb.net/mongoosews?retryWrites=true&w=majority")
.then(() => console.log("database connected"))
.catch((err) => {console.log(err);})

app.use('/api' , require("./routes/contactRoute"))


app.listen(PORT, () => console.log("listening on port" , PORT))