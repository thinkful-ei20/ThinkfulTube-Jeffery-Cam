'use strict';
/*global $, store, videoList, api, decorateResponse*/

const videoList = (function(){
  function generateListItem(video) {
    return `
    <li>
    <h3>${video.title}</h3>
    <img src="${video.thumbnail}" alt="${video.title}">
    </li>
  `;
  }

  function render() {
    let html = '';
    store.videos.forEach(video => html += videoList.generateListItem(video));
    $('.results').html(html);
  }

  function handleFormSubmit() {
    $('form').on('submit', event => {
      event.preventDefault(); // prevent default behavior
      const searchTerm = $('#search-term').val(); // capture search input's value
      $('#search-term').val('');  // clear the search input
      api.fetchVideos(searchTerm, decorateResponse); // Add them to the store object
    });
  }

  function decorateResponse(response) {
    const videos = [];
    response.items.forEach(item => {
      videos.push({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
      });
    });
    store.setVideos(videos); // update the store in store.js
    render(); // render
  }

  function bindEventListeners() {
    handleFormSubmit();
  }

  return {
    generateListItem,
    render,
    handleFormSubmit,
    decorateResponse,
    bindEventListeners,
  };
}());