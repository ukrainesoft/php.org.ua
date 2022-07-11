- [«EventBufferEvent::getInput](eventbufferevent.getinput.md)
- [EventBufferEvent::read »](eventbufferevent.read.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає базовий вихідний буфер, пов'язаний із поточним буферним
подією

# EventBufferEvent::getOutput

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::getOutput — Повертає базовий вихідний буфер,
пов'язаний з поточною буферною подією

### Опис

public **EventBufferEvent::getOutput**():
[EventBuffer](class.eventbuffer.md)

Повертає базовий вихідний буфер, пов'язаний із поточним буферним
подією. Вихідний буфер є сховищем даних для запису.

Зверніть увагу, що є також `output` властивість класу
[EventBufferEvent](class.eventbufferevent.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає екземпляр [EventBuffer](class.eventbuffer.md) вихідного
буфера, пов'язаного із поточною буферною подією.

### Приклади

**Приклад #1 Приклад використання **EventBufferEvent::getOutput()****

` <?php$base u003d new EventBase();$dns_base u003d new EventDnsBase($base, TRUE); // Використовувати асинхронне дозвіл DNSif (!$dns_base) {    exit("Не удалося ініціалізувати базу DNS
");}$bev u003d new EventBufferEvent($base, /* использовать внутренний сокет */ NULL,    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS,    "readcb", /* writecb */ NULL, "eventcb", $base) ;if (!$bev) {   exit("Не удалося створити сокет bufferevent
");}$bev->enable(Event::READ | Event::WRITE);$output u003d $bev->getOutput();if (!$output->add(    "GET {$argv[2]} HTTP/1.0
".    "Host: {$argv[1]}
".    "Connection: Close

")) {    exit("Не удалося додати запит у вихідний буфер
");}/* ... */?> `

### Дивіться також

- [EventBufferEvent::getInput()](eventbufferevent.getinput.md) -
Повертає базовий вхідний буфер, пов'язаний із поточним буферним
подією
