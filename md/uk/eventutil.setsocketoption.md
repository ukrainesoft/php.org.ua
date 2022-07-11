- [«EventUtil::getSocketName](eventutil.getsocketname.md)
- [EventUtil::sslRandPoll »](eventutil.sslrandpoll.md)

- [PHP Manual](index.md)
- [EventUtil](class.eventutil.md)
- Встановити опції сокету

# EventUtil::setSocketOption

(PECL event \>u003d 1.6.0)

EventUtil::setSocketOption — Встановити опції сокету

### Опис

public static **EventUtil::setSocketOption**(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket`,
int `$level`,
int `$optname` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$optval`
): bool

Встановлює опції сокету.

### Список параметрів

`socket`
Ресурс сокету, потоку чи файловий дескриптор, пов'язаний із сокетом.

`level`
Одна з констант `EventUtil::SOL_*`. Задає рівень протоколу, до
якому належить параметр. Наприклад, для роботи з рівнем сокету,
параметр `level` має бути виставлений як **`EventUtil::SOL_SOCKET`**.
Інші рівні, такі як TCP, можна використовувати вказавши відповідну
константи. Рівні протоколу можна переглянути за допомогою функції
[getprotobyname()](function.getprotobyname.md). Дивіться [константи
EventUtil](class.eventutil.md#eventutil.constants) .

`optname`
Ім'я опції (тип). Те саме, що й відповідний параметр функції
[socket_get_option()](function.socket-get-option.md). Дивіться
[константи EventUtil](class.eventutil.md#eventutil.constants) .

`optval`
Приймає ті ж значення, що й параметр `optval` функції
[socket_get_option()](function.socket-get-option.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [socket_get_option()](function.socket-get-option.md) - Отримує
опції потоку для сокету
- [socket_set_option()](function.socket-set-option.md) -
Встановлює опції для сокету
