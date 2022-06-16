- [«posix_getsid](function.posix-getsid.md)
- [posix_initgroups »](function.posix-initgroups.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає фактичний ідентифікатор користувача поточного процесу
UID

#posix_getuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getuid — Повертає фактичний ідентифікатор користувача
поточного процесу UID

### Опис

**posix_getuid**(): int

Повертає число, що відповідає дійсному ID користувача
поточного процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ID користувача як int

### Приклади

**Приклад #1 Приклад використання **posix_getuid()****

`<?phpecho posix_getuid(); //10000?> `

### Дивіться також

- [posix_getpwuid()](function.posix-getpwuid.md) - Повертає
інформацію про користувача, використовуючи його ID
- POSIX керівництво GETUID(2)
