- [«posix_getuid](function.posix-getuid.md)
- [posix_isatty »] (function.posix-isatty.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Визначає рівень доступу для групи

#posix_initgroups

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

posix_initgroups — Визначає рівень доступу до групи

### Опис

**posix_initgroups**(string `$username`, int `$group_id`): bool

Визначає рівень доступу групи для користувача, зазначеного в
параметри.

### Список параметрів

`username`
Ім'я користувача, якого визначається рівень доступу.

`group_id`
Ідентифікатор базової групи із файлу password.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- Посібник Unix initgroups(3).
