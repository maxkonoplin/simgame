<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Как подняться в Канаде</title>
</head>
<body>
    <h1>Приключения Ярика в Канаде</h1>
    <div>
        <h3>Информация о персонаже</h3>
        <p>Имя: <strong id="name"></strong></p>
        <p>Возраст: <strong id="age"></strong></p>
        <p>Деньги: <strong id="money"></strong> $</p>
        <p>Место работы: <strong id="job"></strong></p>
        <p>Доход: <strong id="income"></strong> $ в день</p>
        <p>IQ: <strong id="iq"></strong></p>
        <p>Здоровье: <strong id="health"></strong> %</p>
        <p>Голод: <strong id="hungry"></strong> %</p>
        <p>Место жительства: <strong id="home"></strong></p>
        <p>Время в Канаде: <strong id="time"></strong></p>
    </div>
    <div>
        <h3>Вакансии (нужно купить газету, если нет компа или смартфона)</h3>
        <button class="btn-job">Дворник</button>
        <button class="btn-job" disabled>Разнорабочий</button>
        <button class="btn-job" disabled>Установщик окон</button>
        <button class="btn-job" disabled>Официант</button>
        <button class="btn-job" disabled>Оператор</button>
        <button class="btn-job" disabled>Техник</button>
        <button class="btn-job" disabled>Менеджер</button>
        <button class="btn-job" disabled>СЕО специалист</button>
        <button class="btn-job" disabled>Программист</button>
        <button class="btn-job" disabled>Начальник отдела</button>
        <button class="btn-job" disabled>Директор</button>
    </div>
    <div>
        <h3>Подработка </h3>
        <button>Клянчить мелочь</button>
        <button>Расклейка объявлений</button>
        <button disabled>Гоп стоп</button>
        <button disabled>Кража со взломом</button>
        <button disabled>Продажа наркотиков</button>
        <button disabled>Ограбление банка</button>
    </div>
    <div>
        <h3>Жилье (нужно купить газету, если нет компа или смартфона)</h3>
        <button>Палатка за городом</button>
        <button>Домик лесника</button>
        <button>Аренда трейлера</button>
        <button>Cъемная комната в гетто</button>
        <button>Двухкомнтная в спальном раене</button>
        <button>Пентхаус в центре</button>
        <button>Дом с охотничими угодьями и видом на океан</button>
    </div>
    <div>
        <h3>Еда</h3>
        <button class="btn-eat chance" data-satiety="12" data-duration="20000">Искать объедки</button>
        <button class="btn-eat" data-satiety="30" data-duration="10000" data-price="3">Обед в столовой</button>
        <button class="btn-eat" data-satiety="45" data-duration="12000" data-price="5">Заказать кебаб</button>
        <button class="btn-eat" data-satiety="60" data-duration="15000" data-price="7">Пиво с ништяками</button>
        <button class="btn-eat" data-satiety="70" data-duration="12000" data-price="9">Обед в Риге</button>
        <button class="btn-eat" data-satiety="85" data-duration="15000" data-price="15">Съесть стейк</button>
        <button class="btn-eat" data-satiety="100" data-duration="13000" data-price="25">Пойти в ресторан</button>
    </div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="js/game.js"></script>
</body>
</html>