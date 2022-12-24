import Player from '@vimeo/player';
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', _.throttle(timeupdate, 1000));

function timeupdate(evt) {
  localStorage.setItem(timeKey, evt.seconds);
}

const getTime = localStorage.getItem(timeKey);

getTime = player.setCurrentTime(getTime ?? 0); //: player.setCurrentTime(0);
