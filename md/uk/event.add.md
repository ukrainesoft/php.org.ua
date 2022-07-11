- [«Event](class.event.md)
- [Event::addSignal »](event.addsignal.md)

- [PHP Manual](index.md)
- [Event](class.event.md)
- Перевести подію у стан очікування

# Event::add

(PECL event \>u003d 1.2.6-beta)

Event::add — Перевести подію у стан очікування

### Опис

public **Event::add**( float `$timeout` u003d ?): bool

Переводить подію у стан очікування. Не очікуючі події ніколи не
спрацюють та не викличуть callback-функцію. У поєднанні з
[Event::del()](event.del.md), подія може бути перезаплановано
користувачем у будь-який час.

Якщо метод **Event::add()** викликаний для очікуваної події, libevent
залишить його в стані очікування і перезапланує його відповідно до
заданим часом очікування (якщо воно задано). Якщо час очікування не
задано, то **Event::add()** не матиме жодного ефекту.

### Список параметрів

`timeout`
Час очікування за секунди.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання сигналу користувача**

` <?php/*Запустіть в вікні терміналу:$ php examples/signal.phpУ іншому окні термінала дізнайтеся pid і надсилайте SIGTERM, наприклад:$ ps aux | grep exampruslan    3976  0.2  0.0 139896 11256 pts/1    S+   10:25   0:00 php examples/signal.phpruslan    3978  0.0  0.0   9572   864 pts/2    S+   10:26   0:00 grep --coloru003dauto examp$ kill -TERM 3976В першому окне терміналу ви мають побачити наступне: Зловлений сигнал 15*/class MyEventSignal {    private $base, $ev; public function __construct($base) {        $this->base u003d $base; $this->ev u003d Event::signal($base, SIGTERM, array($this, 'eventSighandler')); $this->ev->add(); }    public function eventSighandler($no, $c) {        echo "Зловлений сигнал $no
";        $this->base->exit();    }}$baseu003du003dnew EventBase();$c   u003d new MyEventSignal($base);$base->loop()

Результатом виконання цього прикладу буде щось подібне:

Спійманий сигнал 15

**Приклад #2 Додавання таймера**

` <?php$base u003d new EventBase();$n u003d 2;$e u003d Event::timer($base, function($n) use (&$e) {    echo "Пройшло секунд: $n
";   $e->delTimer();}, $n);$e->add($n);$base->loop();?> `

Результатом виконання цього прикладу буде щось подібне:

Пройшло секунд: 2

### Дивіться також

- **Event::add()**
- [Event::del()](event.del.md) - Перевести подію на пасивну
стан
- [Event::signal()](event.signal.md) - Створити об'єкт події
сигналу
- [Event::timer()](event.timer.md) - Створити об'єкт події таймера
