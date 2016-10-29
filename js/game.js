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
            console.log("Ярик в предобморочном состоянии, накорми его!");
            if ( person.hungry >= 100 ) {
                if ( person.money > 0 ) {
                    tempVar = (person.money * 0.4);
                    console.log("Ярик потерял созание! Проснулся сытым, голова раскалывается, а в кармане не хватает " + tempVar + "$!");
                    person.money = person.money - tempVar;
                    person.health = person.health - 5;
                    moneySelector.html(person.money);
                } else {
                    console.log("Ярик потерял созание! Проснулся сытым, голова раскалывается, анал слегка побаливает!");
                    person.health = person.health - 10;
                }
                person.hungry = 0;
            } else {
                person.hungry = person.hungry + (hungryPerTime * 3);
                person.health = person.health - 3;
            }
        } else {
            console.log("Ярик теряет здоровье от голода!");
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
$(".btn-eat").on("click", function() {
    if ( $(this).hasClass("chance")) {
        durationAnim($(this).data("duration"));
        randomNumber(1, 3);
        if ( tempVar == 3 ) {
            console.log("Ярик нашел лакомство, на близжайщей помойке! Можно не думать о голоде, еще пару часов!");
            tempVar = $(this).data("satiety");
            if (person.hungry <= tempVar) {
                console.log("Ярик наелся как свинюшка!");
                person.hungry = 0;
            } else {
                console.log("Можно было бы полирнуть пивом :)");
                person.hungry = person.hungry - tempVar;
            }
            hungrySelector.html(person.hungry);
        } else {
            console.log("Увы, бог милосердия не взглянул в сторону Ярика. Он остается голодным и злым!")
        }
    } else {
        tempVar = $(this).data("price");
        if ( person.money >= tempVar ) {
            person.money = person.money - tempVar;
            moneySelector.html(person.money);
            durationAnim($(this).data("duration"));
            console.log($(this).data("succes"));
            tempVar = $(this).data("satiety");
            if (person.hungry <= tempVar) {
                console.log("Ярик наелся как свинюшка!");
                person.hungry = 0;
            } else {
                console.log("Можно было бы полирнуть пивом :)");
                person.hungry = person.hungry - tempVar;
            }
            hungrySelector.html(person.hungry);
        } else {
            console.log("Ярик грустно вывернув карманы, пошел дальше по улице обливаясь слюной!");
        }
    }
});

// random function
function randomNumber(min, max) {
    tempVar = min + Math.random() * (max - min)
    tempVar = Math.round(tempVar);
    return tempVar;
}

// duration
function durationAnim(dtime) {

}

// add logs
function addLogs(text, color) {

}