var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3",
};

function updatePlaylist(xPlaylist, artistName, songTitle) {
  return Object.assign({}, xPlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");