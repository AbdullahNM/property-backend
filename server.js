require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require('cors');

// const learnerRoutes = require('./routes/learner.routes');
// const teacherRoutes = require('./routes/teacher.routes');
const cookieParser = require('cookie-parser');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser())
// app.use('/api', learnerRoutes);

app.use('/api',(req,res)=>{
    res.send("Hello World");
    res.status(200);
    console.log("Api used");
})
// app.use('/api/list-properties', teacherRoutes);

app.all("*", (req, res) => {
    res.status(404);
    console.log("404 error");
    if(req.accepts("html")){
      res.sendFile(path.join(__dirname, "views", "404.html"));
    }
    else if (req.accepts("json")) {
      res.json({ message: "404 Not Found" });
    } else {
      res.type("txt").send("404 Not Found");
    }
  });

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})