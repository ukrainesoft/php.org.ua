- [« EventBufferEvent::setPriority](eventbufferevent.setpriority.md)
- [EventBufferEvent::setWatermark
»](eventbufferevent.setwatermark.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Встановлює час очікування читання та запису для події буфера

# EventBufferEvent::setTimeouts

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::setTimeouts — Встановлює час очікування та
записи для події буфера

### Опис

public **EventBufferEvent::setTimeouts**( float `$timeout_read` , float
`$timeout_write` ): bool

Встановлює час очікування читання та запису для події буфер

### Список параметрів

`timeout_read`
Час очікування читання

`timeout_write`
Час очікування запису

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
