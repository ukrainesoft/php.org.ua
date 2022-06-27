- [«EventBufferEvent::close](eventbufferevent.close.md)
- [EventBufferEvent::connectHost »](eventbufferevent.connecthost.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Підключає файловий дескриптор події буфера до вказаної адреси
або сокету UNIX

# EventBufferEvent::connect

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::connect — Підключає файловий дескриптор події
буфера до вказаної адреси або сокету UNIX

### Опис

public **EventBufferEvent::connect**( string `$addr` ): bool

Підключає файловий дескриптор події буфера до вказаної адреси
(опціонально з портом) чи сокету UNIX.

Якщо сокет не призначений для події буфера, функція виділяє новий сокет і
робить його внутрішнім неблокуючим.

Щоб дозволити DNS-імена (асинхронно), використовуйте метод
[EventBufferEvent::connectHost()](eventbufferevent.connecthost.md).

### Список параметрів

`addr`
Повинна містити IP-адресу з необов'язковим номером порту або шлях до
сокет домену UNIX. Допустимі формати:

``` parameterscode
[IPv6Address]:port
[IPv6Address]
IPv6Address
IPv4Address:port
IPv4Address
unix:path
````

Майте на увазі, що префікс "unix:" в даний час не чутливий до
регістру.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **EventBufferEvent::connect()****

` <?php/* * 1. Підключення к 127.0.0.1 і порту 80 * by means of EventBufferEvent::connect(). * * 2. Запит /index.cphp з допомогою HTTP/1.0 * використовуючи вихідний буфер. * * 3. Асинхронно прочитайте відповідь і роздрукуйте його стандартним висновком. *//* Читання callback-функції */function readcb($bev, $base) {   $input u003d $bev->getInput(); while(($n u003d $input->remove($buf, 1024)) > 0) {       echo $buf; }}/* Подія callback-функції */function eventcb($bev, $events, $base) {    if ($events & EventBufferEvent::CONNECTED) {                         
";    } elseif ($events & (EventBufferEvent::ERROR | EventBufferEvent::EOF)) {        if ($events & EventBufferEvent::ERROR) {            echo "DNS ошибка: ", $bev->getDnsErrorString(), PHP_EOL;        } echo "Закриття
";        $base->exit();        exit("Завершено
");    }}$base u003d new EventBase();echo "крок 1
";$bev u003d new EventBufferEvent($base, /* використовуйте внутрішній сокет */ NULL,   EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALL               ¦¦¦
");}echo "крок 2
";$bev->setCallbacks("readcb", /* writecb */ NULL, "eventcb", $base);$bev->enable(Event::READ| Event::WRITE);echo "крок 3
";/* Послати запит */$output u003d $bev->getOutput();if (!$output->add(    "GET /index.cphp HTTP/1.0
".    "Connection: Close

")) {    exit("Не удалося додати запит у вихідний буфер
");}/* Підключення до хосту синхронно. * Ми знаємо IP, і нам не потрібно дозволяти DNS. */if (!$bev->connect("127.0.0.1:80")          до хосту
");}/* Відправка очікуючих подій */$base->dispatch(); `

Результатом виконання цього прикладу буде щось подібне:

step 1
step 2
step 3
Connected.
HTTP/1.1 200 OK
Server: nginx/1.2.6
Дата: Sat, 09 Mar 2013 10:06:58 GMT
Content-Type: text/html; charsetu003dutf-8
Connection: close
X-Powered-By: PHP/5.4.11--pl2-gentoo

sdfsdfsf
Closing
Done

**Приклад #2 Підключіться до сокету домену UNIX, який імовірно
обслуговується сервером, прочитайте відповідь сервера та виведіть його на
консоль**

`` <?phpclass MyUnixSocketClient {    private $base, $bev; function __construct($base, $sock_path) {        $this->base u003d $base; $this->bev u003d new EventBufferEvent($base, NULL, EventBufferEvent::OPT_CLOSE_ON_FREE,            array ($this, "read_cb"), | if (!$this->bev->connect("unix:$sock_path")) {            trigger_error("Failed to connect to socket `$sock_path'", E_US; }        $this->bev->enable(Event::READ); }   function __destruct() {        if ($this->bev) {            $this->bev->free(); $this->bevu003du003dNULL; }    }   function dispatch() {        $this->base->dispatch(); }   function read_cb($bev, $unused) {        $in u003d $bev->input; printf("Отримано%ld'байтів
", $in->length);         printf("----- дані ----
");         printf("%ld: %s
", (int) $in->length, $in->pullup(-1));        $this->bev->free();       $this->bev u003d NULL;    NULL);    }   function event_cb($bev, $events, $unused) {        if ($events & EventBufferEvent::ERROR) {           
";        }        if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)) {            $bev->free();            $bev u003d NULL;        } elseif ($events & EventBufferEvent::CONNECTED) {            $bev-> output->add("test
“);
");}$sock_path u003d $argv[1];$base u003d new EventBase();$cl u003d new MyUnixSocketClient($base, $sock_path);$cl->dispatch();?> ``

Результатом виконання цього прикладу буде щось подібне:

Отримано 5 байтів
----- дані ----
5: test

### Дивіться також

- [EventBufferEvent::connectHost()](eventbufferevent.connecthost.md) -
Підключається на ім'я хоста з можливістю асинхронного дозволу
DNS
