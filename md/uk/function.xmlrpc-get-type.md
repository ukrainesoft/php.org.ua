- [« xmlrpc_encode](function.xmlrpc-encode.md)
- [xmlrpc_is_fault »](function.xmlrpc-is-fault.md)

- [PHP Manual](index.md)
- [Функції XML-RPC](ref.xmlrpc.md)
- Отримує XML-RPC тип значення PHP

#xmlrpc_get_type

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7)

xmlrpc_get_type — Отримує тип XML-RPC для PHP

### Опис

**xmlrpc_get_type**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

Ця функція особливо корисна для base64 та рядка, що містить дату.

### Список параметрів

`value`
Значення PHP

### Значення, що повертаються

Повертає тип XML-RPC.

### Приклади

**Приклад #1 Приклад XML-RPC типу**

`<?phpecho xmlrpc_get_type(null) . "
"; // base64echo xmlrpc_get_type(false) . "
"; // booleanecho xmlrpc_get_type(1) . "
"; // intecho xmlrpc_get_type(1.0) . "
"; // doubleecho xmlrpc_get_type("") . "
"; // stringecho xmlrpc_get_type(array()) . "
"; // arrayecho xmlrpc_get_type(new stdClass) . "
"; // arrayecho xmlrpc_get_type(STDIN) . "
"; // int?> `

### Дивіться також

- [xmlrpc_set_type()](function.xmlrpc-set-type.md) - Встановлює
тип XML-RPC, base64 або datetime для значення рядка PHP
