'use strict';

const _ = require('lodash');
const bookmarkStore = {

  bookmarkCollection: require('./bookmark-store.json').bookmarkCollection,

  getAllBookmarks() {
    return this.bookmarkCollection;
  },

    getBookmarks(id) {
    return _.find(this.bookmarkCollection, { id: id });
  },
    
   removeWebsite(id, websiteId) {
    const bookmark = this.getBookmarks(id);
     _.remove(bookmark.websites, { id: websiteId });
  },
  
  removeBookmark(id) {
  _.remove(this.bookmarkCollection, { id: id });
},
  
};

module.exports = bookmarkStore;

 
  
