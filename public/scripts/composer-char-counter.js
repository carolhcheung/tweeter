$(document).ready(function () {
  $('#tweet-text').keydown(function () {  //this is refering to tweet-text use jquery instead of counter
    const currentLength = $(this).val().length;
    const characterCounter = $(this).siblings().children()[1];

    $(characterCounter).text(140 - currentLength);

    if (currentLength > 140) {
      $(characterCounter).css('color', '#FF0000');
    } else {
      $(characterCounter).css('color', '#545149');
    }
  });
});

