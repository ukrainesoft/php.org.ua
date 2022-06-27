- [« streamWrapper::rename](streamwrapper.rename.md)
- [streamWrapper::stream_cast »](streamwrapper.stream-cast.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Видаляє директорію

# streamWrapper::rmdir

(PHP 5, PHP 7, PHP 8)

streamWrapper::rmdir — Видаляє директорію

### Опис

public **streamWrapper::rmdir**(string `$path`, int `$options`): bool

Цей метод викликається у процесі виконання
[rmdir()](function.rmdir.md).

> **Примітка**:
>
> Щоб повідомлення про помилки відповідали реальним помилкам, цей
> метод *не потрібно* визначати у випадках, коли обгортка не підтримує
> Видалення директорій.

### Список параметрів

`path`
URL директорії, що видаляється.

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

- [rmdir()](function.rmdir.md) - Видаляє директорію
- [streamwrapper::mkdir()](streamwrapper.mkdir.md) - Створення
директорії
- [streamwrapper::unlink()](streamwrapper.unlink.md) - Видалення
файлу
