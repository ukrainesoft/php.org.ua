- [« streamWrapper::dir_closedir](streamwrapper.dir-closedir.md)
- [streamWrapper::dir_readdir »](streamwrapper.dir-readdir.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Відкрити дескриптор директорії

# streamWrapper::dir_opendir

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_opendir — Відкрити дескриптор директорії

### Опис

public **streamWrapper::dir_opendir**(string `$path`, int `$options`):
bool

Цей метод викликається у процесі виконання
[opendir()](function.opendir.md).

### Список параметрів

`path`
Задає URL-адресу, яку було передано в [opendir()](function.opendir.md).

> **Примітка**:
>
> URL можна розділити на частини за допомогою
> [parse_url()](function.parse-url.md).

`options`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [opendir()](function.opendir.md) - Відкриває дескриптор каталогу
- [streamWrapper::dir_closedir()](streamwrapper.dir-closedir.md) -
Закрити дескриптор директорії
- [parse_url()](function.parse-url.md) - Розбирає URL та повертає
його компоненти
