- [« streamWrapper::\_\_destruct](streamwrapper.destruct.md)
- [streamWrapper::dir_opendir »](streamwrapper.dir-opendir.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Закрити дескриптор директорії

# streamWrapper::dir_closedir

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_closedir — Закрити дескриптор директорії

### Опис

public **streamWrapper::dir_closedir**(): bool

Цей метод викликається у процесі виконання
[closedir()](function.closedir.md).

Усі ресурси, заблоковані або виділені під час відкриття та
використання потоку директорії необхідно звільнити.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [closedir()](function.closedir.md) - Закриває дескриптор каталогу
- [streamWrapper::dir_opendir()](streamwrapper.dir-opendir.md) -
Відкрити дескриптор директорії
