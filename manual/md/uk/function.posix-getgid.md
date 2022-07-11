- [«posix_geteuid](function.posix-geteuid.md)
- [posix_getgrgid »](function.posix-getgrgid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає дійсний ID групи поточного процесу GID

#posix_getgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgid — Повертає дійсний ID групи поточного процесу GID

### Опис

**posix_getgid**(): int

Повертає число, що відповідає дійсному ID групи поточного
процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає int, що відповідає дійсному ID групи поточного
процесу.

### Приклади

**Приклад #1 Приклад використання **posix_getgid()****

У прикладі виводиться дійсний ідентифікатор групи процесу до і
після того, як ефективний ідентифікатор групи процесу був змінений.

`<?phpecho 'My real group id is '.posix_getgid(); //20posix_setegid(40);echo 'My real group id is '.posix_getgid(); //20echo 'My effective group id is '.posix_getegid(); //40?> `

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
- [posix_getegid()](function.posix-getegid.md) - Повертає
ефективний ідентифікатор групи поточного процесу EGID
- [posix_setgid()](function.posix-setgid.md) - Встановлює
ідентифікатор групи для поточного процесу GID
- POSIX керівництво GETGID(2)
