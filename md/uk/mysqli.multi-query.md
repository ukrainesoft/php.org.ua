- [« mysqli::more_results](mysqli.more-results.md)
- [mysqli::next_result »](mysqli.next-result.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Виконує один або кілька запитів до бази даних

# mysqli::multi_query

# mysqli_multi_query

(PHP 5, PHP 7, PHP 8)

mysqli::multi_query -- mysqli_multi_query -- Виконує один або кілька
запитів до бази даних

### Опис

Об'єктно-орієнтований стиль

public **mysqli::multi_query**(string `$query`): bool

Процедурний стиль

**mysqli_multi_query**([mysqli](class.mysqli.md) `$mysql`, string
`$query`): bool

Запускає на виконання один або кілька запитів, перерахованих через
точку з комою.

Запити надсилаються асинхронно за один виклик бази даних, але база
даних обробляє їх послідовно. **mysqli_multi_query()** чекає
завершення першого запиту, перш ніж повернути керування PHP. Потім
сервер MySQL обробить наступний запит у послідовності. Як
тільки наступний результат буде готовий, MySQL чекатиме наступного
виконання [mysqli_next_result()](mysqli.next-result.md) з PHP.

Для обробки кількох запитів рекомендується використовувати
[Do-while] (control-structures.do.while.md). З'єднання буде зайнято до
до тих пір, поки всі запити не будуть завершені та їх результати не будуть
завантажені у PHP. Ніякий інший оператор не може бути виданий у тому ж
з'єднанні, доки не будуть оброблені всі запити. Щоб перейти до
наступного запиту у послідовності, використовуйте
[mysqli_next_result()](mysqli.next-result.md). Якщо наступний
результат ще не готовий, mysqli чекатиме відповіді від сервера MySQL.
Щоб перевірити, чи є результати, використовуйте
[mysqli_more_results()](mysqli.more-results.md).

Для запитів, які виробляють набір результатів, таких як
`SELECT, SHOW, DESCRIBE` або `EXPLAIN`,
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_store_result()](mysqli.store-result.md) може використовуватись
для одержання набору результатів. Для запитів, які не виробляють
набір результатів, ті ж функції можуть використовуватися для отримання
інформації, такої як кількість порушених рядків.

**Підказка**

Виконання запитів `CALL` для процедур, що зберігаються, може дати кілька
наборів результатів. Якщо процедура містить запити `SELECT`,
набори результатів повертаються у порядку, у якому створюються
під час виконання процедури. Загалом, функція, що викликає, не може знати,
скільки наборів результатів поверне процедура, і має бути готова
отримати кілька результатів. Кінцевий результат процедури – це
результат статусу, який включає набір результатів. Статус
показує, чи була процедура успішною чи помилка.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`query`
Рядок, що містить запити, які потрібно виконати. Кілька запитів
слід розділяти крапкою з комою.

**Увага**
# Попередження безпеки: SQL-ін'єкція

Якщо запит містить будь-які вхідні змінні, натомість слід
використовувати [підготовлювані
запросы](mysqli.quickstart.prepared-statements.md). В якості
альтернативи дані повинні бути правильно відформатовані та всі рядки
повинні бути екрановані за допомогою функції
[mysqli_real_escape_string()](mysqli.real-escape-string.md).

### Значення, що повертаються

Повертає **`false`**, якщо перший вираз викликав помилку. Щоб
отримати доступ до помилок інших підзапитів, потрібно спочатку викликати
функцію [mysqli_next_result()](mysqli.next-result.md).

### Приклади

**Приклад #1 Приклад використання **mysqli::multi_query()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d "SEL Name FROM City ORDER BYID LIMIT 20, 5";/* виконання декільких запитів */$mysqli->multi_query($query);do {    /* зберегти набір  ()) {        while ($row u003d $result->fetch_row()) {             printf("%s
", $row[0]);        }    }    /* вивести розділник */    if ($mysqli->more_results()) { f ------------
");    }} while ($mysqli->next_result()); `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT FROM City ORDER BY IDID LIMIT 20, 5";/* виконання кільках запитів */mysqli_multi_query($link, $query);do {    /* зберегти набір     while($row u003d mysqli_fetch_row($result)) {             printf("%s
", $row[0]);        }    }    /* вивести розділник */    if (mysqli_more_results($link)) { f ------------
");    }} while(mysqli_next_result($link)); `

Результатом виконання даних прикладів буде щось подібне:

my_user@localhost
-----------------
Amersfoort
Maastricht
Dordrecht
Leiden
Haarlemmermeer

### Дивіться також

- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_next_result()](mysqli.next-result.md) - Підготовка
наступного доступного результуючого набору з multi_query
- [mysqli_more_results()](mysqli.more-results.md) - Перевірка, є
ще результати в мультизапиті
