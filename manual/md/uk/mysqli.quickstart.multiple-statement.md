- [« Збережені процедури](mysqli.quickstart.stored-procedures.md)
- [API підтримка транзакцій »](mysqli.quickstart.transactions.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- Численні запити

## Множинні запити

MySQL підтримує наявність кількох SQL-запитів у тексті одного
запиту, але потребує особливого звернення. Пересилання на сервер кількох
виразів в одному запиті зменшує кількість клієнт-серверних
взаємодій, але потребує спеціальної обробки.

Множинні запити або мультизапити повинні запускатися функцією
[mysqli::multi_query()](mysqli.multi-query.md). Окремі
SQL-пропозиції у мультизапиті відокремлюються крапкою з комою. Після
виконання мультизапиту всі результуючі набори, які він повернув,
необхідно витягти.

MySQL-сервер підтримує наявність в одному мультизапиті підзапитів, як
повертають результуючий набір, що так і не повертають.

**Приклад #1 Множинні запити**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->query("DROP| $mysqli->query("CREATE TABLE test(id INT)");$sql u003d "SELECT COUNT(*) AS _num FROM test;                   ¦             ¦                Я    ¦          Я            Я‚ test; ";$mysqli->multi_query($sql);do {    if ($result u003d $mysqli->store_result()) {     | $result->free(); }} while ($mysqli->next_result()); `

Результат виконання цього прикладу:

array(1) {
[0]u003d>
array(1) {
["_num"]u003d>
string(1) "0"
}
}
array(1) {
[0]u003d>
array(1) {
["_num"]u003d>
string(1) "1"
}
}

*Розгляд аспектів безпеки*

Функції API [mysqli::query()](mysqli.query.md) та
[mysqli::real_query()](mysqli.real-query.md) під час роботи не
встановлюють на сервері спеціальний прапор, необхідний виконання
мультизапитів. Окрема API-функція для мультизапитів дозволяє
знизити можливість випадкових SQL-ін'єкцій. Зловмисник може
спробувати додати до кінця запиту висловлювання, начебто
`; DROP DATABASE mysql` або `; SELECT SLEEP(999)`. Якщо йому це вдасться,
але не буде використовуватись функція `mysqli::multi_query`, сервер не
виконає впроваджене та небезпечне SQL-вираз.

**Приклад #2 SQL-ін'єкція**

` <?php$mysqli u003d new mysqli("example.com", "user", "password", "database");$result u003d $mysqli->query("SELECT 1; DROP TABLE mysql.user"); if (!$result) {   echo "Помилка під час виконання запиту: (" . $mysqli->errno . ") " . $ mysqli->error;}?> `

Результат виконання цього прикладу:

Помилка під час виконання запиту: (1064) Ваша помилка в вашому SQL syntax;
check the manual that corresponds to your MySQL server version for the right syntax
to use near 'DROP TABLE mysql.user' at line 1

*Підготовки запитів*

Використання безлічі виразів у запиті, що готується
підтримується.

*Дивіться також*

- [mysqli::query()](mysqli.query.md)
- [mysqli::multi_query()](mysqli.multi-query.md)
- [mysqli::next_result()](mysqli.next-result.md)
- [mysqli::more_results()](mysqli.more-results.md)
