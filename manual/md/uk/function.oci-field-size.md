- [«oci_field_scale](function.oci-field-scale.md)
- [oci_field_type_raw »](function.oci-field-type-raw.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає розмір поля

#oci_field_size

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_field_size — Повертає розмір поля

### Опис

**oci_field_size**(resource `$statement`, string\|int `$column`):
int\|false

Повертає розмір поля `column`.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

`column`
Може бути номер поля (нумерація починається з 1) або ім'ям.

### Значення, що повертаються

Повертає розмір поля `column` у байтах або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_field_size()****

` <?php// Создайте таблицу://   CREATE TABLE mytab (number_col NUMBER, varchar2_col varchar2(1),//                       clob_col CLOB, date_col DATE);$conn u003d oci_connect("hr", "hrpwd", "localhost/XE ");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stidu003du003doci_parse($conn, "SELECT * FROM mytab");oci_execute($stid, OCI_DESCRIBE_ONLY); // // використовуйте OCI_DESCRIBE_ONLY, якщо не отримуєте данихecho "<table borderu003d\"1\">
";echo "<tr>";echo "<th>Name</th>";echo "<th>Type</th>";echo "<th>Length</th>";echo "</tr >
";$ncols u003d oci_num_fields($stid);for ($i u003d 1; $i <u003d $ncols; $i++) {    $column_name  u003d oci_field_name($stid, $i)| $| i);   $column_size  u003d oci_field_size($stid, $i);   echo "<tr>";   echo "<td>$column_name</td>";   echo>  <td>$column_size</td>";    echo "</tr>
";}echo "</table>
";// Выведет://    Name           Type       Length//    NUMBER_COL    NUMBER        22//    VARCHAR2_COL  VARCHAR2       1//    CLOB_COL      CLOB        4000//    DATE_COL      DATE           7oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocicolumnsize()](function.ocicolumnsize.md). У PHP 5.0.0 і вище
> [ocicolumnsize()](function.ocicolumnsize.md) є аліасом
> **oci_field_size()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.

### Дивіться також

- [oci_num_fields()](function.oci-num-fields.md) - Повертає
кількість полів у результаті запиту
- [oci_field_name()](function.oci-field-name.md) - Повертає ім'я
поля з результату запиту
