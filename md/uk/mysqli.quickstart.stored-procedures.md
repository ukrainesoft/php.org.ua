- [« Підготовка
запити](mysqli.quickstart.prepared-statements.md)
- [Множинні запити »](mysqli.quickstart.multiple-statement.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- Збережені процедури

## Збережені процедури

СУБД MySQL підтримує збережені процедури. Під цим терміном розуміється
послідовність операцій, що зберігається як єдине ціле в каталозі бази
даних на сервері. Програми можуть викликати та запускати збережені
процедури. Для запуску процедури використовується SQL вираз
`CALL`.

*Параметри*

Збережені процедури можуть мати параметри `IN`, `INOUT` та `OUT` в
Залежно від версії MySQL. Інтерфейс mysqli не робить відмінностей між
цими типами параметрів.

*Параметр IN*

Вхідні параметри вказуються усередині пропозиції `CALL`. При передачі
вхідних параметрів важливо переконатися, що їх значення коректні
екрановані.

**Приклад #1 Виклик збереженої процедури**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$mysqli->query("DROP PROCEDURE IF EXISTS p");$mysqli->query("CREATE PROCEDURE p(IN id_val INT) test(id) VALUES(id_val); END;");$mysqli->query("CALL p(1)");$result u003d $mysqli->query("SELECT id FROM test");var_dump($result ->fetch_assoc()); `

Результат виконання цього прикладу:

array(1) {
["id"]u003d>
string(1) "1"
}

*Параметр INOUT/OUT*

Значення параметрів `INOUT`/`OUT` доступні через змінні сесії.

**Приклад #2 Використання змінних сесії**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DR| $mysqli->query('CREATE PROCEDURE p(OUT msg VARCHAR(50)) BEGIN SELECT "Hi!" INTO msg; END;');$mysqli->query("SET @msg u003d ''); ->query("CALL p(@msg)");$result u003d $mysqli->query("SELECT @msg as _p_out");$row u003d $result->fetch_assoc();echo $row['_p_out' ]; `

Результат виконання цього прикладу:

Hi!

Розробники додатків та фреймворків можуть надати більш зручний
API, в якому поряд із сесійними змінними використовується перегляд
каталогів бази даних безпосередньо. Проте варто враховувати, що такий
підхід знижує швидкодію.

*Обробка результуючих наборів*

Процедури, що зберігаються, можуть повертати результуючі набори рядків. Таблиці
результатів роботи процедури, що зберігається, не можна коректно витягти
засобами [mysqli::query()](mysqli.query.md). Функція
[mysqli::query()](mysqli.query.md) виконує дві операції: запускає
запит і отримує перший результуючий набір, поміщаючи його в буфер.
Збережені процедури можуть повертати більше одного результуючого набору,
але при використанні [mysqli::query()](mysqli.query.md) всі вони, крім
перше, стануть недоступні користувачеві.

Результуючі таблиці процедур, що зберігаються, витягуються функціями
[mysqli::real_query()](mysqli.real-query.md) або
[mysqli::multi_query()](mysqli.multi-query.md). Обидві функції дозволяють
отримати будь-яку кількість результуючих наборів, повернутих
SQL-запитами, таких як `CALL`. Якщо в процесі роботи не вдається
витягти всі доступні результати виклику збереженої процедури, буде
Викликається помилка.

**Приклад #3 Вилучення результатів роботи процедури, що зберігається**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");$mysqli->query ("DROP PROCEDURE IF EXISTS p");$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 y| CALL p()");do {    if ($result u003d $mysqli->store_result()) {        printf("---
");    var_dump($result->fetch_all());       $result->free();    }} while ($mysqli->next_result());

Результат виконання цього прикладу:

---
array(3) {
[0]u003d>
array(1) {
[0]u003d>
string(1) "1"
}
[1]u003d>
array(1) {
[0]u003d>
string(1) "2"
}
[2]u003d>
array(1) {
[0]u003d>
string(1) "3"
}
}
---
array(3) {
[0]u003d>
array(1) {
[0]u003d>
string(1) "2"
}
[1]u003d>
array(1) {
[0]u003d>
string(1) "3"
}
[2]u003d>
array(1) {
[0]u003d>
string(1) "4"
}
}

*Використання запитів, що готуються*

Спеціальних засобів для вилучення даних під час використання
запитів, що готуються, не потрібно. Інтерфейси підготовлюваних та
Прості запити однакові. Однак, слід враховувати, що не всі версії
MYSQL підтримують підготовку у запиті SQL-виразу `CALL`.

**Приклад #4 Збережені процедури та запити, що готуються**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");$mysqli->query ("DROP PROCEDURE IF EXISTS p");$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 m| prepare("CALL p()");$stmt->execute();do {    if ($result u003d $stmt->get_result()) {        printf("---
");    var_dump($result->fetch_all());       $result->free();    }} while($stmt->next_result());

Результат виконання цього прикладу:

---
array(3) {
[0]u003d>
array(1) {
[0]u003d>
int(1)
}
[1]u003d>
array(1) {
[0]u003d>
int(2)
}
[2]u003d>
array(1) {
[0]u003d>
int(3)
}
}
---
array(3) {
[0]u003d>
array(1) {
[0]u003d>
int(2)
}
[1]u003d>
array(1) {
[0]u003d>
int(3)
}
[2]u003d>
array(1) {
[0]u003d>
int(4)
}
}

Зрозуміло, підтримується прив'язка результатів до об'єкта запиту.

**Приклад #5 Збережені процедури та запити, що готуються
використанням прив'язки результатів**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");$mysqli->query ("DROP PROCEDURE IF EXISTS p");$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 m| prepare("CALL p()");$stmt->execute();do {    if ($stmt->store_result()) {       $stmt->bind_result($id_out); while($stmt->fetch()) {            echo "id u003d $id_out
";        }    }} while($stmt->next_result());

Результат виконання цього прикладу:

id u003d 1
id u003d 2
id u003d 3
id u003d 2
id u003d 3
id u003d 4

*Дивіться також*

- [mysqli::query()](mysqli.query.md)
- [mysqli::multi_query()](mysqli.multi-query.md)
- [mysqli::next_result()](mysqli.next-result.md)
- [mysqli::more_results()](mysqli.more-results.md)
