
window.onload = function () {//initialize game once the page starts up
    var Question = [
        "Which bear is best?", "Bears, beets ,_____?", "Which cat did "
    ]
    var Answer_Shuffle = [
        ["Black bear", "Brown bear", "Polar bear", "Panda bear"],
        ["Battlestar galactica", "Bears", "Stanley", "Recyclops"],
        ["Fluffler", "Mr wiggle", "Nutterball", "Benedict"]
    ]
    var Answer = Answer_Shuffle;
    var score = 0;
    var wrong = 0;
    var select_question;
    var select_answer;
    var current_selection = 0;
    var previous_selection = 0;
    var question;
    var answer;
    var begin = false;

    var intervalId;
    var clockRunning = false;
    var time = 21;
    var lap = 1;

    function start() {
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }
    }

    $(".start").on("click", function () {
        Questions();
    })

    function reset() {
        time = 21;
        answer = "";
        $("#display").text("00");
        $("#display_score").text(score);
        Questions();
    }

    function Questions() {

        console.log("previous selection :" + previous_selection);
        do {
            current_selection = Math.round(Math.random() * (Question.length - 1));//select a random question from array //reset arrays
        } while (current_selection == previous_selection);
        previous_selection = current_selection;

        console.log("current selection :" + current_selection);
        question = Question[current_selection];
        $(".question").text(question);//change text in question div
        console.log("Selected question :" + question);
        select_answer = Answer_Shuffle[current_selection];
        console.log("Array of answers :" + select_answer);
        answer = select_answer[0];
        console.log("Answer to question :" + answer);
        shuffleArray(select_answer);


    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        $(".A").text(select_answer[0]);
        $(".B").text(select_answer[1]);
        $(".C").text(select_answer[2]);
        $(".D").text(select_answer[3]);
        Answer_Shuffle = Answer;
        console.log("Done shuffling");
        start();
    }

    $("ul").on("click", "#answers", function () {
        clearInterval(intervalId);
        clockRunning = false;
        console.log("You chose  : " + $(this).text());
        console.log("The answer : " + answer)
        if ($(this).text() == answer) {
            alert("You got it");
            score++;
            reset();
        } else if ($(this).text() != answer) {
            alert("Wrong");
            reset();
        }
    })


    function count() {
        time--;
        var converted = timeConverter(time);
  
        $("#display").text(converted);
        // console.log(converted);
        if ($("#display").text() == "00") {
            reset();
        }
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return seconds;
    }

    function timeup() {

    }



}
