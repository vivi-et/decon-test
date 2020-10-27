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
// const path = require('path');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
// const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
// const fs = require('fs');
// const LocalStrategy = require('passport-local').Strategy;
require('./config/passport');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/design', require('./routes/design'));

// =============================== CREATE DB TABLES ===============================

console.log('==========================================================================');
console.log('==========================================================================');
