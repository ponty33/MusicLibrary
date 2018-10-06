function Library (name, creator) {
  this.name= name;
  this.creator= creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {
  let sum = 0;
  this.tracks.forEach((track) => {
    sum += parseInt(track.rating);
  })
  let avg = (sum / this.tracks.length);
  return avg;
};
Playlist.prototype.totalDuration = function() {
  let sum = 0;
  this.tracks.forEach((track) => {
    sum += parseInt(track.length);
  })
  return sum;
};
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track)
}


function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}



//Test driver codes

let library1 = new Library('new', 'Frank');
let playlist1 = new Playlist('8')
let track1 = new Track('A', '5','120')
let track2 = new Track('B', '4','180')

playlist1.addTrack(track1);
playlist1.addTrack(track2);

library1.addPlaylist(playlist1);

// console.log(playlist1.tracks[0].rating);
console.log(playlist1.totalDuration());
