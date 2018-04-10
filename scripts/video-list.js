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

  return {
    generateListItem,
  };
}());