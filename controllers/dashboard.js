'use strict';

const logger = require('../utils/logger');
const bookmarkCollection = require('../models/bookmark-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmarks: bookmarkCollection.getAllBookmarks(),
    };
     logger.info('about to render', bookmarkCollection.getAllBookmarks());
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;