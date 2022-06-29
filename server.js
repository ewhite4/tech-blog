import express from 'express';
import { engine } from 'express-handlebars';
import { appendFile } from 'fs';

const path = require('path');
const routes = require('./controllers/');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
