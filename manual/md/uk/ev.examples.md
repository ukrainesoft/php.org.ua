- [«Зумовлені константи](ev.global.constants.md)
- [Спостерігачі »](ev.watchers.md)

- [PHP Manual](index.md)
- [Ev] (book.ev.md)
- Приклади

# Приклади

**Приклад #1 Прості таймери**

` <?php// Створюємо і запускаємо таймер на 2 секунди$w1 u003d new EvTimer(2, 0, function () {    echo "2 секунди пройшли
";});//Створюємо і запускаємо таймер, спрацює через 2 секунди, після чого буде спрацьовувати// раз в секунду, поки ви його вручну $ echo "викликається раз в секунду, перше спрацьовування через 2 секунди
";    echo "итерация u003d ", Ev::iteration(), PHP_EOL;    // Останавливаем наблюдателя через 5 итераций    Ev::iteration() u003du003d 5 and $w->stop();    // Остановливаем наблюдателя, если следующий вызов приведе до десятої (або більше) ітерації    Ev::iteration() >u003d 10 and $w->stop();});// Створюємо зупинений таймер. Він буде не createStopped(10, 5, function($w) {   echo "Callback-функція таймера, створеного зупиненим
";    // Зупиняємо спостерігача через 2 ітерації    Ev::iteration() >u003d 2 and $w->stop();});// Запускаємоподіївийцикл,  ()Ev::run();// Запускаємо і дивимось, як він працює$w_stopped->start();echo "Запускаємо одну ітерацію
";Ev::run(Ev::RUN_ONCE);echo "Перезапускаємо другого спостерігача і намагаємося відловити те ж події, але не блокуємо
";$w2->again();Ev::run(Ev::RUN_NOWAIT);$w u003d new EvTimer(10, 0, function() {});echo "Запускаємо блокуючий цикл
";Ev::run();echo "END
";?> `

Результатом виконання цього прикладу буде щось подібне:

2 секунди пройшло
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 1
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 2
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 3
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 4
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 5
Запускаємо одну ітерацію
Функція зворотного виклику таймера, створеного зупиненим
Перезапускаємо другого спостерігача і намагаємось відловити ті самі події, але не блокуємо
Запускаємо блокуючий цикл
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 8
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 9
викликається раз на секунду, перше спрацювання через 2 секунди
ітерація u003d 10
END

**Приклад #2 Періодичний таймер. Спрацьовує раз на 10.5 секунд**

` <?php$w u003d new EvPeriodic(0., 10.5, NULL, function ($w, $revents) {    echo time(), PHP_EOL;});Ev::run();?> `

**Приклад #3 Періодичний таймер. Використання callback-функції для
перезавдання інтервалу**

`<?php// Спрацьовує раз в 10.5 секундfunction reschedule_cb ($watcher, $now) {    return $now + (10.5. - fmod($now, 10 ) "reschedule_cb", function ($w, $revents) {   echo time(), PHP_EOL;});Ev::run();?> `

**Приклад #4 Періодичний таймер. Спрацьовує кожні 10.5 секунд,
з поточного моменту**

`<?php// Спрацьовує раз в 10.5 секунд починаючи з поточного моменту$w u003d new EvPeriodic(fmod(Ev::now(), 10.5), 10.5, NULL, fun     , PHP_EOL;});Ev::run();?> `

**Приклад #5 Чекаємо, поки STDIN не стане читаним**

` <?php// Чекаємо, поки STDIN не стане читаним$w u003d new EvIo(STDIN, Ev::READ, function ($watcher, $revents) {    echo 
";});Ev::run(Ev::RUN_ONCE);?> `

**Приклад #6 Використовуємо асинхронне введення/виведення для доступу до сокету**

`` <?php/* Використовуємо асинхронний введення/виведення для доступу до сокету */// Модуль `sockets' продовжить логувати попередження// для EINPROGRESS, EGAIN/EW або EWOULDBLOCK*/11, /*EINPROGRESS*/115);// Отримуємо порт для сервісу WWW$service_port u003d getservbyname('www', 'tcp');// Отримуємо IP-адрес .co.uk');// Создаём сокет TCP/IP$socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);if ($socket u003du003du003d FALSE) {    echo "Ошибка при вызове socket_create(): причина: "        .socket_strerror (socket_last_error()) . "
";}// Устанавливаем флаг O_NONBLOCKsocket_set_nonblock($socket);// Прерываем по превышению времени ожидания$timeout_watcher u003d new EvTimer(10.0, 0., function () use ($socket) {    socket_close($socket);    Ev::stop (Ev::BREAK_ALL);});//Посилаємо запит HEAD коли сокет доступний для запису$write_watcher u003d new EvIo($socket, Ev::WRITE, function ($$ {    // Зупиняємо спостерігача $timeout_watcher    $timeout_watcher->stop();    // Зупиняємо спостерігача $write_watcher >   $$  
";    $in .u003d "Host: google.co.uk
";    $in .u003d "Connection: Close

