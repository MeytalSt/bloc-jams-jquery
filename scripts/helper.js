class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.getDuration();
    const newSong = album.songs[previousSongIndex];
    $('.total-time').text(player.newSong.duration);
    $('#time-control').text(player.totalTime);
  }
}

const helper = new Helper();

//{
//  $('.helper').addClass('Helper');

//  Helper.playPauseAndUpdate(song, {
//    player.playPause(song);
//    const totalTime = player.getDuration();
//    $('#time-control. total-time').text(player.(totalTime));
//  });
//}
