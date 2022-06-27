- [« mysql_data_seek](function.mysql-data-seek.md)
- [mysql_db_query »](function.mysql-db-query.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає назву бази даних із виклику до mysql_list_dbs

# mysql_db_name

(PHP 4, PHP 5)

mysql_db_name — Повертає назву бази даних із виклику до
[mysql_list_dbs()](function.mysql-list-dbs.md)

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- Запит: `SELECT DATABASE()`

### Опис

**mysql_db_name**(resource `$result`, int `$row`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field` u003d NULL): string

Повертає назву бази даних із виклику до
[mysql_list_dbs()](function.mysql-list-dbs.md).

### Список параметрів

`result`
Дескриптор результату, отриманий із виклику
[mysql_list_dbs()](function.mysql-list-dbs.md).

`row`
Індекс у результаті.

`field`
Назва поля.

### Значення, що повертаються

Повертає назву бази даних у разі успішного виконання, або
**`false`** у разі помилки. У разі повернення **`false`** використовуйте
[mysql_error()](function.mysql-error.md) для визначення природи
помилок.

### Приклади

**Приклад #1 Приклад використання **mysql_db_name()****

` <?phperror_reporting(E_ALL);$link u003d mysql_connect('dbhost', 'username', 'password');$db_list u003d mysql_list_dbs($link);$i u003d 0;$cnt u003d mysql_num_rows($db ($i < $cnt) {   echo mysql_db_name($db_list, $i) . "
";   $i++;}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_dbname()**

### Дивіться також

- [mysql_list_dbs()](function.mysql-list-dbs.md) - Повертає список
баз даних, доступних на сервері
- [mysql_tablename()](function.mysql-tablename.md) - Повертає ім'я
таблиці, що містить вказане поле
