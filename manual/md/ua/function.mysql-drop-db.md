- [«mysql_db_query](function.mysql-db-query.md)
- [mysql_errno»] (function.mysql-errno.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Знищує базу даних MySQL

# mysql_drop_db

(PHP 4, PHP 5)

mysql_drop_db — Знищує базу даних MySQL

**Увага**

Ця функція оголошена застарілою в PHP 4.3.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- Виконати запит `DROP DATABASE`

### Опис

**mysql_drop_db**(string `$database_name`, resource `$link_identifier` u003d
NULL): bool

**mysql_drop_db()** намагається знищити базу даних на сервері, на
який посилається на переданий дескриптор з'єднання. Ця функція
застаріла, використовуйте замість неї
[mysql_query()](function.mysql-query.md) із запитом `DROP DATABASE`.

### Список параметрів

`database_name`
Ім'я бази даних, що видаляється.

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

**Приклад #1 Альтернативний приклад використання **mysql_drop_db()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Не удалося підключитися к базе даних: ' . mysql 'DROP DATABASE my_db';if (mysql_query($sql, $link)) {    echo "База даних my_db була успішно віддалена
";} else {    echo 'Помилка при віддаленні бази даних: ' . mysql_error() . ""
";}?> `

### Примітки

**Увага**

Ця функція недоступна, якщо модуль був скомпілюваний із клієнтською
бібліотекою MySQL версії 4.x.

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_dropdb()**

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
