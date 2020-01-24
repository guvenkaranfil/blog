const express = require("express"); // for create a server
const bodyParser = require("body-parser"); // parser requests
const mongoose = require("mongoose"); // database connection helper
const morgan = require("morgan"); // for log requests
const expressValidator = require("express-validator"); // validate uncoming requetests bodies params
const cors = require("cors");
require("dotenv").config(); // for using .env file

// creating express app
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cors());

// Database connection
mongoose
  .connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log(`${process.env.DATABASE_NAME} is started.`))
  .catch(err => console.log("databse could not started ==> ", err));

app.listen(process.env.PORT || 8000, err => {
  if (err) console.log("server could not started ==> ", err);
  else console.log("server is running at ", process.env.PORT || 8000);
});
