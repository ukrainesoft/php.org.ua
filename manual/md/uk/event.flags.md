- [« Приклади](event.examples.md)
- [Про постійні (persistent) події »](event.persistence.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Прапори подій

# Прапори подій

Прапор **`Event::READ`** вказує подію, яка стає активною,
коли наданий файл (зазвичай потоковий ресурс або сокет) готовий до
читання.

Прапор **`Event::WRITE`** вказує подію, яка стає активною,
коли наданий файл (зазвичай потоковий ресурс або сокет) готовий до
запису.

Прапор **`Event::SIGNAL`** використовується для реалізації відстеження
системних сигналів Дивіться "Створення подій для сигналів" нижче.

Прапор **`Event::TIMEOUT`** означає, що активувалася подія з
закінчення очікування (timeout). Прапор **`Event::TIMEOUT`** ігнорується у
створення події: його можна встановити при *додаванні*. Він задається в
аргумент "$what" callback-функції, якщо відбулася подія цього типу.

Також почитайте [» Fast portable non-blocking network programming with
Libevent, Working with events, Event
flags](http://www.wangafu.net/~nickm/libevent-book/Ref4_event.md#_the_event_flags)
