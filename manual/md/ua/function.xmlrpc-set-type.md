- [«
xmlrpc_server_register_method](function.xmlrpc-server-register-method.md)
- [Модулі лише для Windows »](refs.utilspec.windows.md)

- [PHP Manual](index.md)
- [Функції XML-RPC](ref.xmlrpc.md)
- Встановлює тип XML-RPC, base64 або datetime для значення рядка
PHP

#xmlrpc_set_type

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7)

xmlrpc_set_type — Встановлює тип XML-RPC, base64 або datetime для
значення рядка PHP

### Опис

**xmlrpc_set_type**(string `&$value`, string `$type`): bool

Встановлює тип XML-RPC, base64 або datetime для значення рядка PHP.

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`value`
Значення установки типу.

`type`
'base64' або 'datetime'

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. У разі успішного виконання, `value`
конвертується в об'єкт.

### Помилки

Видає повідомлення E_WARNING для типів XMLRPC, що не підтримуються.

### Приклади

**Приклад #1 Приклад використання **xmlrpc_set_type()****

` <?php$params u003d date("Ymd\TH:i:s", time());xmlrpc_set_type($params, 'datetime');echo xmlrpc_encode($params);?> `

Результатом виконання цього прикладу буде щось подібне:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<params>
<param>
<value>
<dateTime.iso8601>20090322T23:43:03</dateTime.iso8601>
</value>
</param>
</params>
