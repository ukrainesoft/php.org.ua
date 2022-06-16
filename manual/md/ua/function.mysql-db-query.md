- [«mysql_db_name](function.mysql-db-name.md)
- [mysql_drop_db »](function.mysql-drop-db.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Перемикається на вказану базу даних та надсилає запит

# mysql_db_query

(PHP 4, PHP 5)

mysql_db_query — Перемикається на вказану базу даних та посилає
запит

**Увага**

Ця функція оголошена застарілою в PHP 5.3.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_select_db()](mysqli.select-db.md) then the query
- [PDO::\_\_construct()](pdo.construct.md)

### Опис

**mysql_db_query**(string `$database`, string `$query`, resource
`$link_identifier` u003d NULL): resource\|bool

**mysql_db_query()** вибирає базу даних та виконує запит до неї.

### Список параметрів

`database`
Ім'я бази даних, яку відбудеться переключення.

`query`
Запит MySQL.

Дані у запиті мають бути [коректно
проекрановані](function.mysql-real-escape-string.md).

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає ресурс результату запиту до MySQL або **`false`** у разі
виникнення помилки. Функція також повертає **`true`**/**`false`**
для `INSERT`/`UPDATE`/`DELETE` запитів для індикації успіху/провалу.

### Приклади

**Приклад #1 Приклад використання альтернативи **mysql_db_query()****

` <?phpif (!$link u003d mysql_connect('mysql_host', 'mysql_user', 'mysql_password')) {    echo 'Не удалося підключитися к mysql'; exit;}if(!mysql_select_db('mysql_dbname', $link)) {    echo 'Не удалося вибрати базу даних'; exit;}$sql    u003d 'SELECT foo FROM bar WHERE id u003d 42';$result u003d mysql_query($sql, $link);if (!$result) {    echo "Про|
";   echo 'MySQL Error: ' . mysql_error();    exit;}while ($row u003d mysql_fetch_assoc($result)) {    echo $row['fo'

### Примітки

> **Примітка**:
>
> Врахуйте, що ця функція *НЕ* перемикає з'єднання назад до
> Попередня база даних. Іншими словами, ви не можете використовувати цю
> функцію, щоб *тимчасово* переключитися на іншу базу даних та
> Виконати запит. Перейти назад вам доведеться вручну. Вкрай
> рекомендується використовувати синтаксис `database.table` у SQL-запитах
> або функцію [mysql_select_db()](function.mysql-select-db.md), замість
> Використання цієї функції.

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_select_db()](function.mysql-select-db.md) - Вибирає базу
даних MySQL
