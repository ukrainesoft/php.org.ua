- [«posix_getpgrp](function.posix-getpgrp.md)
- [posix_getppid »](function.posix-getppid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає ідентифікатор поточного процесу

#posix_getpid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpid — Повертає ідентифікатор поточного процесу

### Опис

**posix_getpid**(): int

Повертає ідентифікатор поточного процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор як int.

### Приклади

**Приклад #1 Приклад використання **posix_getpid()****

`<?phpecho posix_getpid(); //8805?> `

### Дивіться також

- [posix_kill()](function.posix-kill.md) - Надсилає сигнал
відповідного процесу
- POSIX керівництво GETPID(2)
