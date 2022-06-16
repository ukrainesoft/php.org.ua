- [«stream_wrapper_register](function.stream-wrapper-register.md)
- [stream_wrapper_unregister
»](function.stream-wrapper-unregister.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Відновлює скасовану раніше вбудовану обгортку

#stream_wrapper_restore

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_wrapper_restore — Відновлює скасовану вбудовану раніше
обгортку

### Опис

**stream_wrapper_restore**(string `$protocol`): bool

Відновлює вбудовану обгортку, реєстрація якої раніше була
скасована за допомогою
[stream_wrapper_unregister()](function.stream-wrapper-unregister.md).

### Список параметрів

`protocol`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
