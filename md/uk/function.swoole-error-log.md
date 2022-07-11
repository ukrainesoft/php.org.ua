- [« swoole_errno](function.swoole-errno.md)
- [swoole_event_add »](function.swoole-event-add.md)

- [PHP Manual](index.md)
- [Функції Swoole](ref.swoole-funcs.md)
- Виводить повідомлення про помилки до журналу

# swoole_error_log

(PECL swoole \>u003d 4.5.8)

swoole_error_log — Виводить повідомлення про помилки до журналу

### Опис

**swoole_error_log**(int `$level`, string `$msg`): void

Виводить повідомлення про помилки до журналу.

### Список параметрів

`level`
Рівень запису в журнал можна використовувати константи:
**`SWOOLE_LOG_DEBUG`**, **`SWOOLE_LOG_TRACE`**, **`SWOOLE_LOG_INFO`**,
**`SWOOLE_LOG_NOTICE`**, **`SWOOLE_LOG_WARNING`**,
**`SWOOLE_LOG_ERROR`**, **`SWOOLE_LOG_NONE`**

`msg`
Повідомлення, яке записується в журнал.

### Значення, що повертаються

Функція не повертає значення після виконання.
