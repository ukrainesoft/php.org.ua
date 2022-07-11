- [«
stream_context_get_params](function.stream-context-get-params.md)
- [stream_context_set_option
»](function.stream-context-set-option.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Встановити контекст потоку за промовчанням

#stream_context_set_default

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

stream_context_set_default — Встановити контекст потоку за промовчанням

### Опис

**stream_context_set_default**(array `$options`): resource

Встановити контекст потоку за промовчанням, який буде використовуватись
щоразу, коли файлові операції ([fopen()](function.fopen.md),
[file_get_contents()](function.file-get-contents.md) і т.д.)
викликаються без параметра контексту. Використовується той самий синтаксис, що і
в [stream_context_create()](function.stream-context-create.md).

### Список параметрів

`options`
Опції для установки для контексту за промовчанням.

> **Примітка**:
>
> Параметр `options` повинен бути асоціативним масивом
> масивів у форматі $arr['wrapper']['option'] u003d $value`.

### Значення, що повертаються

Повертає контекст потоку за промовчанням.

### Приклади

**Приклад #1 **stream_context_set_default()** example**

` <?php$default_opts u003d array( 'http'u003d>array(   'method'u003d>"GET",   'header'u003d>"Accept-language: en
" .              "Cookie: foou003dbar",    'proxy'u003d>"tcp://10.54.1.39:8000"  ));$default u003d stream_context_set_default($default_opts);/* Отправляет обычный GET-запрос к прокси-серверу по адресою 10.54.1.39 * Для www.example.com використовуються опції контексту, вказані в $default_opts */readfile('http://www.example.com');?> `

### Дивіться також

- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
- [stream_context_get_default()](function.stream-context-get-default.md) -
Отримує контекст потоку за замовчуванням
- Listing of supported wrappers with context options (Підтримувані
протоколи та обгортки] (wrappers.md)).
