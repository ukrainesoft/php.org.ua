- [«posix_getpid](function.posix-getpid.md)
- [posix_getpwnam »](function.posix-getpwnam.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає ідентифікатор батьківського процесу

#posix_getppid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getppid — Повертає ідентифікатор батьківського процесу

### Опис

**posix_getppid**(): int

Повертає ідентифікатор батьківського процесу стосовно поточного
процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор процесу як int.

### Приклади

**Приклад #1 Приклад використання **posix_getppid()****

`<?phpecho posix_getppid(); // 8259?> `
