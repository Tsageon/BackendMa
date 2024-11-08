const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const dbRoutes = require("./routes/db");
const authRoutes = require("./routes/auth")
const cartRoutes = require("./routes/cart")

app.use(cors());
app.use(express.json());
app.use('/api', dbRoutes)
app.use('/api', authRoutes)
app.use('/api/cart', cartRoutes);


app.listen(4000, () => {
    console.log('Server is running on port http://localhost:4000')
})
