- [« xmlrpc_get_type](function.xmlrpc-get-type.md)
- [xmlrpc_parse_method_descriptions
»](function.xmlrpc-parse-method-descriptions.md)

- [PHP Manual](index.md)
- [Функції XML-RPC](ref.xmlrpc.md)
- Визначає, чи є масив значень уявленням помилки XMLRPC

#xmlrpc_is_fault

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7)

xmlrpc_is_fault — Визначає, чи є масив значень уявленням
помилки XMLRPC

### Опис

**xmlrpc_is_fault**(array `$arg`): bool

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`arg`
Масив, що повертається [xmlrpc_decode()](function.xmlrpc-decode.md).

### Значення, що повертаються

Повертає **`true`**, якщо аргумент означає помилку, інакше
випадку - **`false`**. Опис помилки є в `$arg["faultString"]`,а
код помилки в $arg["faultCode"]`.

### Приклади

Дивіться приклад
[xmlrpc_encode_request()](function.xmlrpc-encode-request.md).

### Дивіться також

- [xmlrpc_decode()](function.xmlrpc-decode.md) - Декодує XML у
нативні типи PHP
