- [« streamWrapper::stream_write](streamwrapper.stream-write.md)
- [streamWrapper::url_stat »](streamwrapper.url-stat.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Видалення файлу

# streamWrapper::unlink

(PHP 5, PHP 7, PHP 8)

streamWrapper::unlink — Видалення файлу

### Опис

public **streamWrapper::unlink**(string `$path`): bool

Цей метод викликається у процесі виконання
[unlink()](function.unlink.md).

> **Примітка**:
>
> Щоб повідомлення про помилки відповідали реальним помилкам, цей
> метод *не потрібно* визначати у випадках, коли обгортка не підтримує
> Видалення файлів.

### Список параметрів

`path`
URL файлу, що видаляється.

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

- [unlink()](function.unlink.md) - Видаляє файл
- [streamWrapper::rmdir()](streamwrapper.rmdir.md) - Видаляє
директорію
