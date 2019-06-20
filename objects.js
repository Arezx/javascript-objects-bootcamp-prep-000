var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3",
  artist4; "song4",
};

function updatePlaylist(aplaylist, artistName, songTitle) {
  return Object.assign({}, aplaylist, { [artistName] : songTitle});
}