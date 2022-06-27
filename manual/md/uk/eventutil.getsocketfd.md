- [«EventUtil::getLastSocketError](eventutil.getlastsocketerror.md)
- [EventUtil::getSocketName »](eventutil.getsocketname.md)

- [PHP Manual](index.md)
- [EventUtil](class.eventutil.md)
- Отримати числовий файловий дескриптор сокету чи потоку

# EventUtil::getSocketFd

(PECL event \>u003d 1.7.0)

EventUtil::getSocketFd — Отримати числовий файловий дескриптор сокету
або потоку

### Опис

public static **EventUtil::getSocketFd**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` ): int

Повертає числовий файловий дескриптор сокету чи потоку, заданий
параметром `socket`, так само як це робить модуль `Event` для
всіх методів, які приймають ресурси сокету чи потоку.

### Список параметрів

`socket`
Ресурс сокету чи потоку.

### Значення, що повертаються

Повертає числовий файловий дескриптор. **EventUtil::getSocketFd()**
повертає **`false`**, якщо не вдалося визначити тип нижчележачого
файлу, або якщо файловий дескриптор, пов'язаний із `socket` некоректний.
