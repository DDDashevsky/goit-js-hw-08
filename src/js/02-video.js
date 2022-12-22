import Player from '@vimeo/player';

const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', _.throttle(timeupdate, 1000));

function timeupdate(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
