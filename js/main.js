'use strict';


$("button").click(function () {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
        $("button").after("<div>");
        $.each(data, function (key, val) {
            $("div").append(key + ":         " + val);
            $("div").append("<br>");
        })
    })
})