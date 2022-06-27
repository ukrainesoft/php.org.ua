- [«posix_setuid](function.posix-setuid.md)
- [posix_times »](function.posix-times.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає системне повідомлення про помилку, ґрунтуючись на отриманому
номері помилки

#posix_strerror

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

posix_strerror — Повертає системне повідомлення про помилку, ґрунтуючись
на отриманому номері помилки

### Опис

**posix_strerror**(int `$error_code`): string

Повертає POSIX системне повідомлення про помилку, пов'язане з отриманим у
параметрі `error_code` номером Ви можете отримати параметр `error_code`
за допомогою виклику функції
[posix_get_last_error()](function.posix-get-last-error.md).

### Список параметрів

`error_code`
POSIX номер помилки, отриманий із функції
[posix_get_last_error()](function.posix-get-last-error.md). Якщо
передано значення 0, то буде повернено повідомлення "Success".

### Значення, що повертаються

Повертає рядок із повідомленням про помилку.

### Приклади

**Приклад #1 Приклад використання **posix_strerror()****

Цей скрипт намагається завершити неіснуючий процес, внаслідок
чого буде виведено відповідне повідомлення про помилку.

` <?phpposix_kill(50,SIGKILL);echo posix_strerror(posix_get_last_error())."
";?> `

Результатом виконання цього прикладу буде щось подібне:

No such process

### Дивіться також

- [posix_get_last_error()](function.posix-get-last-error.md) -
Повертає номер помилки, що сталася в останній
функції, що завершилася невдачею
