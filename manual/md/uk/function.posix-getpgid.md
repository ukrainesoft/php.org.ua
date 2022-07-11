- [«posix_getlogin](function.posix-getlogin.md)
- [posix_getpgrp »](function.posix-getpgrp.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає ID групи поточного процесу для менеджера завдань

#posix_getpgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpgid — Повертає ID групи поточного процесу для менеджера
завдань

### Опис

**posix_getpgid**(int `$process_id`): int\|false

Повертає ідентифікатор поточного процесу. `process_id` або
**`false`** у разі виникнення помилки.

### Список параметрів

`process_id`
Ідентифікатор поточного процесу.

### Значення, що повертаються

Повертає ідентифікатор як число int.

### Приклади

**Приклад #1 Приклад використання **posix_getpgid()****

` <?php$pid u003d posix_getppid();echo posix_getpgid($pid); //35?> `

### Примітки

> **Примітка**:
>
> Це не POSIX функція, але вона сумісна з BSD та System V операційними
> системами. Якщо операційна система не підтримує цю функцію,
> вона не буде увімкнена при компіляції. Доступність цієї функції може
> бути перевірена за допомогою
> [function_exists()](function.function-exists.md).

### Дивіться також

- [posix_getppid()](function.posix-getppid.md) - Повертає
ідентифікатор батьківського процесу
- Посібник SETPGID(2)
