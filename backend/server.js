const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


//Middleware
app.use(cors());
app.use(express.json());


//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});


//Routes
const expenseRoutes = require('./routes/expenses');
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/expense', expenseRoutes);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});