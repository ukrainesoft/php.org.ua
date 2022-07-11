- [«oci_num_fields](function.oci-num-fields.md)
- [oci_parse »] (function.oci-parse.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає кількість рядків, змінених у процесі виконання
запиту

#oci_num_rows

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_num_rows — Повертає кількість рядків, змінених у процесі
виконання запиту

### Опис

**oci_num_rows**(resource `$statement`): int\|false

Повертає кількість рядків, порушених у процесі виконання запиту.

### Список параметрів

`statement`
Ідентифікатор допустимого запиту OCI.

### Значення, що повертаються

Повертає число порушених рядків у вигляді integer або **`false`**
у разі виникнення помилки

### Приклади

**Приклад #1 Приклад використання **oci_num_rows()****

` <?php$conn u003d oci_connect("hr", "hrpwd", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stid u003d oci_parse($conn, "create table emp2 as select * from employees");oci_execute($stid); "Рядок" вставлено.
";oci_free_statement($stid);$stid u003d oci_parse($conn, "delete from emp2");oci_execute($stid, OCI_DEFAULT);echo oci_num_rows($stid) . строк >
";oci_commit($conn);oci_free_statement($stid);$stid u003d oci_parse($conn, "drop table emp2");oci_execute($stid);oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> Функція *не* повертає кількість рядків у результаті виразу
> SELECT! Для запитів SELECT **oci_num_rows()** поверне кількість
> рядків, які були прочитані в буфер за допомогою функцій
> **oci_fetch\*()**.

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocirowcount()](function.ocirowcount.md). У PHP 5.0.0 і вище
> [ocirowcount()](function.ocirowcount.md) є аліасом
> **oci_num_rows()**, тому ви можете продовжувати використовувати це ім'я,
> однак це не рекомендується.
