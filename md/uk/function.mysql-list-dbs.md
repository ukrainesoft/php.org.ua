- [«mysql_insert_id](function.mysql-insert-id.md)
- [mysql_list_fields »](function.mysql-list-fields.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає список баз даних, доступних на сервері

# mysql_list_dbs

(PHP 4, PHP 5)

mysql_list_dbs — Повертає список баз даних, доступних на сервері

**Увага**

Ця функція оголошена застарілою в PHP 5.4.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- SQL запит: `SHOW DATABASES`

### Опис

**mysql_list_dbs**(resource `$link_identifier` u003d NULL): resource

Повертає покажчик на результат, що містить список баз даних,
доступних на вказаному сервері.

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

Повертає resource результату у разі успішного виконання, або
**`false`** у разі виникнення помилки. Використовуйте функцію
[mysql_tablename()](function.mysql-tablename.md), щоб отримати
дані з результату, або будь-яку іншу функцію, що працює з
результатами запитів, наприклад
[mysql_fetch_array()](function.mysql-fetch-array.md).

### Приклади

**Приклад #1 Приклад використання **mysql_list_dbs()****

` <?php// Без використання mysql_list_dbs()$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');$res u003d mysql_query("SHOW DATABASES")_sql($$ ) {    echo $row['Database'] . "
";}// Застаріло, починаючи с PHP 5.4.0$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');$db_list u003d mysql_list_dbs($link);while ($row ) {     echo $row->Database . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

database1
database2
database3

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_listdbs()**

### Дивіться також

- [mysql_db_name()](function.mysql-db-name.md) - Повертає назву
бази даних із виклику до mysql_list_dbs
- [mysql_select_db()](function.mysql-select-db.md) - Вибирає базу
даних MySQL
