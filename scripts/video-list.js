'use strict';
/*global $, store, videoList*/

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

  return {
    generateListItem,
    render,
  };
}());