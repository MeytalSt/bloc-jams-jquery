class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.getDuration();
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
