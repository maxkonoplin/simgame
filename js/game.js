// variables
var nameSelector = $("#name"),
    jobSelector = $("#job"),
    ageSelector = $("#age"),
    hungrySelector = $("#hungry"),
    healthSelector = $('#health'),
    moneySelector = $("#money"),
    incomeSelector = $("#income"),
    iqSelector = $("#iq"),
    homeSelector = $("#home"),
    timeSelector = $("#time"),
    hungryPerTime = 6,
    tempVar,
    hourGame = 0,
    daysGame = 0,
    monthGame = 0,
    yearsGame = 0,
    person = {
        name: "Ярик",
        job: "безработный",
        age: 30,
        hungry: 0,
        health: 100,
        money: 5,
        income: 0,
        iq: 85,
        home: "Подворотня"
    };


nameSelector.html(person.name);
jobSelector.html(person.job);
ageSelector.html(person.age);
hungrySelector.html(person.hungry);
healthSelector.html(person.health);
moneySelector.html(person.money);
incomeSelector.html(person.income);
iqSelector.html(person.iq);
homeSelector.html(person.home);
timeSelector.html(yearsGame + "лет," + monthGame + "месяцев," + daysGame + "дней" + hourGame + ":00");

// time
setInterval(function() {
    if ( hourGame == 23 ) {
        hourGame = 0;
        if ( daysGame == 30 ) {
            daysGame = 0;
            if ( monthGame == 12 ) {
                monthGame = 0;
                yearsGame++;
                person.age++;
                ageSelector.html(person.age);
            } else {
                monthGame++;
            }
        } else {
            daysGame++;
        }
    } else {
        hourGame++;
    }
    timeSelector.html(yearsGame + "лет," + monthGame + "месяцев," + daysGame + "дней" + hourGame + ":00");
}, 1000);

// hungry
setInterval(function() {
    if ( person.hungry >= 60 ) {
        if ( person.hungry >= 80 ) {
            addLogs("Ярик в предобморочном состоянии, накорми его!", "bg-danger");
            if ( person.hungry >= 100 ) {
                if ( person.money > 0 ) {
                    tempVar = (person.money * 0.4);
                    addLogs("Ярик потерял созание! Проснулся сытым, голова раскалывается, а в кармане не хватает " + tempVar + "$!", "bg-danger");
                    person.money = person.money - tempVar;
                    person.health = person.health - 5;
                    moneySelector.html(person.money);
                } else {
                    addLogs("Ярик потерял созание! Проснулся сытым, голова раскалывается, анал слегка побаливает!", "bg-danger");
                    person.health = person.health - 10;
                }
                person.hungry = 0;
            } else {
                person.hungry = person.hungry + (hungryPerTime * 3);
                person.health = person.health - 3;
            }
        } else {
            addLogs("Ярик теряет здоровье от голода!", "bg-warning");
            person.hungry = person.hungry + (hungryPerTime * 2);
            person.health--;
        }
    } else {
        person.hungry = person.hungry + hungryPerTime;
    }
    hungrySelector.html(person.hungry);
    healthSelector.html(person.health);
}, 5000);

// eat
var notFindEat = "Увы, бог милосердия не взглянул в сторону Ярика. Он остается голодным и злым!",
    satietyNone = "Ярик наелся как свинюшка!",
    satietySomthing = "Можно было бы полирнуть пивом :)";
$(".btn-eat").on("click", function() {
    if ( $(this).hasClass("chance")) {
        durationAnim($(this).data("duration"));
        randomNumber(1, 3);
        if ( tempVar == 3 ) {
            personEat($(this).data("succes"), $(this).data("satiefy"));
        } else {
            addLogs(notFindEat, "bg-warning");
        }
    } else {
        tempVar = $(this).data("price");
        if ( person.money >= tempVar ) {
            person.money = person.money - tempVar;
            moneySelector.html(person.money);
            durationAnim($(this).data("duration"));
            personEat($(this).data("succes"), $(this).data("satiety"));
        } else {
            addLogs("Ярик грустно вывернув карманы, пошел дальше по улице обливаясь слюной!", "bg-warning");
        }
    }
});
function personEat(textSucces, satiefyFood) {
    addLogs(textSucces, "bg-success");
    if (person.hungry <= satiefyFood) {
        addLogs(satietyNone, "bg-success");
        person.hungry = 0;
    } else {
        addLogs(satietySomthing, "bg-info");
        person.hungry = person.hungry - satiefyFood;
    }
    hungrySelector.html(person.hungry);
}

// random function
function randomNumber(min, max) {
    tempVar = min + Math.random() * (max - min);
    tempVar = Math.round(tempVar);
    return tempVar;
}

// duration
function durationAnim(dtime) {

}

// add logs
function addLogs(text, color) {
    $("#block-logs").prepend("<p class=" + color + ">" + text + "</p>");
}