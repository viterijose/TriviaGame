
window.onload = function () {//initialize game once the page starts up
    var QandA = [
        ["Which bear is best?", "Bears, beets ,_____?", "Which cat did "],
        ["Black bear", "Brown bear", "Polar bear", "Panda bear"],
        ["Battlestar galactica", "Bears", "Stanley", "Recyclops"],
        ["Fluffler", "Mr wiggle", "Nutterball", "Benedict"]
    ]
    var score = 0;
    var wrong = 0;
    var select_question;
    var select_answer;
    var selected;
    var question;
    var answer;
    var begin = false;

    var intervalId;
    var clockRunning = false;
    var time = 0;
    var lap = 1;

    function reset() {
        time = 0;
        $("#display").text("00:00");
        $("#display_score").text(score);
        Questions();
    }

    function Questions() {

        selected = Math.round(Math.random() * 3);//select a random question from array //reset arrays
        select_question = QandA[0];
        console.log(select_question);
        question = select_question[selected];
        $(".question").text(question);//change text in question div
        console.log("Selected question :" + question);
        select_answer = QandA[selected+1];
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
    }

    $("#answers").on("click", function () {
        console.log("You chose  : " + $(this).text());
        console.log("The answer : " + answer)
        if ($(this).text() == answer) {
            alert("You got it");
            score++;
            reset();
        } else {
            alert("Wrong");
            reset();
        }
    })

    function count() {
        time++;
        var converted = timeConverter(time);
        console.log(converted);
        $("#display").text(converted);
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
    function start() {
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
            Questions();
        }

    }

    $(".start").on("click", function () {
        start();
    })
    
    function timeup(){

    }

    

}
