'use strict';

const store = (function () {
  let videos = [];

  // Update the state of videos
  function setVideos(videos) {
    this.videos = videos;
  }

  return {
    videos,
    setVideos,
  };
}());