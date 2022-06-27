- [«stream_bucket_prepend](function.stream-bucket-prepend.md)
- [stream_context_get_default
»](function.stream-context-get-default.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Створює контекст потоку

#stream_context_create

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_create — Створює контекст потоку

### Опис

**stream_context_create**(?array `$options` u003d **`null`**, ?array
`$params` u003d **`null`**): resource

Створює та повертає контекст потоку з опціями, вказаними у масиві
`options`.

### Список параметрів

`options`
Має бути асоціативним масивом у форматі
`$arr['wrapper']['option'] u003d $value` або **`null`**. Список доступних
оберток та опцій дивіться у розділі [Опції контексту](context.md)

Значення за замовчуванням - ** `null`**.

`params`
Має бути асоціативним масивом у форматі
`$arr['parameter'] u003d $value` або **`null`**. Зверніться до розділу [Опції
контекста](context.params.md) за списком стандартних параметрів
потоку.

### Значення, що повертаються

Ресурс (resource) контексту потоку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------|
| 8.0.0 | Параметри `options` та `params` тепер допускають значення null. |

### Приклади

**Приклад #1 Використання **stream_context_create()****

` <?php$opts u003d array(  'http'u003d>array(   'method'u003d>"GET",   'header'u003d>"Accept-language: en
Cookie:foou003dbar
"  ));$context u003d stream_context_create($opts);/* Відправляє http-запит на домен www.example.com   з додатковими заголовками, показаними вище */$fp u003d'' , 'r', false, $context);fpassthru($fp);fclose($fp);?> `

### Дивіться також

- [stream_context_set_option()](function.stream-context-set-option.md) -
Встановлює опцію для потоку/обгортки/контексту
- Список підтримуваних обгорток ([Підтримувані протоколи та
обгортки](wrappers.md))
- Опції контексту ([Контекстні опції та параметри](context.md))
