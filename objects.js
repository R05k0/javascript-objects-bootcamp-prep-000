var playlist = { artistName: "songTitle"};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) { 
  delete playlist[artistName];
  return updatePlaylist;
}
© 2020 GitHub, Inc.