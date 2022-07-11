- [«EventListener](class.eventlistener.md)
- [EventListener::disable »](eventlistener.disable.md)

- [PHP Manual](index.md)
- [EventListener](class.eventlistener.md)
- Створити новий слухач з'єднання, пов'язаний із базою подій

# EventListener::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventListener::\_\_construct — Створити новий слухач з'єднання,
пов'язаний із подієвою базою

### Опис

public **EventListener::\_\_construct**(
[EventBase](class.eventbase.md) `$base` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` ,
int `$flags` ,
int `$backlog`,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`
)

Створює новий слухач з'єднання, пов'язаний із базою подій.

### Список параметрів

`base`
Подієва база.

`cb`
Callback-функція ([callable](language.types.callable.md)), яка
буде викликана при отриманні з'єднання.

`data`
Дані користувача, які будуть передаватися в `cb`.

`flags`
Бітова маска із констант `EventListener::OPT_*`. Дивіться [константи
EventListener](class.eventlistener.md#eventlistener.constants) .

`backlog`
Встановлює максимальну кількість очікуваних з'єднань, якими,
мережним стеком, можна чекати в стані ще не прийнято. Більше
Детально дивіться в документації системної функції `listen`. Якщо
значення `backlog` негативне, Libevent спробує самостійно
вибрати найкраще значення для `backlog`. Якщо дорівнює нулю, Event буде
вважати, що `listen` вже викликана на сокеті (`target`)

`target`
Може бути рядком, ресурсом сокету чи потоком, пов'язаним із сокетом.
Якщо `target` є рядком, то вона розбиратиметься як мережевий
адресу. Вона буде інтерпретуватися як шлях сокету домену UNIX, якщо
буде мати префікс "unix:", наприклад, "unix:/tmp/my.sock".

### Значення, що повертаються

Повертає об'єкт [EventListener](class.eventlistener.md),
що представляє слухач події з'єднання.

### Список змін

| Версія | Опис |
|------------------|------------------------------ ------------|
| PECL event 1.5.0 | Додано підтримку сокетів домену UNIX. |

### Приклади

**Приклад #1 Приклад використання **EventListener::\_\_construct()****

` <?php/* * Простий сервер на основі прослуховувача з'єднань libevent. * * Использование: * 1) В одном окне терминала запустите: * * $ php listener.php 9881 * * 2) В другом окне терминала откройте соединение, например: * * $ nc 127.0.0.1 9881 * * 3) начните печатать. Сервер повинен повторити введення. */class MyListenerConnection {    private $bev, $base; public function __destruct() {         $this->bev->free(); }    public function __construct($base, $fd) {        $this->base u003d $base; $this->bev u003d new EventBufferEvent($base, $fd, EventBufferEvent::OPT_CLOSE_ON_FREE); $this->bev->setCallbacks(array($this, "echoReadCallback"), NULL,            array($this, "echoEventCallback"), NULL); if (!$this->bev->enable(Event::READ)) {            echo "Не удалося включити READ
";            return;        }    }    public function echoReadCallback($bev, $ctx) {        // Скопируйте все данные из входного буфера в выходной буфер        // Вариант #1        $bev->output->addBuffer($bev->input);        / * Вариант #2 */        /*        $input    u003d $bev->getInput();        $output u003d $bev->getOutput();        $output->addBuffer($input);        */    }    public function echoEventCallback($bev, $events, $ctx) {        if ($events & EventBufferEvent::ERROR) {            echo "Помилка bufferevent
";        }        if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)) {            //$bev->free();            $this->__destruct();        }    }}class MyListener {    public $base,        $ listener,        $socket;    private $conn u003d array();    public function __destruct() {        foreach ($this->conn as &$c) $c u003d NULL;    }    public function __construct($port) {        $this->base u003d new EventBase();        if (!$this->base) {            echo "Не удалось открыть событийную базу";            exit(1);        }        // Вариант #1        /*        $this->socket u003d socket_create(AF_INET, SOCK_STREAM, SOL_TCP);        if (!socket_bind($this->socket, '0.0.0.0', $port)) {             echo "Неможливо "
";            exit(1);        }        $this->listener u003d new EventListener($this->base,            array($this, "acceptConnCallback"), $this->base,            EventListener::OPT_CLOSE_ON_FREE | EventListener::OPT_REUSEABLE,            - 1, $this->socket);         */        // Вариант #2         $this->listener u003d new EventListener($this->base,             array($this, "acceptConnCallback"), $this->base,             EventListener:: OPT_CLOSE_ON_FREE | EventListener::OPT_REUSEABLE, -1,             "0.0.0.0:$port");        if (!$this->listener) {            echo "Не удалось создать слушателя";            exit(1);        }        $this->listener- >setErrorCallback(array($this, "accept_error_cb"));    }    public function dispatch() {        $this->base->dispatch();    }    // Этот callback вызывается, когда есть данные для чтения на $bev    public function acceptConnCallback ($listener, $fd, $address, $ctx) {         // Ми отримали нове з'єднання! Створіть для цього все необхідне. */       $baseu003du003d$this->base; $this->conn[] u003d new MyListenerConnection($base, $fd); }    public function accept_error_cb($listener, $ctx) {        $base u003d $this->base; fprintf(STDERR, "Отримав помилку %d (%s) на слухачі."            .""Вимкнення.
",            EventUtil::getLastSocketErrno(),            EventUtil::getLastSocketError());        $base->exit(NULL);    }}$port u003d 9808;if ($argc > 1) {    $port u003d (int) $argv[ 1];}if($port <u003d 0 || $port > 65535) {    exit("Invalid port");}$l u003d new MyListener($port);$l->dispatch();?> `
