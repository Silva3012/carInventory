require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

const app = express();
app.use(helmet());
app.use(cors())
// Use JSON middleware to parse incoming request
app.use(express.json());
//Import routes
const carRoutes = require('./routes/CarRoutes')
app.use('/', carRoutes);



//Connect to the DB with mongoose
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
