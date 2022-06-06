
(function sayGoodBye (window) {
    var sayGoodBye = new Object();
    var speakWord = "Good Bye";    
    sayGoodBye.speak = function (name) {
  console.log(speakWord + " " + name);
};      
    window.sayGoodBye = speakWord;
})(window);

