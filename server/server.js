import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as path from 'path';
import Event from './model/Event.js';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use('/public/', express.static(path.resolve('./public')));

app.get('/api/pagination', async (req, res, next) => {
  try {
    let { page, eventPerPage } = req.query;
    page = Number(page) - 1;
    eventPerPage = Number(eventPerPage);
    const events = await Event.find().skip(page * eventPerPage).limit(eventPerPage);
    return res.json(events);
  } catch (error) {
    return next(error);
  }
});

app.get('/api/events', handleEventSearch(Event));

function handleEventSearch(model) {
  return async (req, res) => {
    const { location, date, minPrice, maxPrice } = req.query;
    const findObject = {};
    if (location) {
      findObject.location = { $regex: location, $options: 'i' };
    }
    if (date) {
      findObject.date = new Date(date);
    }
    if (minPrice || maxPrice) {
      findObject.price = { $lt: maxPrice ? maxPrice : Infinity, $gt: minPrice ? minPrice : 0 };
    }
    const query = await model.find(findObject);
    return res.json(query);
  };
}


app.get('/api/events/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    return res.json(event);
  } catch (err) {
    return next(err);
  }
});

app.delete('/api/:id', async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    return res.json(deletedEvent);
  } catch (err) {
    return next(err);
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const name = req.body.name;
    const image = req.body.image;
    const date = req.body.date;
    const details = req.body.details;
    const price = req.body.price;
    const location = req.body.location;
    const available = req.body.available;
    const newEvent = new Event({
      name,
      image,
      date,
      details,
      price,
      location,
      available,
    });
    const events = await newEvent.save();
    return res.json(events);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false });
  }
});

app.patch('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.updateOne(
      { _id: req.params.id },
      { $set: req.body });
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false });
  }
});

async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(5000, () => {
    console.log('Fussatok bolondok: 5000');
  });
}

main();


