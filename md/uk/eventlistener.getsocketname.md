- [«EventListener::getBase](eventlistener.getbase.md)
- [EventListener::setCallback »](eventlistener.setcallback.md)

- [PHP Manual](index.md)
- [EventListener](class.eventlistener.md)
- Отримує поточну адресу, до якої прив'язаний сокет слухача

# EventListener::getSocketName

(PECL event \>u003d 1.5.0)

EventListener::getSocketName — Отримує поточну адресу, до якої
прив'язаний сокет слухача

### Опис

public static **EventListener::getSocketName**( string `&$address` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$port` u003d ?): bool

Отримує поточну адресу, яку прив'язаний сокет слухача.

### Список параметрів

`address`
Вихідний параметр. IP-адреса залежно від сімейства адрес сокетів.

`port`
Вихідний параметр. Порт, якого прив'язаний сокет.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
