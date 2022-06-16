- [«EventUtil::\_\_construct](eventutil.construct.md)
- [EventUtil::getLastSocketError »](eventutil.getlastsocketerror.md)

- [PHP Manual](index.md)
- [EventUtil](class.eventutil.md)
- Отримати номер останньої помилки сокету, що виникла

# EventUtil::getLastSocketErrno

(PECL event \>u003d 1.2.6-beta)

EventUtil::getLastSocketErrno — Отримати номер останньої, що виникла
помилки сокету

### Опис

public static **EventUtil::getLastSocketErrno**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` u003d **`null`** ): int

Повертає номер останньої помилки сокету ( `errno` ).

### Список параметрів

`socket`
Ресурс сокету, потоку чи файловий дескриптор сокету.

### Значення, що повертаються

Повертає номер останньої помилки сокету ( `errno` ).

### Дивіться також

- [EventUtil::getLastSocketError()](eventutil.getlastsocketerror.md) -
Отримати останню помилку сокету, що виникла
