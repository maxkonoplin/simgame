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
                <div></div>
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
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Имя</td>
                                        <td><strong id="name"></strong></td>
                                    </tr>
                                    <tr>
                                        <td>Возраст:</td>
                                        <td><strong id="age"></strong> лет</td>
                                    </tr>
                                    <tr>
                                        <td>Деньги:</td>
                                        <td><strong id="money"></strong> $</td>
                                    </tr>
                                    <tr>
                                        <td>Место работы:</td>
                                        <td><strong id="job"></strong></td>
                                    </tr>
                                    <tr>
                                        <td>Доход:</td>
                                        <td><strong id="income"></strong> $ в день</td>
                                    </tr>
                                    <tr>
                                        <td>IQ:</td>
                                        <td><strong id="iq"></strong></td>
                                    </tr>
                                    <tr>
                                        <td>Здоровье</td>
                                        <td><strong id="health"></strong> %</td>
                                    </tr>
                                    <tr>
                                        <td>Голод:</td>
                                        <td><strong id="hungry"></strong> %</td>
                                    </tr>
                                    <tr>
                                        <td>Место жительства:</td>
                                        <td><strong id="home"></strong></td>
                                    </tr>
                                    <tr>
                                        <td>Время в Канаде</td>
                                        <td><strong id="time"></strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Заработано денег:</td>
                                        <td><strong>0</strong> $</td>
                                    </tr>
                                    <tr>
                                        <td>Сколько раз был отжарен:</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Колличество женщин:</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Прочтенно книг:</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Написанно программ:</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Написанно вирусов:</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="eat-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Еда</h3>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-7">
                                        <button
                                            class="btn btn-default btn-block btn-find-eat"
                                            data-toggle="tooltip" data-placement="right" title="Поиск еды в мусорке, что может быть романтичнее? Во всяком случае это бесплатно!"
                                            data-satiety="40" data-duration="20000"
                                            data-success="Ярик нашел лакомство, на близжайщей помойке! Можно не думать о голоде, еще пару часов!">
                                            Искать объедки</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat"
                                                data-toggle="tooltip" data-placement="right" title="Обед в близжайщем образовательном учереждении. Если делать голодное лицо могут положить побольше еды. Стоимость обеда: 3$."
                                                data-satiety="30" data-duration="10000" data-price="3"
                                                data-success="Это не обед в столвой, это просто какая то амброзия!">
                                            Обед в столовой</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat" data-satiety="45" data-duration="12000" data-price="5" data-success="Кебаб отличный, чувствую себя как король!">Заказать кебаб</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat" data-satiety="60" data-duration="15000" data-price="7" data-success="Лучшее пиво на свете, сейчас бы еще в стрипульку!">Пиво с ништяками</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat" data-satiety="70" data-duration="12000" data-price="9" data-success="Я люблю Ригу за ее волбшебные цены и полезную еду!">Обед в Риге</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat" data-satiety="85" data-duration="15000" data-price="15" data-success="Стейк">Съесть стейк</button>
                                        <button class="btn btn-primary btn-block btn-buy-eat" data-satiety="100" data-duration="13000" data-price="25" data-success="Ресторна">Пойти в ресторан</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-7 col-md-offset-5">
                                        <button class="btn btn-success btn-block btn-make-eat" data-satiety="80" data-duration="20000" data-price="5" data-success="Приготовил сам">Приготовить еду</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="job-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Вакансии</h3>
                                <div class="row">
                                    <div class="col-md-7">
                                        <button class="btn btn-primary btn-block btn-job">Дворник</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Разнорабочий</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Установщик окон</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Официант</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Оператор</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Техник</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Менеджер</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">СЕО специалист</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Программист</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Начальник отдела</button>
                                        <button class="btn btn-primary btn-block btn-job disabled">Директор</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h3 class="text-right">Подработка</h3>
                                <div class="row">
                                    <div class="col-md-7 col-md-offset-5">
                                        <button class="btn btn-warning btn-block btn-black-job">Клянчить мелочь</button>
                                        <button class="btn btn-warning btn-block btn-black-job">Расклейка объявлений</button>
                                        <button class="btn btn-warning btn-block btn-black-job disabled">Гоп стоп</button>
                                        <button class="btn btn-warning btn-block btn-black-job disabled">Кража со взломом</button>
                                        <button class="btn btn-warning btn-block btn-black-job disabled">Продажа наркотиков</button>
                                        <button class="btn btn-warning btn-block btn-black-job disabled">Ограбление банка</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="home-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Жилье</h3>
                                <div class="row">
                                    <div class="col-md-7">
                                        <button class="btn btn-primary btn-block btn-home">Палатка за городом</button>
                                        <button class="btn btn-primary btn-block btn-home">Заброшенный дом</button>
                                        <button class="btn btn-primary btn-block btn-home">Аренда трейлера</button>
                                        <button class="btn btn-primary btn-block btn-home">Cъемная комната в гетто</button>
                                        <button class="btn btn-primary btn-block btn-home">Двухкомнтная квартира</button>
                                        <button class="btn btn-primary btn-block btn-home">Пентхаус в центре</button>
                                        <button class="btn btn-primary btn-block btn-home">Вилла и видом на океан</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h3 class="text-right">Улучшения</h3>
                                <div class="row">
                                    <div class="col-md-7 col-md-offset-5">
                                        <button class="btn btn-primary btn-block" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Палатка за городом</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h3>Логи</h3>
                <div id="block-logs">
                    <p class="bg-info">Ярик вышел из аеропорта и вздохнул свежий Канадский воздух. В кармане денег нет,
                    остановится негде, у него есть только четкое понимание того, что он сможет добиться успеха тут!</p>
                </div>
                <audio id="audio" controls loop autoplay preload="metadata" >
                    <source src="sources/music/music.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    </div>
    <div class="modal fade" id="work-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Ярик трудится</h4>
                </div>
                <div class="modal-body">
                    <blockquote>
                        <p id="modal-proverbs"></p>
                        <footer>Ярик</footer>
                    </blockquote>
                </div>
                <div class="modal-footer">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                             aria-valuemin="0" aria-valuemax="100" style="width:0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="//code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/game.js"></script>
</body>
</html>