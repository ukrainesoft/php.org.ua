- [«sqlsrv_get_field](function.sqlsrv-get-field.md)
- [sqlsrv_next_result »](function.sqlsrv-next-result.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Вказує, чи має зазначений оператор рядки

#sqlsrv_has_rows

(No version information available, might only be in Git)

sqlsrv_has_rows — Вказує, чи є вказаний оператор рядка

### Опис

**sqlsrv_has_rows**(resource `$stmt`): bool

Вказує, чи має зазначений оператор рядки.

### Список параметрів

`stmt`
Ресурс оператора, що повертається
[sqlsrv_query()](function.sqlsrv-query.md) або
[sqlsrv_execute()](function.sqlsrv-execute.md).

### Значення, що повертаються

Повертає **`true`**, якщо у зазначеному операторі є рядки та
**`false`**, якщо в операторі немає рядків або сталася помилка.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_has_rows()****

` <?php$server u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password" );$conn u003d sqlsrv_connect ( $server, $connectionInfo );$stmt u003d sqlsrv_query( $conn, "SELECT * FROM Table_1");if ($stmt) {   $rows u003d sqlsrv_has_rows if ($rows u003du003du003d true)      echo "Є рядки. <br />"; else      echo "Немає|рядків. <br />";}?> `

### Дивіться також

- [sqlsrv_num_rows()](function.sqlsrv-num-rows.md) - Отримує
кількість рядків у наборі результатів
- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
