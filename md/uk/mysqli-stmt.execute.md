- [« mysqli_stmt::$error](mysqli-stmt.error.md)
- [mysqli_stmt::fetch »](mysqli-stmt.fetch.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Виконує підготовлене затвердження

# mysqli_stmt::execute

# mysqli_stmt_execute

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::execute -- mysqli_stmt_execute — Виконує підготовлене
затвердження

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::execute**(?array `$params` u003d **`null`**): bool

Процедурний стиль

**mysqli_stmt_execute**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, ?array `$params` u003d **`null`**): bool

Виконує заздалегідь підготовлене затвердження. Твердження має бути
успішно підготовлено перед виконанням з використанням функції
[mysqli_prepare()](mysqli.prepare.md) або
[mysqli_stmt_prepare()](mysqli-stmt.prepare.md), або шляхом передачі
другого аргументу в
[mysqli_stmt::\_\_construct()](mysqli-stmt.construct.md).

Якщо виконуються запити `UPDATE`, `DELETE`, або `INSERT`, то кількість
змінених рядків можна визначити функцією
[mysqli_stmt_affected_rows()](mysqli-stmt.affected-rows.md). Якщо
запит повертає набір результатів, його можна отримати за допомогою
функції [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) або
шляхом одержання рядково безпосередньо з оператора за допомогою функції
[mysqli_stmt_fetch()](mysqli-stmt.fetch.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`params`
Необов'язковий масив елементів (array) з кількістю елементів дорівнює
кількості пов'язаних параметрів у виконуваному SQL-запиті. кожне
Значення розглядається як рядок (string).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.1.0 | Додано необов'язковий параметр `params`. |

### Приклади

**Приклад #1 Виконання підготовленого оператора з прив'язкою
змінних**

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$mysqli->query("C> * Підготовляємо затвердження на вставку рядків */$stmt u003d $mysqli->prepare("INSERT INTO myCity (Name, CountryCode, District) VALIES з|?| >bind_param("sss", $val1, $val2, $val3);$val1 u003d 'Stuttgart';$val2 u003d 'DEU';$val3 u003d 'Baden-Wuerttemberg';/* Виконуємо Твердження| execute();$val1 u003d 'Bordeaux';$val2 u003d 'FRA';$val3 u003d 'Aquitaine';/* Виконуємо затвердження */$stmt->execute();/* Отримуємо всі рядки u003d "SELECT Name, CountryCode,District FROM myCity";$result u003d $mysqli->query($query);while ($row u003d $result->fetch_row()) {    printf("%s )
", $row[0], $row[1], $row[2]);} `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");mysqli_query( ТОР'яC  CRY затвердження на вставку рядків */$stmt u003d mysqli_prepare($link, "INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)");/* З'єднаються sss", $val1, $val2, $val3);$val1 u003d 'Stuttgart';$val2 u003d 'DEU';$val3 u003d 'Baden-Wuerttemberg';/* Виконуємо затвердження */mysqli_stm$ u003d 'Bordeaux';$val2 u003d 'FRA';$val3 u003d 'Aquitaine';/* Виконуємо затвердження */mysqli_stmt_execute($stmt);/* Отримуємо всі рядки з myC  FROM myCity";$result u003d mysqli_query($link, $query);while ($row u003d mysqli_fetch_row($result)) {    printf("%s (%s,%s)
", $row[0], $row[1], $row[2]);} `

Результат виконання даних прикладів:

Stuttgart (DEU, Baden-Wuerttemberg)
Bordeaux (FRA, Aquitaine)

**Приклад #2 Виконання підготовленого оператора з масивом значень**

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli('localhost', 'my_user', 'my_password', 'world');$mysqli->query('C * Підготовляємо затвердження на вставку рядків */$stmt u003d $mysqli->prepare('INSERT INTO myCity (Name, CountryCode, District) values іж| (['Stuttgart', 'DEU', 'Baden-Wuerttemberg']);/* Отримуємо всі рядки з myCity */$query u003d 'SELECT Name, CountryCode, District FROM myCity'; $query);while ($row u003d $result->fetch_row()) {    printf("%s (%s,%s)
", $row[0], $row[1], $row[2]);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MySQLI_REPORT_STRICT); затвердження на вставку рядок */$stmt u003d mysqli_prepare($link, 'INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)');/* St_t|t ', 'DEU', 'Baden-Wuerttemberg']);/* Отримуємо всі рядки з myCity */$query u003d 'SELECT Name, CountryCode, District FROM myCity';$result u003d$| ($row u003d mysqli_fetch_row($result)) {    printf("%s (%s,%s)
", $row[0], $row[1], $row[2]);} `

Результат виконання даних прикладів:

Stuttgart (DEU, Baden-Wuerttemberg)

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) - Прив'язка
змінних до параметрів запиту, що готується
- [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) - Отримує
результат із підготовленого запиту як об'єкт mysqli_result
