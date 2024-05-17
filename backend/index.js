
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('mongoose');

const app = express();
const uri="mongodb+srv://ampilkumarverma:nuPpw2uomeYATf3j@nodetraining.r0ujgao.mongodb.net/?retryWrites=true&w=majority&appName=nodeTraining"
async function connectToDatabase() {
    try {
      // Connect to the MongoDB database
     const connect= await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,connectTimeoutMS: 30000 });
   if(connect){
    console.log('Connected to the MongoDB database');
   }
    } catch (error) {
      console.error('Error connecting to the MongoDB database:', error);
    }
  }
  // Call the function to connect to the database
  connectToDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH, DELETE");
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }});

require("./routes/users.routes.js")(app);
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});