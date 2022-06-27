- [«stream_is_local](function.stream-is-local.md)
- [stream_notification_callback
»](function.stream-notification-callback.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Перевіряє, чи є потік TTY

#stream_isatty

(PHP 7 \>u003d 7.2.0, PHP 8)

stream_isatty — Перевіряє, чи є потік TTY

### Опис

**stream_isatty**(resource `$stream`): bool

Визначає, чи потік `stream` відноситься до дійсного пристрою
термінального типу. Це більш переносима версія
[posix_isatty()](function.posix-isatty.md), оскільки вона працює і в
системах Windows.

### Список параметрів

`stream`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад виконання **stream_isatty()****

Ця команда може використовуватися для визначення того, чи перенаправлено
стандартний потік даних/стандартний потік помилок у файл.

```shcode
php -r "var_export(stream_isatty(STDERR));"
````

Результатом виконання цього прикладу буде щось подібне:


true

```shcode
php -r "var_export(stream_isatty(STDERR));" 2>output.txt
````

Результатом виконання цього прикладу буде щось подібне:


false
