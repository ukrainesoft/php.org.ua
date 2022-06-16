- [« xmlrpc_decode](function.xmlrpc-decode.md)
- [xmlrpc_encode »](function.xmlrpc-encode.md)

- [PHP Manual](index.md)
- [Функції XML-RPC](ref.xmlrpc.md)
- Генерує XML для методу запиту

#xmlrpc_encode_request

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7)

xmlrpc_encode_request — генерує XML для методу запиту

### Опис

**xmlrpc_encode_request**(string `$method`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$params`, array `$output_options` u003d ?): string

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`method`
Ім'я методу виклику.

`params`
Параметри методу, сумісні із сигнатурою виклику.

`output_options`
Масив, що уточнює параметри виведення, може містити (значення по
замовчування виділено):

- output_type: php, *xml*

- verbosity: no_white_space, newlines_only, *pretty*

- escaping: cdata, *non-ascii, non-print, markup* (може бути рядок з
одним значенням або масив з декількома значеннями)

- version: simple, *xmlrpc*, soap 1.1, auto

- encoding: *iso-8859-1*, інший набір символів, що підтримується iconv

### Значення, що повертаються

Повертає рядок, що містить запит XML.

### Приклади

**Приклад #1 Приклад клієнтської функції XMLRPC**

` <?php$request u003d xmlrpc_encode_request("method", array(1, 2, 3));$context u003d stream_context_create(array('http' u003d> array(    'method' u003d>         > "Content-Type: text/xml",    'content' u003d> $request)));$file u003d file_get_contents("http://www.example.com/xmlrpc", false, $context);$response u003du003d xmlrpc_decode($file);if($response && xmlrpc_is_fault($response)) {   trigger_error("xmlrpc: $response[faultString] ($response[faultCode])");}  | `

### Дивіться також

- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
- [file_get_contents()](function.file-get-contents.md) - Читає
вміст файлу в рядок
- [xmlrpc_decode()](function.xmlrpc-decode.md) - Декодує XML у
нативні типи PHP
