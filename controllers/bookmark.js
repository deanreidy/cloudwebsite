'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');

const bookmark = {
  index(request, response) {
    const bookmarkId = request.params.id;
    logger.debug('Bookmark id = ', bookmarkId);
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkStore.getBookmarks(bookmarkId),
    };
    response.render('bookmark', viewData);
  },
  
    deleteWebsite(request, response) {
    const bookmarkId = request.params.id;
    const websiteId = request.params.websiteid;
    logger.debug(`Deleting Website ${websiteId} from Bookmarks ${bookmarkId}`);
    bookmarkStore.removeWebsite(bookmarkId, websiteId);
    response.redirect('/bookmark/' + bookmarkId);
  },
  
  deleteBookmark(request, response) {
    const bookmarkId = request.params.id;
    logger.debug(`Deleting Bookmark ${bookmarkId}`);
    bookmarkStore.removeBookmark(bookmarkId);
    response.redirect('/dashboard');
  },
  
  
  
};

module.exports = bookmark;