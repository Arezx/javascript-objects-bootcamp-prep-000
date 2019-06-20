var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3",
};

function updatePlaylist(aplaylist, artistName, songTitle) {
  return Object.assign({}, aplaylist, { [artistName] : songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromePlaylist(aplaylist, artistName) {
  delete aplaylist[artistName];
  return aplaylist;
}

removeFromPlaylist(playlist, "artist2");