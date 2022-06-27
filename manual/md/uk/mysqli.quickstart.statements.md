- [«З'єднання](mysqli.quickstart.connections.md)
- [Запити, що готуються
»](mysqli.quickstart.prepared-statements.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- Виконання запитів

## Виконання запитів

За виконання запитів відповідають функції
[mysqli::query()](mysqli.query.md),
[mysqli::real_query()](mysqli.real-query.md) та
[mysqli::multi_query()](mysqli.multi-query.md). Найчастіше застосовується
функція [mysqli::query()](mysqli.query.md), оскільки вона виконує
відразу дві задачі: виконує запит та буферизує на клієнті результат
цього запиту (якщо є). Виклик [mysqli::query()](mysqli.query.md)
ідентичний послідовному виклику функцій
[mysqli::real_query()](mysqli.real-query.md) та
[mysqli::store_result()](mysqli.store-result.md).

**Приклад #1 Виконання запитів**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)"); `

*Буферизація результатів запиту*

Після виконання запиту результати можна отримати відразу, або
рахувати рядок за рядком з сервера. Буферизація набору результатів на
стороні клієнта дозволяє серверу якомога раніше вивільнити ресурси,
пов'язані із результатами запиту. Простіше кажучи, клієнти повільно
використовують набори результатів. Тому рекомендується використовувати
буферизовані набори результатів. [mysqli::query()](mysqli.query.md)
поєднує виконання запиту та буферизацію набору результатів.

PHP-програми можуть вільно оперувати даними всередині буферизованих
результуючих наборів. Швидка навігація рядками наборів обумовлена
тим, що набори повністю розміщуються у пам'яті клієнта. Слід
пам'ятати, що часто обробка результатів на клієнті простіше, ніж
засобами сервера.

**Приклад #2 Навігація по рядках буферизованої результуючої таблиці**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");$result u003d $mysqli ->query("SELECT id FROM test ORDER BY id ASC");echo "Зворотний порядок...
";for ($row_no u003d $result->num_rows - 1; $row_no >u003d 0; $row_no--) {    $result->data_seek($row_no);    $row u003d             id u003d " . $row['id'] . "
";}echo "Вихідний порядок рядків...
";foreach ($result as $row) {    echo " id u003d " . $row['id'] . "
";} `

Результат виконання цього прикладу:

Зворотній порядок...
id u003d 3
id u003d 2
id u003d 1
Вихідний порядок рядків...
id u003d 1
id u003d 2
id u003d 3

*Небуферизовані результуючі набори*

Якщо клієнтські ресурси обмежені, і водночас не потрібно
підтримувати низьке навантаження на сервер, можна використовувати не
буферизовані результуючі набори. Навігація за такими таблицями
неможлива, тому що так чи інакше мають бути оброблені всі рядки
набір.

**Приклад #3 Навігація по рядках небуферизованої результуючої
таблиці**

` <?php$mysqli->real_query("SELECT id FROM test ORDER BY id ASC");$result u003d $mysqli->use_result();echo "Порядок рядок в результуючому наборі...
";foreach ($result as $row) {    echo " id u003d " . $row['id'] . "
";} `

*Типи даних значень у результуючій таблиці*

Функції [mysqli::query()](mysqli.query.md),
[mysqli::real_query()](mysqli.real-query.md) та
[mysqli::multi_query()](mysqli.multi-query.md) призначені для
виконання запитів, що не готуються. На рівні протоколу
клієнт-серверної взаємодії MySQL за виконання запитів відповідають
команда `COM_QUERY` та текстовий протокол. Коли використовується текстовий
протокол, сервер MySQL перед відправкою клієнту перетворює всі дані в
результуючий набір текстових рядків. Це перетворення виконується
незалежно від типу даних SQL-стовпця результуючої таблиці.
Клієнтські бібліотеки mysql, у свою чергу, отримують усі дані,
приймаючи їх за рядки. На клієнті не проводиться жодного зворотного
перетворення до вихідних типів, всі дані, отримані програмою
залишаються PHP рядками.

**Приклад #4 Текстовий протокол за промовчанням повертає рядки**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT, label CHAR(1))");$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'a')");$ resultu003du003d$mysqli->query("SELECT id, label FROM test WHERE id u003d 1");$row u003d $result->fetch_assoc();printf("id u003d %s (%s)
", $row['id'], gettype($row['id']));printf("label u003d %s (%s)
", $row['label'], gettype($row['label'])); `

Результат виконання цього прикладу:

id u003d 1 (string)
label u003d a (string)

Якщо використовується бібліотека mysqlnd, можна увімкнути перетворення
цілісних значень і чисел з плаваючою точкою зі стовпців таблиці
PHP числа. Робиться це завданням налаштування підключення
**`MYSQLI_OPT_INT_AND_FLOAT_NATIVE`**. У такому разі mysqlnd буде
перевіряти метадані стовпців і перетворювати SQL-числа цих полів на
PHP числа, якщо ці значення не виходять за рамки допустимих діапазонів
типів даних PHP. Тобто, наприклад, SQL INT число потрапить до PHP
додаток у вигляді цілого (integer).

**Приклад #5 Отримання вихідних типів даних у додатку**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli();$mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE,"",", database");$mysqli->query("DROP TABLE IF EXISTS test");$mysqli->query("CREATE TABLE test(id INT, label CHAR(1))");$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'a')");$result u003d $mysqli->query("SELECT id, label FROM test WHERE id u003d 1");$row u003d $result-> );printf("idu003du003d%s|(%s)
", $row['id'], gettype($row['id']));printf("label u003d %s (%s)
", $row['label'], gettype($row['label'])); `

Результат виконання цього прикладу:

id u003d 1 (integer)
label u003d a (string)

*Дивіться також*

- [mysqli::\_\_construct()](mysqli.construct.md)
- [mysqli::options()](mysqli.options.md)
- [mysqli::real_connect()](mysqli.real-connect.md)
- [mysqli::query()](mysqli.query.md)
- [mysqli::multi_query()](mysqli.multi-query.md)
- [mysqli::use_result()](mysqli.use-result.md)
- [mysqli::store_result()](mysqli.store-result.md)
