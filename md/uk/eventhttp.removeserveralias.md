- [«EventHttp::\_\_construct](eventhttp.construct.md)
- [EventHttp::setAllowedMethods »](eventhttp.setallowedmethods.md)

- [PHP Manual](index.md)
- [EventHttp](class.eventhttp.md)
- Видаляє псевдонім сервера

# EventHttp::removeServerAlias

(PECL event \>u003d 1.4.0-beta)

EventHttp::removeServerAlias — Видаляє псевдонім сервера

### Опис

public **EventHttp::removeServerAlias**( string `$alias` ): bool

Видаляє псевдонім сервера, доданий за допомогою
[EventHttp::addServerAlias()](eventhttp.addserveralias.md)

### Список параметрів

`alias`
Псевдонім для видалення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventHttp::addServerAlias()](eventhttp.addserveralias.md) -
Додає псевдонім сервера до об'єкта HTTP-сервера
