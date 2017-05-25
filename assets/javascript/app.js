$(document).ready(function() {

    $("#main-content").hide();
    $("#finish").hide();
    $(".start").click(function() {
        $(".start").hide();
        $("#main-content").show();
        $("#finish").hide();
    });
    $("#submit").click(function() {
        $("#main-content").hide();
        $("#finish").show();
    });


    var correctAns = 0;
    var wrongAns = 0;
    var time = 30;

    var timer = setInterval(counter, 1000);


    function counter() {
        time = time - 1;
        if (time <= 0) {
            clear();
            stats();
            $("#main-content").hide();
            $("#finish").show();

        }

        document.getElementById("counter").innerHTML = "Seconds Remaining: " + time;
    };

    $("#submit").click(function() {
        $("#main-content").hide();
        stats();
    });

    function clear() {
        clearInterval(timer);
    };

    function stats() {
        correctAns = 0;
        wrongAns = 0;

        for (var i = 0; i < 10; i++) {
            var radios = document.getElementsByName('q' + i);
            for (var n = 0; n < radios.length; n++) {
                var radio = radios[n];
                if (radio.value == "right" && radio.checked) {
                    correctAns++
                } else if (radio.value == "wrong" && radio.checked) {
                    wrongAns++
                }
            }
        }
    }
});
