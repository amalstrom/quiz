/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();

        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();

        var totalScore = codenameCalculator(q1Input) +
            saturdayCalculator(q2Input) +
            foodCalculator(q3Input);

        var finalAnswer = characterPicker(totalScore);
        displayOutput(name, finalAnswer);
    });
});

function characterPicker(totalScore) {
    if (totalScore <= 4) {
        return "Josh";
    } else if (totalScore <= 6) {
        return "CJ";
    } else if (totalScore <= 9) {
        return "Sam";
    } else {
        return "Toby";
    }
}

function displayOutput(name, output) {
    var result = "Congratulations " + name + ", you got: " + output;
    $(".result").html(result);
}

function codenameCalculator(codename) {
    console.log("codename:");
    if (codename.length <= 5) {
        console.log("Josh");
        return 1;
    } else if (codename.length <= 8) {
        console.log("CJ");
        return 2;
    } else if (codename.length <= 10) {
        console.log("Sam");
        return 3;
    } else {
        console.log("Toby");
        return 4;
    }
}

function saturdayCalculator(activity) {
    console.log("saturday:");
    if (activity.toLowerCase() === "relaxing") {
        console.log("Josh");
        return 1;
    } else if (activity.toLowerCase() === "visiting family"){
        console.log("CJ");
        return 2;
    } else if (activity.toLowerCase() === "sculling") {
        console.log("Sam");
        return 3;
    } else if (activity.toLowerCase() === "sailing") {
        console.log("Toby");
        return 4;
    }
}

function foodCalculator(food) {
    console.log("food:");
    if (food.toLowerCase() === "boiled chicken") {
        console.log("Josh");
        return 1;
    } else if (food.toLowerCase() === "dry rub"){
        console.log("CJ");
        return 2;
    } else if (food.toLowerCase() === "fish") {
        console.log("Sam");
        return 3;
    } else if (food.toLowerCase() === "pie") {
        console.log("Toby");
        return 4;
    }
}

