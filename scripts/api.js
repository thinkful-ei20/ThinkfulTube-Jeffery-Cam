'use strict';

const API_KEY = 'AIzaSyDaLzcQM6Go8Dy9zk4imc6MFowc6BMpeps';

const api = (function() {
  function fetchVideos(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: `${searchTerm}`,
    };
    $.getJSON(BASE_URL, query, callback);
  }

  return {
    fetchVideos,
  };
}());