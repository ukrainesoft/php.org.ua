- [«EventListener::setCallback](eventlistener.setcallback.md)
- [EventSslContext »](class.eventsslcontext.md)

- [PHP Manual](index.md)
- [EventListener](class.eventlistener.md)
- Встановлює callback-функцію помилки слухача подій

# EventListener::setErrorCallback

(PECL event \>u003d 1.2.6-beta)

EventListener::setErrorCallback — Встановлює callback-функцію помилки
слухача подій

### Опис

public **EventListener::setErrorCallback**( string `$cb` ): void

Встановлює callback-функцію помилки слухача подій

### Список параметрів

`cb`
Callback-функція помилки. Повинна відповідати наступному прототипу:

**callback**( [EventListener](class.eventlistener.md) `$listener` u003d
**`null`** ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` u003d **`null`** ): void

`listener`
Об'єкт [EventListener](class.eventlistener.md).

`data`
Ці дані, прикріплені до callback-функції.

### Значення, що повертаються

### Дивіться також

- [EventListener::setCallback()](eventlistener.setcallback.md) -
Ціль setCallback
