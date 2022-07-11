- [« mysql_real_escape_string](function.mysql-real-escape-string.md)
- [mysql_select_db »](function.mysql-select-db.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає дані результату запиту

# mysql_result

(PHP 4, PHP 5)

mysql_result — Повертає дані результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_data_seek()](mysqli-result.data-seek.md) у зв'язці з
[mysqli_field_seek()](mysqli-result.field-seek.md) та
[mysqli_fetch_field()](mysqli-result.fetch-field.md)
- [PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md)

### Опис

**mysql_result**(resource `$result`, int `$row`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field` u003d 0): string

Повертає вміст одного поля з набору MySQL.

Працюючи з великими результатами запитів, слід використати одну з
функцій, що обробляють одночасно цілий ряд результату (зазначені нижче). Так
як ці функції повертають значення декількох осередків відразу, вони НАМНОГО
швидше **mysql_result()**. Крім того, врахуйте, що вказівка чисельного
зміщення працює набагато швидше, ніж вказівка колонки, або колонки з
таблиці через точку.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`row`
Номер одержуваного ряду результату. Нумерація рядів починається з `0`.

`field`
Ім'я або зміщення одержуваного поля.

Можливо як зміщенням поля, іменем поля, і ім'ям поля разом з
таблицею (таблиця.поле). Якщо для поля було вказано псевдонім (select foo
as bar from...'), використовуйте його замість імені поля. Якщо не
вказано, повертається перше поле.

### Значення, що повертаються

Вміст одного поля з набору результату MySQL у разі успішного
виконання, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_result()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}if (!my ')) {    die('Помилка вибору бази даних: ' . mysql_error());}$result u003d mysql_query('SELECT name FROM work.employee');if (!$result)  | . mysql_error());}echo mysql_result($result, 2); // виведе ім'я третього співробітника mysql_close($link);?> `

### Примітки

> **Примітка**:
>
> Виклики функції **mysql_result()** не повинні змішуватись з іншими
> функціями, що працюють із результатом запиту.

### Дивіться також

- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [mysql_fetch_array()](function.mysql-fetch-array.md) -
Обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_fetch_object()](function.mysql-fetch-object.md) -
Обробляє ряд результату запиту та повертає об'єкт
