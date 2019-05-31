(function (window) {
  var byeSpeaker = {};
  const speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name)
  }

  window.byeSpeaker = byeSpeaker;
})(window);


