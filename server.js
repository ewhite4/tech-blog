
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.store);

const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening!'));
});
