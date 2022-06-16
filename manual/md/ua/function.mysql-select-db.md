- [«mysql_result](function.mysql-result.md)
- [mysql_set_charset »](function.mysql-set-charset.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Вибирає базу даних MySQL

# mysql_select_db

(PHP 4, PHP 5)

mysql_select_db - Вибирає базу даних MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_select_db()](mysqli.select-db.md)
- [PDO::\_\_construct()](pdo.construct.md) (розділ про dsn)

### Опис

**mysql_select_db**(string `$database_name`, resource `$link_identifier`
u003d NULL): bool

Вибирає для роботи вказану базу даних на сервері, на який
посилається переданий дескриптор з'єднання. Кожен наступний виклик
функції [mysql_query()](function.mysql-query.md) буде працювати з
обраною базою даних.

### Список параметрів

`database_name`
Ім'я бази даних, що вибирається.

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_select_db()****

` <?php$link u003d Mysql_connect('localhost', Mysql_user', Mysql_password'); поточної бази даних $db_selectedu003dmysql_select_db('foo', $link);if (!$db_selected) {    die ('Не вдалося вибрати базу foo: ' . . mysql_error

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_selectdb()**

### Дивіться також

- [mysql_connect()](function.mysql-connect.md) - Відкриває
з'єднання з сервером MySQL
- [mysql_pconnect()](function.mysql-pconnect.md) - Встановлює
постійне з'єднання з сервером MySQL
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
