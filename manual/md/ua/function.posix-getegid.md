- [«posix_getcwd](function.posix-getcwd.md)
- [posix_geteuid »](function.posix-geteuid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає ефективний ідентифікатор групи поточного процесу EGID

#posix_getegid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getegid — Повертає ефективний ідентифікатор групи поточного
процесу EGID

### Опис

**posix_getegid**(): int

Повертає ефективний ідентифікатор групи поточного процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає число типу int, що відповідає ефективному ідентифікатору
групи.

### Приклади

**Приклад #1 Приклад використання **posix_getegid()****

У прикладі програма виводить ефективний ідентифікатор групи процесу
змінює його за допомогою функції
[posix_setegid()](function.posix-setegid.md) і знову виводить.

`<?phpecho 'My real group id is '.posix_getgid(); //20posix_setegid(40);echo 'My real group id is '.posix_getgid(); //20echo 'My effective group id is '.posix_getegid(); //40?> `

### Примітки

**posix_getegid()** відрізняється від
[posix_getgid()](function.posix-getgid.md) тому, що ефективний
ідентифікатор групи може бути змінений викликаним процесом, використовуючи
[posix_setegid()](function.posix-setegid.md).

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
- [posix_getgid()](function.posix-getgid.md) - Повертає
дійсний ID групи поточного процесу GID
- [posix_setgid()](function.posix-setgid.md) - Встановлює
ідентифікатор групи для поточного процесу GID
