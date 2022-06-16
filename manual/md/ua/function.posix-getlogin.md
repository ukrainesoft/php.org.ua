- [«posix_getgroups](function.posix-getgroups.md)
- [posix_getpgid »](function.posix-getpgid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає логін власника процесу

#posix_getlogin

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getlogin — Повертає логін власника процесу

### Опис

**posix_getlogin**(): string\|false

Повертає логін користувача, який є власником цього процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає логін користувача як змінну типу string або **false**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_getlogin()****

`<?phpecho posix_getlogin(); //apache?> `

### Дивіться також

- [posix_getpwnam()](function.posix-getpwnam.md) - Повертає
інформацію про користувача на його ім'я
- POSIX керівництво GETLOGIN(3)
