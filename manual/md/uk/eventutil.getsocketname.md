- [«EventUtil::getSocketFd](eventutil.getsocketfd.md)
- [EventUtil::setSocketOption »](eventutil.setsocketoption.md)

- [PHP Manual](index.md)
- [EventUtil](class.eventutil.md)
- Отримати поточну адресу, до якої прив'язаний сокет

# EventUtil::getSocketName

(PECL event \>u003d 1.5.0)

EventUtil::getSocketName — Отримати поточну адресу, до якої прив'язаний
сокет

### Опис

public static **EventUtil::getSocketName**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` , string `&$address` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$port` u003d ?): bool

Повертає поточну адресу, яку прив'язаний сокет `socket`.

### Список параметрів

`socket`
Ресурс сокету, потоку чи файловий дескриптор, пов'язаний із сокетом.

`address`
Вихідний параметр. IP-адреса або шлях до доменного сокету UNIX.

`port`
Вихідний параметр. Порт, якого прив'язаний сокет. Не має сенсу для
доменних сокетів UNIX

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
