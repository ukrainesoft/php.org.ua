- [« mysql_list_processes](function.mysql-list-processes.md)
- [mysql_num_fields »](function.mysql-num-fields.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає перелік таблиць бази даних MySQL

# mysql_list_tables

(PHP 4, PHP 5)

mysql_list_tables — Повертає список таблиць бази даних MySQL

**Увага**

Ця функція оголошена застарілою в PHP 4.3.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- SQL запит: `SHOW TABLES FROM dbname`

### Опис

**mysql_list_tables**(string `$database`, resource `$link_identifier` u003d
NULL): resource \ | false

Повертає перелік імен таблиць бази даних MySQL.

Ця функція застаріла. Замість неї рекомендується використовувати
[mysql_query()](function.mysql-query.md) із запитом
`SHOW TABLES [FROM db_name] [LIKE 'pattern']`.

### Список параметрів

`database`
Ім'я бази даних

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Дескриптор результату (resource) у разі успішного виконання або
**`false`** у разі виникнення помилки.

Використовуйте функцію [mysql_tablename()](function.mysql-tablename.md)
для роботи з результатом запиту або будь-яку іншу функцію, здатну
це робити, наприклад,
[mysql_fetch_array()](function.mysql-fetch-array.md).

### Список змін

| Версія | Опис |
|--------|------------------------------|
| 4.3.7 | Функція позначена застарілою. |

### Приклади

**Приклад #1 Приклад використання **mysql_list_tables()****

` <?php$dbname u003d 'mysql_dbname';if (!mysql_connect('mysql_host', 'mysql_user', 'mysql_password')) {    echo 'Помилка підключення к mysql'; exit;}$sql u003d "SHOW TABLES FROM $dbname";$result u003d mysql_query($sql);if (!$result) {    echo "Помилка бази, не удалося отримати список табл
";   echo 'Помилка MySQL: ' . mysql_error();    exit;}while ($row u003d mysql_fetch_row($result)) {    echo ""Таблиця[ |
";} mysql_free_result($result);?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_listtables()**

### Дивіться також

- [mysql_list_dbs()](function.mysql-list-dbs.md) - Повертає список
баз даних, доступних на сервері
- [mysql_tablename()](function.mysql-tablename.md) - Повертає ім'я
таблиці, що містить вказане поле
