- [«oci_field_size](function.oci-field-size.md)
- [oci_field_type »](function.oci-field-type.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає вихідний тип поля Oracle

#oci_field_type_raw

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_field_type_raw — Повертає вихідний тип поля Oracle

### Опис

**oci_field_type_raw**(resource `$statement`, string\|int `$column`):
int\|false

Повертає тип "SQLT" Oracle поля `column`.

Якщо ви бажаєте отримати тип поля, то
[oci_field_type()](function.oci-field-type.md) підійде вам більше.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

`column`
Може бути номер поля (нумерація починається з 1) або ім'ям.

### Значення, що повертаються

Повертає вихідний тип Oracle у вигляді числа або **`false`** у випадку
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_field_type_raw()****

`<?php// Створити таблицю://   CREATE TABLE mytab (number_col NUMBER, varchar2_col varchar2(1), clob_col CLOB, date_col DATE);$conn u003d oci ;if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stidu003du003doci_parse($conn, 'select * from mytab');oci_execute($stid, OCI_DESCRIBE_ONLY); // використовуйте OCI_DESCRIBE_ONLY, якщо не отримуєте даних$n u003d oci_num_fields($stid);for ($i u003d 1; $i <u003d $n; ++$i) {     " - вихідний тип: " . oci_field_type_raw($stid, $i) . "<br>
";}// Выведет://    NUMBER_COL - исходный тип: 2//    VARCHAR2_COL - исходный тип: 1//    CLOB_COL - исходный тип: 112//    DATE_COL - исходный тип: 12oci_free_statement($stid);oci_close($conn); ?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocicolumntyperaw()](function.ocicolumntyperaw.md). У PHP 5.0.0 та
> вище [ocicolumntyperaw()](function.ocicolumntyperaw.md) є
> аліасом **oci_field_type_raw()**, тому ви можете продовжувати
> використовувати це ім'я, але це не рекомендується.
