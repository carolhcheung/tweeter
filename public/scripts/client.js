/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function (object) {
  const $tweet = `
  <article class="tweets">
  <header class="tweet-header">
    <div class="user-avatar">
      <img class="tweeter-avatar" src="${object.user.avatars}">
      <h4 class="tweeter-name">${object.user.name}</h4>
    </div>
    <div>
      <h4>${object.user.handle}</h4>
    </div>
  </header>
  <article class="tweet-text">
  ${object.content.text}
  </article>
  <hr>
  <footer class="tweet-footer">
    <h6>${object.created_at}Days Ago</h6>
    <div class="icons">
      <i class="fa-solid fa-flag fa-icon"></i>
      <i class="fa-sharp fa-solid fa-retweet fa-icon"></i>
      <i class="fa-sharp fa-solid fa-heart fa-icon"></i>
    </div>
  </footer>
</article>`
  return $tweet;
}


const renderTweets = function (tweets) {

  for (const tweet of tweets) {

    const $tweet = createTweetElement(tweet);

    $(document).ready(function () {
      $('#tweets-container').after($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    });
  }
  return;
};
renderTweets(data);


$(document).ready(function () {

  renderTweets(data);

  $('.tweetForm').submit(function (event) {
    event.preventDefault();
    $(this).serialize()
    $.post("/tweets", $(this).serialize());
  });
  // console.log("Handler for .submit() called.");
  // $.ajax({
  //   type: 'POST',
  //   url: '/tweets',
  //   data: $(this).serialize()
  // });
});



console.log("handler for .ajax() called.")