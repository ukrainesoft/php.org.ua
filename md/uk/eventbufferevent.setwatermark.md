- [« EventBufferEvent::setTimeouts](eventbufferevent.settimeouts.md)
- [EventBufferEvent::sslError »](eventbufferevent.sslerror.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Регулює водяні знаки читання та/або запису

# EventBufferEvent::setWatermark

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::setWatermark — Регулює водяні знаки читання та/або
запису

### Опис

public **EventBufferEvent::setWatermark**( int `$events` , int
`$lowmark` , int `$highmark` ): void

Регулює водяні знаки читання, * водяні знаки * записи або і те, і
інше для однієї події буфера.

Водяний знак події буфера – це значення, що визначає кількість
байтів, які мають бути прочитані або записані перед викликом
callback-функції. За замовчуванням кожна подія читання/запису запускає
виклик callback-функції. Зверніться до [» Fast portable non-blocking
network programming with Libevent: Callbacks and
watermarks](http://www.wangafu.net/~nickm/libevent-book/Ref6_bufferevent.md#_callbacks_and_watermarks).

### Список параметрів

`events`
Бітова маска **`Event::READ`**, **`Event::WRITE`** або обох.

`lowmark`
Мінімальне значення водяного знака

`highmark`
Максимальне значення водяного знака. **`0`** означає "без
обмежень".

### Значення, що повертаються

Функція не повертає значення після виконання.
