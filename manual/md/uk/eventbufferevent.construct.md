- [« EventBufferEvent::connectHost](eventbufferevent.connecthost.md)
- [EventBufferEvent::createPair »](eventbufferevent.createpair.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Створює об'єкт EventBufferEvent

# EventBufferEvent::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::\_\_construct — Створює об'єкт EventBufferEvent

### Опис

public **EventBufferEvent::\_\_construct**(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` u003d **`null`** ,
int `$options` u003d 0 ,
[callable](language.types.callable.md) `$readcb` u003d **`null`** ,
[callable](language.types.callable.md) `$writecb` u003d **`null`**
,
[callable](language.types.callable.md) `$eventcb` u003d **`null`**
,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`**
)

Створює подію буфера для сокету, потоку чи файлового дескриптора.
Передача **`null`** у `socket` означає, що сокет має бути створений
пізніше, наприклад, за допомогою
[EventBufferEvent::connect()](eventbufferevent.connect.md).

### Список параметрів

`base`
База події, яка має бути пов'язана з новою буферною подією.

`socket`
Може бути створений як потоку (не обов'язково за допомогою модуля
`sockets`).

`options`
Одна з [констант
EventBufferEvent::OPT\_\*](class.eventbufferevent.md#eventbufferevent.constants)
або **`0`**.

`readcb`
Callback-функція читання. Зверніться до розділу [Про функції callback
подійного буфера](eventbufferevent.about.callbacks.md).

`writecb`
Callback-функція запису. Зверніться до розділу [Про функції callback
подійного буфера](eventbufferevent.about.callbacks.md).

`eventcb`
Callback – функція події зміни статусу. Зверніться до розділу [Про
callback-функціях подієвого
буфера](eventbufferevent.about.callbacks.md).

`arg`
Змінна, яка буде передана всім callback-функціям.

### Значення, що повертаються

Повертає ресурс події буфера, пов'язаний у разі потреби з ресурсом
сокет.

### Дивіться також

- [EventBufferEvent::sslFilter()](eventbufferevent.sslfilter.md) -
Створює нову подію буфера SSL для надсилання даних через
інша подія буфера
- [EventBufferEvent::sslSocket()](eventbufferevent.sslsocket.md) -
Створює нову буферну подію SSL для надсилання своїх даних через
SSL у сокет
