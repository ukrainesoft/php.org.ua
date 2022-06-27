- [« oci_new_descriptor](function.oci-new-descriptor.md)
- [oci_num_rows »](function.oci-num-rows.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає кількість полів у результаті запиту

#oci_num_fields

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_num_fields — Повертає кількість полів через запит

### Опис

**oci_num_fields**(resource `$statement`): int

Отримує кількість стовпців у запиті, заданому в statement.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

### Значення, що повертаються

Повертає число порушених рядків як цілого числа (int).

### Приклади

**Приклад #1 Приклад використання **oci_num_fields()****

`<?php// Створіть таблицю://   CREATE TABLE mytab (id NUMBER, quantity NUMBER);$conn u003d oci_connect("hr", "hrpwd", "localhost/XE")     m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stidu003du003doci_parse($conn, "SELECT * FROM mytab");oci_execute($stid, OCI_DESCRIBE_ONLY); // використовуйте OCI_DESCRIBE_ONLY, якщо не отримуєте даних$ncols u003d oci_num_fields($stid);for ($i u003d 1; $i <u003d $ncols; $i++) {   " " . oci_field_type($stid, $i) . "<br>
";}// Виведе: //   ID NUMBER//    QUANTITY NUMBERoci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocinumcols()](function.ocinumcols.md). У PHP 5.0.0 і вище
> [ocinumcols()](function.ocinumcols.md) є аліасом
> **oci_num_fields()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.
