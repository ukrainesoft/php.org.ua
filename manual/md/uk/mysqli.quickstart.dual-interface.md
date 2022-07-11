- [« Короткий посібник](mysqli.quickstart.md)
- [З'єднання »](mysqli.quickstart.connections.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- Процедурний та об'єктно-орієнтований інтерфейс

## Процедурний та об'єктно-орієнтований інтерфейс

Модуль mysqli надає подвійний інтерфейс програмісту.
Підтримуються як процедурна, так і об'єктно-орієнтована парадигми
програмування.

Користувачі, що переходять зі старого модуля mysql, можливо, віддадуть перевагу
процедурний інтерфейс. Він дуже схожий з інтерфейсом старого модуля, і в
У багатьох випадках функції відрізняються лише префіксом в імені. Деякі
mysqli-функції приймають дескриптор з'єднання першим аргументом,
на відміну від відповідних їм функцій старого модуля, які приймають
його як останній необов'язковий аргумент.

**Приклад #1 Простота переходу зі старого модуля mysql**

` <?php$mysqli u003d mysqli_connect("example.com", "user", "password", "database");$result u003d mysqli_query($mysqli, "SELECT 'Будь ласка, не використовуйте встаріший    ' AS _msg FROM DUAL");$row u003d mysqli_fetch_assoc($result);echo $row['_msg'];$mysql u003d mysql_connect("example.com", "user", "password");mysql_select_db ");$result u003d mysql_query("SELECT 'Використовуйте замого модуль mysqli.' AS _msg FROM DUAL", $mysql);$row u003d mysql_fetch_assoc($result);'ech>''

Результат виконання цього прикладу:

Будь ласка, не використовуйте застарілий модуль mysql у нових проектах. Використовуйте натомість модуль mysqli.

*Об'єктно-орієнтований інтерфейс*

Крім процедурного, користувачі можуть використовувати
об'єктно-орієнтований інтерфейс. Документація заточена саме під
об'єктний інтерфейс. Об'єктно-орієнтований інтерфейс пропонує
функції згруповані за метою їх застосування, що полегшує їх пошук та
освоєння. Тим не менш, у практичних прикладах до функцій наводиться
код для обох парадигм

Будь-яких принципових відмінностей у продуктивності між
інтерфейсів немає. Користувачі вільні у виборі інтерфейсу, базуючись
на особистих уподобаннях.

**Приклад #2 Об'єктно-орієнтований та процедурний інтерфейси**

` <?php$mysqli u003d mysqli_connect("example.com", "user", "password", "database");$result u003d mysqli_query($mysqli, "SELECT 'Світ, повний ' AS _msg $row u003d mysqli_fetch_assoc($result);echo $row['_msg'];$mysqli u003d new mysqli("example.com", "user", "password", "database");$result u003d $mysqli-> query("SELECT 'вибору, щоб угодити усім.' AS _msg FROM DUAL");$row u003d $result->fetch_assoc();echo $row['_msg']; `

Результат виконання цього прикладу:

Світ, повний вибору, щоб догодити всім.

Приклади в цьому посібнику будуть написані в об'єктному стилі через те,
що об'єктному підходу віддавалася перевага під час створення
документації.

*Змішування стилів*

Перемикатися між стилями програмування можна як завгодно часто і
в будь-який час, однак робити це не рекомендується, так як це
погіршує читаність коду та ускладнює його підтримку.

**Приклад #3 Поганий стиль програмування**

` <?php$mysqli u003d new mysqli("example.com", "user", "password", "database");$result u003d mysqli_query($mysqli, "SELECT 'Цей код працює, не   ' AS _msg FROM DUAL");if ($row u003d $result->fetch_assoc()) {    echo $row['_msg'];} `

Результат виконання цього прикладу:

Цей код працює, але краще не писати.

*Дивіться також*

- [mysqli::\_\_construct()](mysqli.construct.md)
- [mysqli::query()](mysqli.query.md)
- [mysqli_result::fetch_assoc()](mysqli-result.fetch-assoc.md)
- [$mysqli::connect_errno](mysqli.connect-errno.md)
- [$mysqli::connect_error](mysqli.connect-error.md)
- [$mysqli::errno](mysqli.errno.md)
- [$mysqli::error](mysqli.error.md)
- [Загальний опис функцій модуля MySQLi] (mysqli.summary.md)
