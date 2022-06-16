- [«posix_getrlimit](function.posix-getrlimit.md)
- [posix_getuid »](function.posix-getuid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає поточний SID процесу

#posix_getsid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getsid — Повертає поточний процес SID

### Опис

**posix_getsid**(int `$process_id`): int\|false

Повертає ідентифікатор сесії процесу `process_id`. Сесійним
Ідентифікатор процесу є ідентифікатор процесу лідера сеансу.

### Список параметрів

`process_id`
Ідентифікатор процесу. Якщо встановлено в 0, мається на увазі поточний
процес. Якщо передано некоректний `process_id`, то буде повернено
**`false`**. Також буде встановлено номер помилки, який можна
обробити за допомогою функції
[posix_get_last_error()](function.posix-get-last-error.md).

### Значення, що повертаються

Повертає ідентифікатор як int або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **posix_getsid()****

` <?php$pid u003d posix_getpid();echo posix_getsid($pid); //8805?> `

### Дивіться також

- [posix_getpgid()](function.posix-getpgid.md) - Повертає ID
групи поточного процесу для менеджера завдань
- [posix_setsid()](function.posix-setsid.md) - Робить поточний
процес лідером сесії
- POSIX керівництво GETSID(2)
