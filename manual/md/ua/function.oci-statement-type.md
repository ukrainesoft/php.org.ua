- [«oci_set_prefetch](function.oci-set-prefetch.md)
- [oci_unregister_taf_callback
»](function.oci-unregister-taf-callback.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає тип виразу

#oci_statement_type

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_statement_type — Повертає тип виразу

### Опис

**oci_statement_type**(resource `$statement`): string\|false

Повертає вираз, що відповідає одному з типів параметра
`statement` OCI8.

### Список параметрів

`statement`
Допустимий ідентифікатор оператора OCI8, який повертається
[oci_parse()](function.oci-parse.md).

### Значення, що повертаються

Повертає тип параметра `statement`, який може бути одним з
нижченаведених значень:

| Значення, що повертається | Примітка |
|-----------------------|------------------------- -------------------|
| `ALTER` | |
| `BEGIN` | |
| `CALL` | Подано в PHP 5.2.1 (PECL OCI8 1.2.3) |
| `CREATE` | |
| `DECLARE` | |
| `DELETE` | |
| `DROP` | |
| `INSERT` | |
| `SELECT` | |
| `UPDATE` | |
| `UNKNOWN` | |

**Тип оператора**

Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_statement_type()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'DELETE FROM departments WHERE department_id u003d 130;';$; ) u003du003d "DELETE") {   trigger_error('Ви не маєте прав для удалення записів з таблиці', E_USER_ERROR);}else {    oci_execu; // видалити запис oci_free_statement($stid);oci_close($conn);?> `
