<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Как подняться в Канаде</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Приключения Ярика в Канаде</h1>
                <p class="lead">Приключения бедного Ярика в северной и холодной стране Канаде. Сможет ли Ярик подняться на самый верх и стать
                    местным селебрети или умрет замерзнув в холодном переулке. Все зависит только от вас!</p>
            </div>
            <div class="col-md-8">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#info-tab" aria-controls="info-tab" role="tab" data-toggle="tab">Информация</a></li>
                    <li role="presentation"><a href="#eat-tab" aria-controls="eat-tab" role="tab" data-toggle="tab">Питание</a></li>
                    <li role="presentation"><a href="#job-tab" aria-controls="job-tab" role="tab" data-toggle="tab">Работа</a></li>
                    <li role="presentation"><a href="#home-tab" aria-controls="home-tab" role="tab" data-toggle="tab">Жилье</a></li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="info-tab">
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
                    <div role="tabpanel" class="tab-pane" id="eat-tab">
                        <h3>Еда</h3>
                        <button class="btn-eat chance" data-satiety="40" data-duration="20000" data-succes="Ярик нашел лакомство, на близжайщей помойке! Можно не думать о голоде, еще пару часов!">Искать объедки</button>
                        <button class="btn-eat" data-satiety="30" data-duration="10000" data-price="3" data-succes="Это не обед в столвой, это просто какая то амброзия!">Обед в столовой</button>
                        <button class="btn-eat" data-satiety="45" data-duration="12000" data-price="5" data-succes="Кебаб отличный, чувствую себя как король!">Заказать кебаб</button>
                        <button class="btn-eat" data-satiety="60" data-duration="15000" data-price="7" data-succes="Лучшее пиво на свете, сейчас бы еще в стрипульку!">Пиво с ништяками</button>
                        <button class="btn-eat" data-satiety="70" data-duration="12000" data-price="9" data-succes="Я люблю Ригу за ее волбшебные цены и полезную еду!">Обед в Риге</button>
                        <button class="btn-eat" data-satiety="85" data-duration="15000" data-price="15" data-succes="Стейк">Съесть стейк</button>
                        <button class="btn-eat" data-satiety="100" data-duration="13000" data-price="25" data-succes="Ресторна">Пойти в ресторан</button>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="job-tab">
                        <div class="row">
                            <div class="col-md-6">
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
                            <div class="col-md-6">
                                <h3>Подработка </h3>
                                <button>Клянчить мелочь</button>
                                <button>Расклейка объявлений</button>
                                <button disabled>Гоп стоп</button>
                                <button disabled>Кража со взломом</button>
                                <button disabled>Продажа наркотиков</button>
                                <button disabled>Ограбление банка</button>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="home-tab">
                        <h3>Жилье (нужно купить газету, если нет компа или смартфона)</h3>
                        <button>Палатка за городом</button>
                        <button>Домик лесника</button>
                        <button>Аренда трейлера</button>
                        <button>Cъемная комната в гетто</button>
                        <button>Двухкомнтная в спальном раене</button>
                        <button>Пентхаус в центре</button>
                        <button>Дом с охотничими угодьями и видом на океан</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h3>Логи</h3>
                <div id="block-logs">
                    <p class="bg-primary">Ярик вышел из аеропорта и вздохнул свежий Канадский воздух. В кармане денег нет,
                    остановится негде, у него есть только четкое понимание того, что он сможет добиться успеха тут!</p>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70"
                         aria-valuemin="0" aria-valuemax="100" style="width:70%">
                        <span class="sr-only">70% Complete</span>
                    </div>
                </div>
                <button onclick="addLogs()" style="margin-top: 50px;">TEST BUTTON (I DON'T THINK WHAT MAKE AT THIS TIME)</button>
            </div>
        </div>
    </div>
    <script src="//code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/game.js"></script>
</body>
</html>