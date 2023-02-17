const express =  require("express");
const app = express();
const router = express.Router();
//router
const home = require("./routes/home");

app.use('/', home);

app.listen("3000");