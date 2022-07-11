- [« mysql_list_tables](function.mysql-list-tables.md)
- [mysql_num_rows »](function.mysql-num-rows.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає кількість полів результату запиту

# mysql_num_fields

(PHP 4, PHP 5)

mysql_num_fields — Повертає кількість полів результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_num_fields()](mysqli-result.field-count.md)
- [PDOStatement::columnCount()](pdostatement.columncount.md)

### Опис

**mysql_num_fields**(resource `$result`): int\|false

Повертає кількість полів у результаті запиту.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Повертає кількість полів у результаті запиту (resource) у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_num_fields()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Не удалося виконати запрос: . mysql_error(); exit;}/* повертає 2, так як id,email u003du003du003d двом полям */echo mysql_num_fields($result);?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_numfields()**

### Дивіться також

- [mysql_select_db()](function.mysql-select-db.md) - Вибирає базу
даних MySQL
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_fetch_field()](function.mysql-fetch-field.md) - Повертає
інформацію про колонку з результату запиту як об'єкта
- [mysql_num_rows()](function.mysql-num-rows.md) - Повертає
кількість рядів результату запиту
