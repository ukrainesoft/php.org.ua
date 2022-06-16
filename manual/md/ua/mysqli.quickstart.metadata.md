- [«API підтримка транзакцій](mysqli.quickstart.transactions.md)
- [Встановлення та налаштування »](mysqli.setup.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- Метадані

## Метадані

Результуючий набір MySQL містить метадані. Ці дані описують
стовпці результуючої таблиці. Усі відомості, які передає MySQL,
доступні через `mysqli` інтерфейс. Модуль не змінює отримані дані,
або ці зміни незначні. Відмінності між версіями MySQL також
можна не брати до уваги.

Метадані доступні через інтерфейс
[mysqli_result](class.mysqli-result.md).

**Приклад #1 Доступ до метаданих результуючої таблиці**

` <?php$mysqli u003d new mysqli("example.com", "user", "password", "database");if ($mysqli->connect_errno) {    echo "Не удалося підключитися до| mysqli->connect_errno . ") " . $mysqli->connect_error;}$res u003d $mysqli->query("SELECT 1 AS _one, 'Hello' AS _two FROM DUAL");var_dump($res->fetch_fields());?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
object(stdClass)#3 (13) {
["name"]u003d>
string(4) "_one"
["orgname"]u003d>
string(0) ""
["table"]u003d>
string(0) ""
["orgtable"]u003d>
string(0) ""
["def"]u003d>
string(0) ""
["db"]u003d>
string(0) ""
["catalog"]u003d>
string(3) "def"
["max_length"]u003d>
int(1)
["length"]u003d>
int(1)
["charsetnr"]u003d>
int(63)
["flags"]u003d>
int(32897)
["type"]u003d>
int(8)
["decimals"]u003d>
int(0)
}
[1]u003d>
object(stdClass)#4 (13) {
["name"]u003d>
string(4) "_two"
["orgname"]u003d>
string(0) ""
["table"]u003d>
string(0) ""
["orgtable"]u003d>
string(0) ""
["def"]u003d>
string(0) ""
["db"]u003d>
string(0) ""
["catalog"]u003d>
string(3) "def"
["max_length"]u003d>
int(5)
["length"]u003d>
int(5)
["charsetnr"]u003d>
int(8)
["flags"]u003d>
int(1)
["type"]u003d>
int(253)
["decimals"]u003d>
int(31)
}
}

*Підготовки запитів*

Метадані результуючих наборів, отриманих у результаті виконання
підготовлених запитів можна отримати аналогічним чином. Підходящий
дескриптор [mysqli_result](class.mysqli-result.md) можна отримати
функцією
[mysqli_stmt::result_metadata()](mysqli-stmt.result-metadata.md).

**Приклад #2 Метадані підготовлених запитів**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$stmt u003d $mysql 'Hello' AS _two FROM DUAL");$stmt->execute();$result u003d $stmt->result_metadata();var_dump($result->fetch_fields()); `

*Дивіться також*

- [mysqli::query()](mysqli.query.md)
- [mysqli_result::fetch_fields()](mysqli-result.fetch-fields.md)
