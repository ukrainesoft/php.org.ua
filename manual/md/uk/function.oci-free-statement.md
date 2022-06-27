- [« oci_free_descriptor](function.oci-free-descriptor.md)
- [oci_get_implicit_resultset
»](function.oci-get-implicit-resultset.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Звільняє ресурси, які займає курсор або SQL-вираз.

#oci_free_statement

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_free_statement — Звільняє ресурси, які займає курсор або
SQL-виразом

### Опис

**oci_free_statement**(resource `$statement`): bool

Звільняє всі ресурси, які займає курсор або SQL-вираз, який
було повернено функцією [oci_parse()](function.oci-parse.md) або
отримано від сервера Oracle.

### Список параметрів

`statement`
Допустимий ідентифікатор виразу OCI.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
