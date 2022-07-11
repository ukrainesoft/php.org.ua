- [«EventBufferEvent::connect](eventbufferevent.connect.md)
- [EventBufferEvent::\_\_construct »](eventbufferevent.construct.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Підключається на ім'я хоста з можливістю асинхронного дозволу
DNS

# EventBufferEvent::connectHost

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::connectHost — Підключається на ім'я хоста з
можливістю асинхронного дозволу DNS

### Опис

public **EventBufferEvent::connectHost**(
[EventDnsBase](class.eventdnsbase.md) `$dns_base` ,
string `$hostname`,
int `$port` ,
int `$family` u003d EventUtil::AF_UNSPEC
): bool

Дозволяє ім'я хоста DNS-імені, шукаючи адреси типу `family` (константи
`EventUtil::AF_*`). Якщо дозвіл імені не вдалося зробити,
викликає callback-функцію події з подією помилки. У разі успішного
виконання робить спробу підключення так само, як
[EventBufferEvent::connect()](eventbufferevent.connect.md).

Параметр `dns_base` не обов'язковий. Він може мати значення
**`null`** або посилатися на об'єкт, створений за допомогою
[EventDnsBase::\_\_construct()](eventdnsbase.construct.md). Для
асинхронного дозволу імені хоста необхідно передати дійсний
базовий ресурс DNS-події В іншому випадку дозвіл імені хоста
буде заблоковано.

> **Примітка**:
>
> [EventDnsBase](class.eventdnsbase.md) доступний, тільки якщо `Event`
> налаштований з **--with-event-extra** (бібліотека `event_extra`,
> *підтримка функцій протоколу libevent, включаючи HTTP, DNS та RPC*).

> **Примітка**:
>
> **EventBufferEvent::connectHost()** вимагає `libevent-2.0.3-alpha` або
> вище.

### Список параметрів

`dns_base`
Об'єкт [EventDnsBase](class.eventdnsbase.md) у випадку, якщо потрібно DNS
дозволити асинхронно. **`null`** інакше.

`hostname`
Ім'я хоста для підключення. Формати, що розпізнаються:

``` parameterscode
www.example.com (hostname)
1.2.3.4 (ipv4address)
::1 (ipv6address)
[::1] ([ipv6address])
````

`port`
Номер порту.

`family`
Сімейство адрес. **`EventUtil::AF_UNSPEC`**, **`EventUtil::AF_INET`**
або **`EventUtil::AF_INET6`**. Зверніться до списку [констант
EventUtil](class.eventutil.md#eventutil.constants).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 **Приклад використання EventBufferEvent::connectHost()****

` <?php/* Callback-функція читання */function readcb($bev, $base) {    //$input u003d $bev->input; //$bev->getInput(); //$pos u003d $input->search("TTP"); $pos u003d $bev->input->search("TTP"); while(($n u003d $bev->input->remove($buf, 1024)) > 0) {        echo $buf; }}/* Callback-функція події */function eventcb($bev, $events, $base) {    if ($events & EventBufferEvent::CONNECTED) {                        
";    } elseif ($events & (EventBufferEvent::ERROR | EventBufferEvent::EOF)) {        if ($events & EventBufferEvent::ERROR) {            echo "Ошибка DNS: ", $bev->getDnsErrorString(), PHP_EOL;        } echo "Закриття
";        $base->exit();        exit("Виконано
");    }}$base u003d new EventBase();$dns_base u003d new EventDnsBase($base, TRUE); // Використання асинхронного дозволу DNSif |   
");}$bev u003d new EventBufferEvent($base, /* использование внутреннего сокета */ NULL,    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS,    "readcb", /* writecb */ NULL, "eventcb", $base) ;if (!$bev) {   exit("Не удалося створити сокет bufferevent
");}//$bev->setCallbacks("readcb", /* writecb */ NULL, "eventcb", $base);$bev->enable(Event::READ | Event::WRITE);$output u003d $bev->output; //$bev->getOutput();if (!$output->add(   "GET {$argv[2]} HTTP/1.0
".    "Host: {$argv[1]}
".    "Connection: Close

")) {    exit("Не удалося додати запит у вихідний буфер
");}if (!$bev->connectHost($dns_base, $argv[1], 80, EventUtil::AF_UNSPEC)) {    exit("Не удалося підключитися до хосту {$argv[1]}
");}$base->dispatch();?> `

Результатом виконання цього прикладу буде щось подібне:

Connected.
HTTP/1.0 301 Moved Permanently
Location: http://www.google.co.uk/
Content-Type: text/html; charsetu003dUTF-8
Дата: Sat, 09 Mar 2013 12:21:19 GMT
Expires: Mon, 08 Apr 2013 12:21:19 GMT
Cache-Control: public, max-ageu003d2592000
Server: gws
Content-Length: 221
X-XSS-Protection: 1; modeu003dblock
X-Frame-Options: SAMEORIGIN

<HTML><HEAD><meta http-equivu003d"content-type" contentu003d"text/html;charsetu003dutf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREFu003d"http://www.google.co.uk/">here</A>.
</BODY></HTML>
Closing
Done

### Дивіться також

- [EventBufferEvent::connect()](eventbufferevent.connect.md) -
Підключає файловий дескриптор події буфера до вказаної адреси
або сокету UNIX
