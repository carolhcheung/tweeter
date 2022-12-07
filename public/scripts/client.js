
//creates new tweet box when newTweet received
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
    <h6>${timeago.format(object.created_at)}</h6>
    <div class="icons">
      <i class="fa-solid fa-flag fa-icon"></i>
      <i class="fa-sharp fa-solid fa-retweet fa-icon"></i>
      <i class="fa-sharp fa-solid fa-heart fa-icon"></i>
    </div>
  </footer>
</article>`
  return $tweet;
};

//renders tweets from form input from html into into array of tweets for display
const renderTweets = function (tweets) {
  const allTweets = [];
  for (const tweet of tweets) {

    const $tweet = createTweetElement(tweet);
    allTweets.push($tweet)

  }
  $('#tweets-container').html(allTweets.reverse());


  return;
};

//function to display rendered tweet array in reverse, newest tweet on top
const loadTweets = function () {
  //gets newtweets from /tweets database and rendersTweets
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function (tweet) {
      renderTweets(tweet);
    }
  });
};

$(document).ready(function () {
  //load existing allTweets
  loadTweets();
  //avoid reloading of page when submit tweet
  $('.tweetForm').submit(function (event) {
    event.preventDefault();
    //serializes tweet data from html to 
    const tweet = $(this).serialize()
    //POST new tweet data to /tweets and call loadTweets to display tweets
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: tweet,
      success: function (data) {
        loadTweets();
      }
    });

    //clears textarea and resets counter after submitting
    this.reset();
    $('.counter').text(140)
  });
});
