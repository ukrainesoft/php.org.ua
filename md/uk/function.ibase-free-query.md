- [« ibase_free_event_handler](function.ibase-free-event-handler.md)
- [ibase_free_result »](function.ibase-free-result.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- звільняє пам'ять, виділену на підготовку запиту

# ibase_free_query

(PHP 5, PHP 7 \< 7.4.0)

ibase_free_query — Звільняє пам'ять, виділену для підготовки запиту

### Опис

**ibase_free_query**(resource `$query`): bool

Визволяє підготовлений запит.

### Список параметрів

`query`
Запит, підготовлений за допомогою
[ibase_prepare()](function.ibase-prepare.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
