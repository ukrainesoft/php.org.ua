- [«EventBuffer::drain](eventbuffer.drain.md)
- [EventBuffer::expand »](eventbuffer.expand.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Опис

# EventBuffer::enableLocking

(PECL event \>u003d 1.2.6-beta)

EventBuffer::enableLocking

### Опис

public **EventBuffer::enableLocking**(): void

Включає блокування [EventBuffer](class.eventbuffer.md), щоб він
міг безпечно використовуватись декількома потоками одночасно. Коли
блокування увімкнено, воно буде утримуватися при виклику callback-функцій.
Це може призвести до безвиході, якщо ви не будете обережні. Плануйте
відповідно!

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [» Evbuffers та
Thread-безпека](http://www.wangafu.net/~nickm/libevent-book/Ref7_evbuffer.md#_evbuffers_and_thread_safety)
