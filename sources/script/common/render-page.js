let nameSelector = $('#name'),
    ageSelector = $('#age'),
    moneySelector = $('#money'),
    workSelector = $('#work'),
    incomeSelector = $('#income'),
    intellectSelector = $('#iq'),
    healthSelector = $('#health'),
    hungerSelector = $('#hunger'),
    homeSelector = $('#home'),
    timeSelector = $('#time');


export default function renderPage(character) {
    let range = new Date();
    range.setTime((Date.now() - character.start) * 3600);
    nameSelector.text(character.name);
    ageSelector.text(character.age);
    moneySelector.text(character.cash);
    workSelector.text((character.workplace) ? character.workplace.name : 'Безработный');
    incomeSelector.text(character.income.incomeCash);
    intellectSelector.text(character.IQ);
    healthSelector.text(Math.floor(character.health * 100));
    hungerSelector.text(Math.floor(character.hunger * 100));
    homeSelector.text((character.location) ? character.location.name : "Подворотня");
    timeSelector.text(`${range.getFullYear() - 1970} лет, ${range.getMonth()} месяцев, ${range.getDate() - 1} дней, ${range.getHours()} часов`);
}
