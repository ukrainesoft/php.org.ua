- [« Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- [cubrid_client_encoding »](function.cubrid-client-encoding.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Кількість рядків, порушених останнім SQL-запитом

#cubrid_affected_rows

(PECL CUBRID u003d 8.3.0)

cubrid_affected_rows — Кількість рядків, зачеплених останнім
SQL-запитом

### Опис

**cubrid_affected_rows**(resource `$conn_identifier` u003d ?): int

**cubrid_affected_rows**(resource `$req_identifier` u003d ?): int

Функція **cubrid_affected_rows()** використовується для отримання кількості
рядків, порушених останнім SQL-запитом типу INSERT, DELETE чи UPDATE.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання CUBRID. Якщо не задано, то використовуватиметься
останнє відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

`req_identifier`
Ідентифікатор запиту повинен бути повернутий функціями
[cubrid_prepare()](function.cubrid-prepare.md) або
[cubrid_execute()](function.cubrid-execute.md). Якщо не заданий, то
буде використано останній запит, повернутий
[cubrid_prepare()](function.cubrid-prepare.md) або
[cubrid_execute()](function.cubrid-execute.md).

### Значення, що повертаються

Кількість рядків, порушених останнім SQL-запитом, у разі успішного
виконання.

-1, якщо запит не був типом INSERT, DELETE або UPDATE.

**`false`**, якщо ідентифікатор запиту не вказано та відсутні
будь-які виконані запити.

### Приклади

**Приклад #1 Приклад використання **cubrid_affected_rows()****

` <?php$conn u003d cubrid_connect('localhost', 33000, 'demodb', 'dba', '');cubrid_execute($conn, "DROP TABLE IF EXISTS cubrid_test");cubrid (d varchar)");$sql_stmtu003du003d"INSERT INTO cubrid_test(d) VALUES('php-test')";$req u003d cubrid_prepare($conn, $sql_stmt);for ($i u003d 0; ; $i++) {    cubrid_execute($req);}cubrid_commit($conn);$req u003d cubrid_execute($conn, "DELETE FROM cubrid_test WHERE du003d'php-tes; var_dump(cubrid_affected_rows($conn));var_dump(cubrid_affected_rows($req));cubrid_disconnect($conn);print "done!";?> `

Результат виконання цього прикладу:

Rows deleted: 5

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
