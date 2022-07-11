- [«db2_get_option](function.db2-get-option.md)
- [db2_lob_read »](function.db2-lob-read.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає автоматично згенерований ідентифікатор останнього
запиту на додавання, успішно виконаного в цьому з'єднанні

#db2_last_insert_id

(PECL ibm_db2 \>u003d 1.7.1)

db2_last_insert_id — Повертає автоматично згенерований
ідентифікатор останнього запиту на додавання, успішно виконаного в
цьому з'єднанні

### Опис

**db2_last_insert_id**(resource `$resource`): string

Повертає автоматично згенерований ідентифікатор останнього
запиту на додавання, успішно виконаного в цьому з'єднанні.

На результат цієї функції не впливає жодна з наступних:

- Оператор INSERT для одного рядка з VALUES для таблиці без стовпця
ідентифікаторів.

- Оператор INSERT для кількох рядків із VALUES.

- Оператор INSERT із повною вибіркою.

- оператор ROLLBACK TO SAVEPOINT.

### Список параметрів

`resource`
Допустимий ресурс підключення, що повертається
[db2_connect()](function.db2-connect.md) або
[db2_pconnect()](function.db2-pconnect.md). Значення цього параметра
може бути ресурсом оператора чи ресурсом набору результатів.

### Значення, що повертаються

Повертає автоматично згенерований ідентифікатор останнього
запиту на додавання, успішно виконаного в цьому з'єднанні.

### Приклади

**Приклад #1 Приклад використання **db2_last_insert_id()****

У наступному прикладі показано, як повернути автоматично згенерований
ідентифікатор останнього запиту на додавання, успішно виконаного в
це з'єднання.

` <?php$database u003d "SAMPLE";$user u003d "db2inst1";$password u003d "ibmdb2";$conn u003d db2_connect($database, $user, $password);if($conn) {      CREATE TABLE lastInsertID        (id integer GENERATED BY DEFAULT AS IDENTITY, name varchar(20))"; $insertTable u003d "INSERT INTO lastInsertID (name) VALUES ('Temp Name')"; $stmtu003du003d@db2_exec($conn,$createTable); /* Перевірка на вставку одного рядки. */   $stmtu003du003ddb2_exec($conn, $insertTable); $ret u003d  db2_last_insert_id($conn); if($ret) {        echo "Останній ідентифікатор : " . $ret . "
";    } else {         echo "Останній ідентифікатор відсутня.
";    }    db2_close($conn);}else {   echo "Помилка з'єднання.";}?> `

Результат виконання цього прикладу:

Останній ідентифікатор: 1
