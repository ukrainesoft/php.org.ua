- [«stream_context_create](function.stream-context-create.md)
- [stream_context_get_options
»](function.stream-context-get-options.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Отримує контекст потоку за замовчуванням

#stream_context_get_default

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_context_get_default — Отримує контекст потоку за промовчанням

### Опис

**stream_context_get_default**(?array `$options` u003d **`null`**): resource

Повертає контекст потоку за замовчуванням, який використовується у будь-яких
файлових операціях ([fopen()](function.fopen.md),
[file_get_contents()](function.file-get-contents.md) і т.д.),
викликані без параметра контексту. Параметри для контексту за замовчуванням
можуть бути опціонально вказані за допомогою цієї функцією використовуючи той же
синтаксис, що і для
[stream_context_create()](function.stream-context-create.md).

### Список параметрів

`options`
`options` повинен бути асоціативним масивом асоціативних масивів
форматі $arr['wrapper']['option'] u003d $value` або **`null`**.

### Значення, що повертаються

Ресурс (resource) контексту потоку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------|
| 8.0.0 | Параметр `options` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **stream_context_get_default()****

` <?php$default_opts u003d array(  'http'u003d>array(    'method'u003d>"GET",   'header'u003d>"Accept-language: en
"¦. .                                                                                                                                              ¦ 'header'u003d>"Content-type: application/x-www-form-urlencoded
"|.        "Content-length: " .strlen("bazu003dbomb"),    'content'u003d>"bazu003dbomb"| * Відправляє звичайний GET-запит на проксі-сервер 10.54.1.39 * Для www.example.com використовуються опції контексту, вказані в $default_opts */readfile(' запит напряму до www.example.com * Використовувані опції контексту визначені в $alternate_opts */readfile('http://www.example.com', false, $alternate);?> `

### Дивіться також

- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
- [stream_context_set_default()](function.stream-context-set-default.md) -
Встановити контекст потоку за промовчанням
- Список оберток, що підтримуються, з опціями контексту ([Підтримувані
протоколи та обгортки] (wrappers.md)).
