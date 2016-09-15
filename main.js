function sayThatWasEasy () {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

/*global $*/ /*global sayThatWasEasy*/
$("#easy").on("click", sayThatWasEasy);
