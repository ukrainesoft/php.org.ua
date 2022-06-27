- [«EventHttp::removeServerAlias](eventhttp.removeserveralias.md)
- [EventHttp::setCallback »](eventhttp.setcallback.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Встановлює, які методи HTTP підтримуються у запитах, прийнятих
цим сервером і переданих callback-функції користувача

# EventHttp::setAllowedMethods

(PECL event \>u003d 1.4.0-beta)

EventHttp::setAllowedMethods — Встановлює, які методи HTTP
підтримуються у запитах, прийнятих цим сервером та переданих
callback-функції користувача

### Опис

public **EventHttp::setAllowedMethods**( int `$methods` ): void

Встановлює, які методи HTTP підтримуються у запитах, прийнятих
цим сервером і переданих callback-функції користувача.

Якщо не підтримується, видасть у відповідь `405 Method not allowed`.

За замовчуванням дозволені такі методи: `GET`, `POST`, `HEAD`, `PUT`
, `DELETE`. Дивіться константи `EventHttpRequest::CMD_*`.

### Список параметрів

`methods`
Бітова маска констант
[`EventHttpRequest::CMD_*`](class.eventhttprequest.md#eventhttprequest.constants)
.

### Значення, що повертаються

Функція не повертає значення після виконання.
