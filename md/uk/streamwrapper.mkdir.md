- [« streamWrapper::dir_rewinddir](streamwrapper.dir-rewinddir.md)
- [streamWrapper::rename »](streamwrapper.rename.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- створення директорії

# streamWrapper::mkdir

(PHP 5, PHP 7, PHP 8)

streamWrapper::mkdir — Створення директорії

### Опис

public **streamWrapper::mkdir**(string `$path`, int `$mode`, int
`$options`): bool

Цей метод викликається у процесі виконання
[mkdir()](function.mkdir.md).

> **Примітка**:
>
> Щоб повідомлення про помилки відповідали реальним помилкам, цей
> метод *не потрібно* визначати у випадках, коли обгортка не підтримує
> Створення директорій.

### Список параметрів

`path`
Створювана директорія.

`mode`
Значення, що передається в [mkdir()](function.mkdir.md).

`options`
Бітова маска, складена з констант, як
**`STREAM_MKDIR_RECURSIVE`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

### Примітки

> **Примітка**:
>
> Властивість `streamWrapper::$context` буде оновлена, якщо коректна
> контекст був переданий у функцію, що викликається.

### Дивіться також

- [mkdir()](function.mkdir.md) - Створює директорію
- [streamwrapper::rmdir()](streamwrapper.rmdir.md) - Видаляє
директорію
