// FOLLOWING ESLINT - AIRBNB STYLE FORMAT

const express = require('express');
// =============================== SET ENV NODE ===============================
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
process.env.PWD = process.cwd();

// =============================== DEPENDENCY ===============================

const app = express();
const session = require('express-session');
const hbs = require('express-hbs');
const passport = require('passport');
const flash = require('express-flash');
const path = require('path');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
// const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const fs = require('fs');
const LocalStrategy = require('passport-local').Strategy;
require('./config/passport');

// =============================== MODEL ===============================
// const auth = require('./config/auth');
const db = require('./config/db');
const User = require('./models/User');
const Design = require('./models/Design');
const Category = require('./models/Category');
const SubCategory = require('./models/SubCategory');

// const Notice = require('./models/Notice');
// =============================== MODEL RELATIONS ===============================
const Relations = require('./models/Relations');

// =============================== STATIC FOLDER / RESOURCES ===============================
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(`${process.env.PWD}/public`));

// ============================== SESSION, MIDDLEWARE & VIEW ENGINE  ==============================
// app.engine('hbs', exphbs({ extname: '.hbs' }));
// app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const client = redis.createClient(6379, 'localhost');

app.engine(
  'hbs',
  hbs.express4({
    partialsDir: `${__dirname}/views/partials`,
    layoutsDir: `${__dirname}/views/layouts`,
    helpers: {
      inc(value, options) {
        return parseInt(value) + 1;
      },
    },
  }),
);

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

// SESSION SET
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({
      client,
      ttl: 260,
    }),
    resave: false,
    saveUninitialized: false,
  }),
);
// PASSPORT SET
app.use(passport.initialize());
app.use(passport.session()); // LOGIN SESSION

app.use((req, res, next) => {
  res.locals.user = req.user; // STORE USER DATA IN SESSION FOR GLOBAL ACCESS
  next();
});
app.use(flash()); // FOR FLASH MESSAGE

// =============================== HANDLEBARS HELPERS ===============================
hbs.registerHelper('inc', (value, options) => parseInt(value) + 1);

app.set('port', 8888);

app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));
// =============================== ROUTES ===============================
app.get('/', (req, res) => {
  res.redirect('/design');
});

app.use('/design', require('./routes/design'));

// =============================== CREATE DB TABLES ===============================
db.sync();
initDB();

async function initDB() {
  const categoryArr = [
    { korname: '로고&아이덴티티' },
    { korname: '웹&앱 디자인' },
    { korname: '비즈니스&광고' },
    { korname: '아트&일러스트' },
    { korname: '패키지&라벨' },
    { korname: '북&매거진' },
  ];

 {'로고 디자인'}
'로고 및 브랜드 아이덴티티'
'로고 및 브랜드 가이드'
'로고 및 소셜미디어 팩'
'로고 및 호스팅 웹사이트'
'로고 및 명함'
'명함'
'문구류'



  Object.keys(categoryArr).forEach((key) => {
    const { korname } = categoryArr[key];
    Category.findOrCreate({ where: { korname }, defaults: { name } });
  });

  const categories = await Category.findAll();
  console.dir(categories);
}

console.log(
  '==========================================================================',
);
console.log(
  '==========================================================================',
);
