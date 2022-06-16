- [«stream_wrapper_restore](function.stream-wrapper-restore.md)
- [Swoole »](book.swoole.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Скасує реєстрацію обгортки URL

#stream_wrapper_unregister

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_wrapper_unregister — Скасує реєстрацію обгортки URL

### Опис

**stream_wrapper_unregister**(string `$protocol`): bool

Дозволяє вам вимкнути вже певну обгортку потоку. Як тільки
обгортка буде відключена, ви можете перезаписати її
обгорткою, використовуючи
[stream_wrapper_register()](function.stream-wrapper-register.md) або
включити її повторно, використовуючи
[stream_wrapper_restore()](function.stream-wrapper-restore.md).

### Список параметрів

`protocol`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
