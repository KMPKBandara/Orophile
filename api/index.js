import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
const app = express();
const User = require('./models/User').default;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kmpkbandara:<3yALa6jwOHAdE9es>@orophile.dlun7.mongodb.net/?retryWrites=true&w=majority&appName=Orophile');

app.post('/register', async(req,res) => {
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({username, password});
        res.json(userDoc); 
    } catch (e) {
        res.status(400).json(e);
    }
});

app.listen(4000);