";    if (!socket_write($socket, $in, strlen($in))) {        trigger_error("Ошибка записи $in в сокет", E_USER_ERROR);    }    $read_watcher u003d new EvIo($socket, Ev::READ, function ($w, $re)        use ($socket, $e_nonblocking)    {        // Сокет доступен для чтения. Читаем 20 байт в неблокирующем режиме        $ret u003d socket_recv($socket, $out, 20, MSG_DONTWAIT);        if ($ret ) {            echo $out;        } elseif ($ret u003du003du003d 0) {            // Все прочтено            $w->stop();            socket_close($socket);            return;        }        // Ловим EINPROGRESS, EAGAIN или EWOULDBLOCK        if (in_array( socket_last_error(), $e_nonblocking)) {            return;        }        $w->stop();        socket_close($socket);    });    Ev::run();});$result u003d socket_connect($socket, $address, $service_port);Ev::run();?> ``

Результатом виконання цього прикладу буде щось подібне:

HTTP/1.1 301 Moved Permanently
Location: http://www.google.co.uk/
Content-Type: text/html; charsetu003dUTF-8
Date: Sun, 23 Dec 2012 16:08:27 GMT
Expires: Tue, 22 Jan 2013 16:08:27 GMT
Cache-Control: public, max-ageu003d2592000
Server: gws
Content-Length: 221
X-XSS-Protection: 1; modeu003dblock
X-Frame-Options: SAMEORIGIN
Connection: close

**Приклад #7 Вбудовуємо один цикл в інший**

`<?php/** Намагаємося отримати вбудований цикл і вбудувати його в подійний цикл за мовчанням.* Якщо неможливо - використовуємо цикл за замовчуванням. Цикл за мовчанням* зберігається в $loop_hi, а вбудований в $loop_lo (який буде рівний $loop_hi в випадку* якщо ми не будемо використовувати              ¦¦¦¦¦¦ //cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9*/$loop_hi u003d EvLoop::defaultLoop();$loop_lo u003d NULL;$embed   u003d NULL;/** Дивимось, можна  (Значення 0 означає автовизначення)*/$loop_lo u003d Ev::embeddableBackends() & Ev::recommendedBackends()    ? new EvLoop(Ev::embeddableBackends() & Ev::recommendedBackends())   : 0;if ($loop_lo) {    $embed u003d new EvEmbed($ ;}?> `

**Приклад #8 Вбудовування циклу, створеного за допомогою kqueue в цикл
замовчуванням**

`<?php/** Перевіряємо, що бекенд kqueue доступний, але не рекомендований, і створюємо його для* роботи з сокетами (які зазвичай працюють с будь? (Можна опціонально* використовувати прапор EVFLAG_NOENV)** Приклад взято з* http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9*/$loop       :defaultLoop();$socket_loopu003du003dNULL;$embed       u003d NULL;if (Ev::supportedBackends() & ~Ev::recommendedBackends() BACKEND_KQUEUE))) {        $embed u003d new EvEmbed($loop); }}if (!$socket_loop) {    $socket_loop u003d $loop;}// тепер  використовуємо $socket_loop для всіх сокетів, а $loop для всього остального?>

**Приклад #9 Перехоплюємо сигнал SIGTERM**

` <?php$w u003d new EvSignal(SIGTERM, function ($watcher) {   echo "Отриманий сигнал SIGTERM
";   $watcher->stop();});Ev::run();?> `

**Приклад #10 Відслідковуємо зміну /var/log/messages**

`` <?php// Використовуємо інтервал опитування в 10 секунд$w u003d new EvStat("/var/log/messages", 8, function ($w) {    echo "/var/log/
";   $attr u003d $w->attr();   if ($attr['nlink']) {         printf("Поточний розмір: %ld
", $attr['size']);         printf("Поточне значення atime: %ld
", $attr['atime']);         printf("Поточне значення mtime: %ld
", $attr['mtime']);    } else {        fprintf(STDERR, "файл `messages` відсутня!");         $w->| | `

**Приклад #11 Відстежуємо зміну /var/log/messages. Уникаємо пропуску
оновлень за допомогою затримки за одну секунду**

`<?php$timer u003d EvTimer::createStopped(0., 1.02, function ($w) {    $w->stop();   $stat u003d $w->daта; з| з| "Поточний розмір: %ld
", $stat->attr()['size']);});$stat u003d new EvStat("/var/log/messages", 0., function () use ($timer) {    // Скидаємо спостерігача $timer   $timer->again();});$timer->data u003d $stat;Ev::run();?> `

**Приклад #12 Відслідковуємо зміни статусу процесу**

` <?php$pid u003d pcntl_fork();if ($pid u003du003d -1) {   fprintf(STDERR, "pcntl_fork failed
");} elseif ($pid) {    $w u003d new EvChild($pid, FALSE, function ($w, $revents) {         $w->stop()|
", $w->rpid, $w->rstatus);    });    Ev::run();    // Защита от зомби процессов    pcntl_wait($status);} else {    // Порождённый потомок    exit(2);} ?> `
