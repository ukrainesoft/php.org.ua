- [«
streamWrapper::stream_set_option](streamwrapper.stream-set-option.md)
- [streamWrapper::stream_tell »](streamwrapper.stream-tell.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Отримання інформації про файловий ресурс

# streamWrapper::stream_stat

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_stat — Отримання інформації про файловий ресурс

### Опис

public **streamWrapper::stream_stat**(): array\|false

Цей метод викликається внаслідок виклику функції
[fstat()](function.fstat.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Дивіться [stat()](function.stat.md).

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

### Дивіться також

- [stat()](function.stat.md) - Повертає інформацію про файл
- [streamwrapper::url_stat()](streamwrapper.url-stat.md) - Отримання
інформації про файл
