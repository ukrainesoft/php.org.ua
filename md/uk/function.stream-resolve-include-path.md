- [«stream_register_wrapper](function.stream-register-wrapper.md)
- [stream_select »](function.stream-select.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Перетворити повне ім'я файлу, використовуючи шляхи увімкнення

#stream_resolve_include_path

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8)

stream_resolve_include_path — Перетворити повне ім'я файлу за допомогою
шляхи включення

### Опис

**stream_resolve_include_path**(string `$filename`): string\|false

Перетворити повне ім'я файлу з параметра `filename`, використовуючи шляхи
включення відповідно до тих самих правил, що і функції
[fopen()](function.fopen.md)/[include](function.include.md).

### Список параметрів

`filename`
Ім'я файлу, яке потрібно перетворити.

### Значення, що повертаються

Повертає рядок (string), який містить отримане абсолютне ім'я файлу
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **stream_resolve_include_path()****

Основний приклад використання.

` <?phpvar_dump(stream_resolve_include_path("test.php"));?> `

Результатом виконання цього прикладу буде щось подібне:

string(22) "/var/www/html/test.php"
