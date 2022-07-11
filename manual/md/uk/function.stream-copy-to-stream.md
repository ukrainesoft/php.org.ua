- [«
stream_context_set_params](function.stream-context-set-params.md)
- [stream_filter_append »](function.stream-filter-append.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Копіює дані з одного потоку до іншого

#stream_copy_to_stream

(PHP 5, PHP 7, PHP 8)

stream_copy_to_stream — Копіює дані з одного потоку до іншого

### Опис

**stream_copy_to_stream**(
resource `$from`,
resource `$to`,
?int `$length` u003d **`null`**,
int `$offset` u003d 0
): int\|false

Робить копію до `length` байт даних від поточної позиції (або від позиції
`offset`, якщо вказано) потоку `from` у потік `to`. Якщо `length` дорівнює
**`null`**, буде скопійовано весь вміст з `from`.

### Список параметрів

`from`
Вихідний потік.

`to`
Потік призначення.

`length`
Максимальна кількість байт для копіювання. За замовчуванням копіюються
всі байти, що залишилися.

`offset`
Зміщення, з якого копіюватимуться дані.

### Значення, що повертаються

Повертає загальну кількість скопійованих байт або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------|
| 8.0.0 | Параметр length тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **stream_copy_to_stream()****

` <?php$src u003d fopen('http://www.example.com', 'r');$dest1 u003d fopen('first1k.txt', 'w');$dest2 u003d fopen('remainder. txt', 'w');echo stream_copy_to_stream($src, $dest1, 1024) . "Байт|скопійовано|в|first1k.txt
";echo stream_copy_to_stream($src, $dest2) . " байт скопійовано в remainder.txt
";?> `

### Дивіться також

- [copy()](function.copy.md) - Копіює файл
