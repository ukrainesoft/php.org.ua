- [« streamWrapper::stream_close](streamwrapper.stream-close.md)
- [streamWrapper::stream_flush »](streamwrapper.stream-flush.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Перевіряє досягнення кінця файлу за файловим покажчиком

# streamWrapper::stream_eof

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_eof — Перевіряє досягнення кінця файлу за
файлового покажчика

### Опис

public **streamWrapper::stream_eof**(): bool

Цей метод викликається через виклик [feof()](function.feof.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повинен повернути **`true`**, якщо позиція читання/запису знаходиться наприкінці
потоку та доступних для читання даних більше немає. В інших випадках
повертається **`false`**.

### Примітки

**Увага**

При читанні файлу повністю (наприклад, функцією
[file_get_contents()](function.file-get-contents.md)), PHP буде
викликає [streamWrapper::stream_read()](streamwrapper.stream-read.md)
і разом з ним **streamWrapper::stream_eof()** у циклі, поки
[streamWrapper::stream_read()](streamwrapper.stream-read.md)
повертає непустий рядок. Повертається з
**streamWrapper::stream_eof()** значення при цьому ігнорується.

### Дивіться також

- [feof()](function.feof.md) - Перевіряє, чи кінець файлу досягнуто
