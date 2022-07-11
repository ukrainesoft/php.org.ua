- [«mysql_connect](function.mysql-connect.md)
- [mysql_data_seek »](function.mysql-data-seek.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- створює базу даних MySQL

# mysql_create_db

(PHP 4, PHP 5)

mysql_create_db — Створює базу даних MySQL

**Увага**

Ця функція оголошена застарілою в PHP 4.3.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_query()](mysqli.query.md)
- [PDO::query()](pdo.query.md)

### Опис

**mysql_create_db**(string `$database_name`, resource `$link_identifier`
u003d NULL): bool

**mysql_create_db()** намагається створити базу даних на сервері, з яким
асоційований переданий дескриптор з'єднання.

### Список параметрів

`database_name`
Ім'я бази даних, що створюється.

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

**Приклад #1 Приклад створення бази даних MySQL**

Функція **mysql_create_db()** не рекомендується використовувати.
Переважно використовувати [mysql_query()](function.mysql-query.md)
із SQL-запитом створення бази даних `CREATE DATABASE`.

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}$sql u003d    ';if (mysql_query($sql, $link)) {   echo "База my_db успішно створена
";} else {    echo 'Помилка при створенні бази даних: ' . mysql_error() . ""
";}?> `

Результатом виконання цього прикладу буде щось подібне:

База my_db успішно створена

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_createdb()**

> **Примітка**:
>
> Ця функція не буде доступна, якщо модуль MySQL був скомпільований
> клієнтської бібліотеки MySQL версії 4.x.

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_select_db()](function.mysql-select-db.md) - Вибирає базу
даних MySQL
