- [« ibase_field_info](function.ibase-field-info.md)
- [ibase_free_query »](function.ibase-free-query.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- скасовує зареєстрований обробник події

# ibase_free_event_handler

(PHP 5, PHP 7 \< 7.4.0)

ibase_free_event_handler — Скасовує зареєстрований обробник
події

### Опис

**ibase_free_event_handler**(resource `$event`): bool

Функція скасовує, зареєстрований обробник події, зазначений у
`event`. Callback-функція більше не буде викликатися для подій,
яких вона була зареєстрована.

### Список параметрів

`event`
Ресурс події, створений
[ibase_set_event_handler()](function.ibase-set-event-handler.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_set_event_handler()](function.ibase-set-event-handler.md) -
Реєструє callback-функцію, яка буде викликатись при
публікації подій
