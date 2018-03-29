
window.onload = function () {//initialize game once the page starts up
    var QandA = [
        ["Which bear is best?", "Bears, beets ,_____?", "Which cat did "],
        ["Black bear", "Brown bear", "Polar bear", "Panda bear"],
        ["Battlestar galactica", "Bears", "Stanley", "Recyclops"],
        ["Fluffler", "Mr wiggle", "Nutterball", "Benedict"]//separate into questions and answers, 2 arrays
    ];
    var score = 0;
    var wrong = 0;
    var select_question;
    var select_answer;
    var selected;
    var question;
    var answer;

    $(".start").on("click", function () {
        Questions();

    })
    function Questions() {
        selected = Math.round(Math.random() * QandA[0].length);//select a random question from array
        console.log("random number generated :"+selected);
        select_question = QandA[0];
        console.log(select_question);
        question = select_question[selected];
        $(".question").text(question);//change text in question div
        console.log("Selected question :" + question);
        select_answer = QandA[selected + 1];
        console.log("Array of answers :" + select_answer);
        answer = select_answer[0];
        console.log("Answer to question :" + answer);
        shuffleArray(select_answer);

    }

    // Questions();

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

    $("button").on("click", function () {
        console.log("You chose  : " + $(this).text());
        console.log("The answer : " + answer)
        if ($(this).text() == answer) {
            alert("You got it");
        } else {
            alert("Wrong");
        }
    })
}
