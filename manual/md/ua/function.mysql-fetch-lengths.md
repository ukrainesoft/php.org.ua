- [« mysql_fetch_field](function.mysql-fetch-field.md)
- [mysql_fetch_object »](function.mysql-fetch-object.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає довжину кожного поля в результаті

# mysql_fetch_lengths

(PHP 4, PHP 5)

mysql_fetch_lengths — Повертає довжину кожного поля в результаті

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_lengths()](mysqli-result.lengths.md)
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)

### Опис

**mysql_fetch_lengths**(resource `$result`): array\|false

Повертає масив довжин для кожного поля, що міститься в останньому ряду
результату, отриманому з MySQL.

**mysql_fetch_lengths()** повертає довжини кожного поля, що міститься в
останньому ряду, обробленому функціями
[mysql_fetch_row()](function.mysql-fetch-row.md),
[mysql_fetch_assoc()](function.mysql-fetch-assoc.md),
[mysql_fetch_array()](function.mysql-fetch-array.md) та
[mysql_fetch_object()](function.mysql-fetch-object.md) у масиві,
починається з 0.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Масив (array) довжин у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_fetch_lengths()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Помилка виконання запиту: mysql_error(); exit;}$row     u003d mysql_fetch_assoc($result);$lengths u003d mysql_fetch_lengths($result);print_r($row);print_r($lengths);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[id] u003d> 42
[email] u003d> user@example.com
)
Array
(
[0] u003d> 2
[1] u003d> 16
)

### Дивіться також

- [mysql_field_len()](function.mysql-field-len.md) - Повертає
довжину вказаного поля
- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [strlen()](function.strlen.md) - Повертає довжину рядка
