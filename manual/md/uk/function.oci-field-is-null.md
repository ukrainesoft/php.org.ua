- [«oci_fetch](function.oci-fetch.md)
- [oci_field_name »](function.oci-field-name.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Перевіряє, чи рівне поле в поточному отриманому ряду рівним null

#oci_field_is_null

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_field_is_null — Перевіряє, чи дорівнює поле в отриманому поточному
ряду рівним **`null`**

### Опис

**oci_field_is_null**(resource `$statement`, string\|int `$column`):
bool

Перевіряє, чи є значення, передане в поле `column` з поточного
ряду `statement` рівним **`null`**.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

`column`
Може бути порядковий номер поля (з 1) або ім'я поля.

### Значення, що повертаються

Повертає **`true`**, якщо `column` дорівнює **`null`**, та **`false`**
якщо ні.

### Приклади

**Приклад #1 Приклад використання
[oci_field_name()](function.oci-field-name.md)**

`<?php//Створіть таблицю://CREATE TABLE mytab (c1 NUMBER);//   INSERT INTO mytab VALUES (1);//   INSERT INTO mytab  ", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stid u003d oci_parse($conn, "SELECT * FROM mytab");oci_execute($stid);while (($row u003d y OCI_RETURN_NULLS)) !u003d false) {   $ncols u003d oci_num_fields($stid); for ($col u003d 1; $col <u003d $ncols; $col++) {        var_dump(oci_field_is_null($stid, $col)); }}// Виведе //bool(false)//   bool(true)oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocicolumnisnull()](function.ocicolumnisnull.md). У PHP 5.0.0 і вище
> [ocicolumnisnull()](function.ocicolumnisnull.md) є аліасом
> **oci_field_is_null()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.
