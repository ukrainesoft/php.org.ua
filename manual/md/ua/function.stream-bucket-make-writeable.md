- [«stream_bucket_append](function.stream-bucket-append.md)
- [stream_bucket_new »] (function.stream-bucket-new.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Повертає об'єкт кошика із бригади для подальшої роботи з ним

#stream_bucket_make_writeable

(PHP 5, PHP 7, PHP 8)

stream_bucket_make_writeable — Повертає об'єкт кошика з бригади для
подальшої роботи з ним

### Опис

**stream_bucket_make_writeable**(resource `$brigade`): ?object

Функція викликається щоразу, коли виникає потреба у доступі до
вмісту, що міститься в бригаді та роботі з ним. Зазвичай функція
викликається з [php_user_filter::filter()](php-user-filter.filter.md).

### Список параметрів

`brigade`
Бригада, з якої необхідно повернути об'єкт кошика.

### Значення, що повертаються

Повертає об'єкт кошика з властивостями, наведеними нижче або
**`null`**.

data (string)
`data` `bucket` Поточний рядок у кошику.

datalen (integer)
`datalen` `bucket` Довжина рядка у кошику.

### Дивіться також

- [stream_bucket_append()](function.stream-bucket-append.md) -
Додати відро (bucket) до бригади (brigade)
- [stream_bucket_prepend()](function.stream-bucket-prepend.md) -
Додати відро на початок бригади
