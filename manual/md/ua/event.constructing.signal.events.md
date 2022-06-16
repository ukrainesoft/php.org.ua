- [« Callback-функції](event.callbacks.md)
- [Event »](class.event.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Створення подій для сигналів

# Створення подій для сигналів

Event може відстежувати сигнали у стилі POSIX. Для створення обробника
для сигналу використовуйте конструктор
[Event::\_\_construct()](event.construct.md) з прапором
**`Event::SIGNAL`** або фабричний метод
[Event::signal()](event.signal.md).

**Приклад #1 Обробка сигналу `SIGTERM`**

`<?php/*Запускайте в вікні терміналу:$ php examples/signal.phpУ іншому термінальному вікні відшукайте цей процесс і пошліть йому сигнал SIGTERM:$ ps aux | grep exampruslan    3976  0.2  0.0 139896 11256 pts/1    S+   10:25   0:00 php examples/signal.phpruslan    3978  0.0  0.0   9572   864 pts/2    S+   10:26   0:00 grep --coloru003dauto examp$ kill -TERM 3976В першому терміналі ви побачите наступне: Пойманий сигнал 15*/class MyEventSignal {    private $base, $ev; public function __construct($base) {        $this->base u003d $base; $this->ev u003d Event::signal($base, SIGTERM, array($this, 'eventSighandler')); $this->ev->add(); }    public function eventSighandler($no, $c) {        echo "Пійман сигнал $no
";        $this->base->exit();    }}$baseu003du003dnew EventBase();$c   u003d new MyEventSignal($base);$base->loop()

Зверніть увагу, що функції зворотного дзвінка запускаються всередині
подієвого циклу після отримання сигналу, так що для них цілком
безпечно викликати функції, які не слід запускати зі звичайних
обробників сигналів POSIX

Також почитайте [» Fast portable non-blocking network programming with
Libevent, Constructing Signal
Events](http://www.wangafu.net/~nickm/libevent-book/Ref4_event.md#_constructing_signal_events)
.
