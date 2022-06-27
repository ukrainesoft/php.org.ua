- [«stream_get_meta_data](function.stream-get-meta-data.md)
- [stream_get_wrappers »](function.stream-get-wrappers.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримати список зареєстрованих транспортів сокету

#stream_get_transports

(PHP 5, PHP 7, PHP 8)

stream_get_transports — Отримати список зареєстрованих транспортів
сокету

### Опис

**stream_get_transports**(): array

Повертає індексований масив, який містить назви всіх транспортів
сокет, доступний на запущеній системі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індексований масив назв транспорту сокету.

### Приклади

**Приклад #1 Приклад використання **stream_get_transports()****

` <?php$xportlist u003d stream_get_transports();print_r($xportlist);?> `

Результатом виконання цього прикладу буде щось подібне:

Array (
[0] u003d> tcp
[1] u003d> udp
[2] u003d> unix
[3] u003d> udg
)

### Дивіться також

- [stream_get_filters()](function.stream-get-filters.md) - Отримати
список зареєстрованих фільтрів
- [stream_get_wrappers()](function.stream-get-wrappers.md) -
Отримати список зареєстрованих потоків
