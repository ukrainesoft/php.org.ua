- [« mysqli::reap_async_query](mysqli.reap-async-query.md)
- [mysqli::release_savepoint »](mysqli.release-savepoint.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Оновлення

# mysqli::refresh

# mysqli_refresh

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli::refresh -- mysqli_refresh — Оновлення

### Опис

Об'єктно-орієнтований стиль

public **mysqli::refresh**(int `$flags`): bool

Процедурний стиль

**mysqli_refresh**([mysqli](class.mysqli.md) `$mysql`, int `$flags`):
bool

Очищає таблиці або кеш або скидає копію серверної інформації.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`flags`
Налаштування оновлення задаються константами MYSQLI_REFRESH\_\*, які
описано в розділі документації [Константи
MySQLi](mysqli.constants.md).

Дивіться також офіційну документацію [» MySQL
Refresh](http://dev.mysql.com/doc/mysql/en/mysql-refresh.md).

### Значення, що повертаються

**`true`** у разі успішного виконання, **`false`** у протилежному
випадку.

### Дивіться також

- [mysqli_poll()](mysqli.poll.md) - Опитування підключень
