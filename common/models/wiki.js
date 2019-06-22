'use strict';
const axios = require('axios');

module.exports = (Wiki) => {
  /**
   *
   * @param {string} term
  */

  Wiki.Search = async (term) => {
    return axios.get(`https://pt.wikipedia.org/w/api.php?action=opensearch&limit=1&search=${term}`)
      .then(res => ({
        term: res.data[1][0].toLowerCase(),
        searchResult: res.data[2][0],
        link: res.data[3][0],
      }));
  };
};
