
(function sayHello (window) {
    var sayHello = new Object();
    var speakWord = "Hello";    
    sayHello.speak = function (name) {
    console.log(speakWord + " " + name);
    };
    window.sayHello = speakWord;
})(window);

