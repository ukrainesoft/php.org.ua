- [« oci_field_is_null](function.oci-field-is-null.md)
- [oci_field_precision »](function.oci-field-precision.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає ім'я поля з результату запиту

#oci_field_name

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_field_name — Повертає ім'я поля з результату запиту

### Опис

**oci_field_name**(resource `$statement`, string\|int `$column`):
string\|false

Повертає ім'я поля `column` із результату запиту.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

`column`
Може бути номер поля (нумерація починається з 1) або ім'ям.

### Значення, що повертаються

Повертає ім'я у вигляді рядка або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **oci_field_name()****

` <?php// Создайте таблицу://   CREATE TABLE mytab (number_col NUMBER, varchar2_col varchar2(1),//                       clob_col CLOB, date_col DATE);$conn u003d oci_connect("hr", "hrpwd", "localhost/XE ");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stidu003du003doci_parse($conn, "SELECT * FROM mytab");oci_execute($stid, OCI_DESCRIBE_ONLY); // використовуйте OCI_DESCRIBE_ONLY, якщо не отримуєте данихecho "<table borderu003d\"1\">
";echo "<tr>";echo "<th>Name</th>";echo "<th>Type</th>";echo "<th>Length</th>";echo "</tr >
";$ncols u003d oci_num_fields($stid);for ($i u003d 1; $i <u003d $ncols; $i++) {    $column_name  u003d oci_field_name($stid, $i)| $| i);   echo "<tr>";    echo "<td>$column_name</td>";   echo "<td>$column_type</td>";   echo "</tr>
";}echo "</table>
";// Выведет://    Name           Type//    NUMBER_COL    NUMBER//    VARCHAR2_COL  VARCHAR2//    CLOB_COL      CLOB//    DATE_COL      DATEoci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocicolumnname()](function.ocicolumnname.md). У PHP 5.0.0 і вище
> [ocicolumnname()](function.ocicolumnname.md) є аліасом
> **oci_field_name()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.

### Дивіться також

- [oci_num_fields()](function.oci-num-fields.md) - Повертає
кількість полів у результаті запиту
- [oci_field_type()](function.oci-field-type.md) - Повертає ім'я
типу поля
- [oci_field_size()](function.oci-field-size.md) - Повертає розмір
поля
