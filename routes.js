'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const bookmark = require('./controllers/bookmark.js')

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/deleteBookmark/:id', bookmark.deleteBookmark);
router.get('/about', about.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/bookmark/:id/deletewebsite/:websiteid', bookmark.deleteWebsite);


module.exports = router;
