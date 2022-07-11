- [« mysql_num_fields](function.mysql-num-fields.md)
- [mysql_pconnect »](function.mysql-pconnect.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає кількість рядів результату запиту

# mysql_num_rows

(PHP 4, PHP 5)

mysql_num_rows — Повертає кількість рядів результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_num_rows()](mysqli-result.num-rows.md)
- [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md)
- [PDOStatement::rowCount()](pdostatement.rowcount.md)

### Опис

**mysql_num_rows**(resource `$result`): int\|false

Повертає кількість рядів результатів запиту. Ця команда працює
тільки із запитами SELECT або SHOW, що повертають актуальний результат
запиту. Щоб отримати кількість рядів, оброблених функціями INSERT,
UPDATE, REPLACE та DELETE, використовуйте функцію
[mysql_affected_rows()](function.mysql-affected-rows.md).

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Кількість рядів в результаті запиту у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_num_rows()****

` <?php$link u003d mysql_connect("localhost", "mysql_user", "mysql_password"); mysql_select_db("database", $link);$result u003d mysql_query("SELECT * FROM table1", $link); u003d mysql_num_rows($result);echo "Отримано $num_rows рядів
";?> `

### Примітки

> **Примітка**:
>
> При використанні
> [mysql_unbuffered_query()](function.mysql-unbuffered-query.md)
> функція **mysql_num_rows()** не поверне коректного значення до тих
> доки всі ряди не будуть отримані.

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_numrows()**

### Дивіться також

- [mysql_affected_rows()](function.mysql-affected-rows.md) -
Повертає число порушених минулою операцією рядів
- [mysql_connect()](function.mysql-connect.md) - Відкриває
з'єднання з сервером MySQL
- [mysql_data_seek()](function.mysql-data-seek.md) - Переміщує
внутрішній покажчик в результаті запиту
- [mysql_select_db()](function.mysql-select-db.md) - Вибирає базу
даних MySQL
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
