- [«
ReflectionExtension::getFunctions](reflectionextension.getfunctions.md)
- [ReflectionExtension::getName »](reflectionextension.getname.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Отримання ini-налаштувань модуля

# ReflectionExtension::getINIEntries

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getINIEntries — Отримання ini-налаштувань модуля

### Опис

public **ReflectionExtension::getINIEntries**(): array

Отримує ini-налаштування модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив array, в якому ключі - імена ini-налаштувань, а
значення – відповідні значення налаштувань.

### Приклади

**Приклад #1 Приклад використання
**ReflectionExtension::getINIEntries()****

` <?php$ext u003d new ReflectionExtension('mysql');print_r($ext->getINIEntries());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[mysql.allow_persistent] u003d> 1
[mysql.max_persistent] u003d> -1
[mysql.max_links] u003d> -1
[mysql.default_host] u003d>
[mysql.default_user] u003d>
[mysql.default_password] u003d>
[mysql.default_port] u003d>
[mysql.default_socket] u003d>
[mysql.connect_timeout] u003d> 60
[mysql.trace_mode] u003d>
[mysql.allow_local_infile] u003d> 1
[mysql.cache_size] u003d> 2000
)

### Дивіться також

- [ini_get_all()](function.ini-get-all.md) - Отримує всі налаштування
конфігурації
- [ReflectionExtension::getConstants()](reflectionextension.getconstants.md) -
Отримання констант
