- [«stream_get_wrappers](function.stream-get-wrappers.md)
- [stream_isatty »] (function.stream-isatty.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Перевіряє, чи є потік локальним потоком

#stream_is_local

(PHP 5 \>u003d 5.2.4, PHP 7, PHP 8)

stream_is_local — Перевіряє, чи потік є локальним потоком

### Опис

**stream_is_local**(resource\|string `$stream`): bool

Перевіряє, чи потік або URL локальний чи ні.

### Список параметрів

`stream`
Ресурс потоку або URL для перевірки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад виконання**stream_is_local()****

приклад простого використання.

` <?phpvar_dump(stream_is_local("http://example.com"));var_dump(stream_is_local("/etc"));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)
