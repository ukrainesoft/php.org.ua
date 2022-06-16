- [« Oracle (PDO)] (ref.pdo-oci.md)
- [ODBC та DB2 (PDO) »](ref.pdo-odbc.md)

- [PHP Manual](index.md)
- [Oracle (PDO)] (ref.pdo-oci.md)
- З'єднання з базою даних Oracle

# PDO_OCI DSN

(PECL PDO_OCI \>u003d 0.1.0)

PDO_OCI DSN — З'єднання з базою даних Oracle

### Опис

Рядок підключення (Data Source Name, DSN) PDO_OCI складається з наступних
елементів:

Префікс DSN
**`oci:`**.

`dbname` (Oracle Instant Client)
URI для Oracle Instant Client має вигляд
`dbnameu003d//hostname:port-number/database`. Якщо ви з'єднуєтеся з базою
даних, вказаних у `tnsnames.ora`, то ви можете використовувати тільки її
Ім'я: `dbnameu003ddatabase`.

`charset`
Кодування за клієнта для заданого оточення.

### Приклади

**Приклад #1 Приклади використання PDO_OCI DSN**

Наступні приклади показують з'єднання з базою даних Oracle:

// З'єднання з базою даних, зазначеною в tnsnames.ora
oci:dbnameu003dmydb

// З'єднання з використанням Oracle Instant Client
oci:dbnameu003d//localhost:1521/mydb
