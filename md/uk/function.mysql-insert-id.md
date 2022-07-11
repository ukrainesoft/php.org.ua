- [«mysql_info](function.mysql-info.md)
- [mysql_list_dbs »](function.mysql-list-dbs.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає ідентифікатор, згенерований за останнього
INSERT-запит

# mysql_insert_id

(PHP 4, PHP 5)

mysql_insert_id — Повертає ідентифікатор, згенерований при
останньому INSERT-запиті

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_insert_id()](mysqli.insert-id.md)
- [PDO::lastInsertId()](pdo.lastinsertid.md)

### Опис

**mysql_insert_id**(resource `$link_identifier` u003d NULL): int

Повертає ідентифікатор, згенерований колонкою з AUTO_INCREMENT
останнім запитом (зазвичай INSERT).

### Список параметрів

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Ідентифікатор згенерований колонкою з AUTO_INCREMENT останнім
запитом у разі успішного виконання, `0`, якщо останній запит не
генерує значення AUTO_INCREMENT value, і **`false`**, якщо з'єднання
MySQL не було встановлено.

### Приклади

**Приклад #1 Приклад використання **mysql_insert_id()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}mysql_select_db; mysql_query("INSERT INTO mytable (product) values ('kossu')");printf("Ідентифікатор останнього вставленого запису %d
", mysql_insert_id());?> `

### Примітки

**Застереження**

**mysql_insert_id()** конвертує повертається функцією MySQL C API тип
значення функції `mysql_insert_id()` у тип `long` (званий int в
PHP). Якщо ваша колонка AUTO_INCREMENT має тип BIGINT (64 біти), то
значення, що повертається функцією в результаті перетворення може бути
спотворено. Використовуйте замість цієї функції внутрішню функцію MySQL
LAST_INSERT_ID() у SQL-запиті. Докладніше про максимальні значення цілих
чисел дивіться в [розділі документації, присвяченому цілим
числам](language.types.integer.md).

> **Примітка**:
>
> Оскільки **mysql_insert_id()** працює з останнім виконаним
> запитом, викликайте **mysql_insert_id()** відразу після запиту,
> генерує нове значення.

> **Примітка**:
>
> Значення в SQL функції MySQL `LAST_INSERT_ID()` завжди містить
> останній згенерований ID і не обнулюється між запитами.

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_info()](function.mysql-info.md) - Повертає інформацію про
останньому запиті
