- [«posix_getegid](function.posix-getegid.md)
- [posix_getgid »](function.posix-getgid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає ефективний ідентифікатор користувача поточного процесу
EUID

#posix_geteuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_geteuid — Повертає ефективний ідентифікатор користувача
поточного процесу EUID

### Опис

**posix_geteuid**(): int

Повертає число, що відповідає ефективному ідентифікатору
користувача поточного процесу. Подивіться функцію
[posix_getpwuid()](function.posix-getpwuid.md) для отримання
інформації як перетворити це число на ім'я користувача.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ID користувача як int

### Приклади

**Приклад #1 Приклад використання **posix_geteuid()****

Цей приклад виводить ID поточного користувача, потім встановлює
значення для ефективного ідентифікатора користувача за допомогою функції
[posix_seteuid()](function.posix-seteuid.md), і показує різницю
між дійсним та ефективним ідентифікаторами користувача.

` <?phpecho posix_getuid()."
"; //10001echo posix_geteuid()."
"; //10001posix_seteuid(10000);echo posix_getuid()."
"; //10001echo posix_geteuid()."
"; //10000?> `

### Дивіться також

- [posix_getpwuid()](function.posix-getpwuid.md) - Повертає
інформацію про користувача, використовуючи його ID
- [posix_getuid()](function.posix-getuid.md) - Повертає
фактичний ідентифікатор користувача поточного процесу UID
- [posix_setuid()](function.posix-setuid.md) - Встановлює UID
поточного процесу
- POSIX керівництво GETEUID(2)
