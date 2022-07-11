- [«posix_setsid](function.posix-setsid.md)
- [posix_strerror »](function.posix-strerror.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Встановлює UID поточного процесу

#posix_setuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setuid — Встановлює UID поточного процесу

### Опис

**posix_setuid**(int `$user_id`): bool

Встановлює фактичний ідентифікатор користувача цього процесу.
Це привілейований процес і потребує відповідних прав (зазвичай
прав суперкористувача root) в системі для можливості виконати цю
функцію.

### Список параметрів

`user_id`
Ідентифікатор користувача.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_setuid()****

Цей код виводить поточний ідентифікатор користувача, а потім змінює
його.

` <?phpecho posix_getuid()."
"; //10001echo posix_geteuid()."
"; //10001posix_setuid(10000);echo posix_getuid()."
"; //10000echo posix_geteuid()."
"; //10000?> `

### Дивіться також

- [posix_setgid()](function.posix-setgid.md) - Встановлює
ідентифікатор групи для поточного процесу GID
- [posix_seteuid()](function.posix-seteuid.md) - Встановлює
ефективний ідентифікатор користувача для поточного процесу EUID
- [posix_getuid()](function.posix-getuid.md) - Повертає
фактичний ідентифікатор користувача поточного процесу UID
- [posix_geteuid()](function.posix-geteuid.md) - Повертає
ефективний ідентифікатор користувача поточного процесу EUID
