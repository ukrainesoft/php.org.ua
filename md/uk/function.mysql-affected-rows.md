- [«MySQL](ref.mysql.md)
- [mysql_client_encoding »](function.mysql-client-encoding.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає число порушених минулою операцією рядів

# mysql_affected_rows

(PHP 4, PHP 5)

mysql_affected_rows — Повертає кількість порушених минулою операцією
рядів

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_affected_rows()](mysqli.affected-rows.md)
- [PDOStatement::rowCount()](pdostatement.rowcount.md)

### Опис

**mysql_affected_rows**(resource `$link_identifier` u003d NULL): int

Повертає кількість рядів, порушених останнім INSERT, UPDATE,
REPLACE або DELETE запитом, пов'язаним із дескриптором `link_identifier`.

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

Повертає кількість змінених записів у разі успішного виконання,
і -1 якщо останній запит не вдався.

Якщо останній запит був DELETE без вказівки WHERE і, відповідно,
таблиця була очищена, функція поверне нуль у всіх версіях MySQL до
4.1.2.

При використанні UPDATE, MySQL не оновить колонки, які вже містять нове
значення. Внаслідок цього, функція **mysql_affected_rows()** не завжди
повертає кількість рядів, що підійшли під умови, лише кількість
рядів, оновлених запитом.

Запит REPLACE спочатку видаляє запис із зазначеним первинним ключем, а
потім вставляє нову. Ця функція повертає кількість віддалених
записів разом із кількістю вставлених.

У разі використання запитів типу "INSERT... ON DUPLICATE KEY
UPDATE", що повертається значення дорівнюватиме `1` у випадку, якщо була
зроблена вставка, або `2` при оновленні існуючого ряду.

### Приклади

**Приклад #1 Приклад використання **mysql_affected_rows()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}mysql_select_db; /* тут функція верне коректне число віддалених записів */mysql_query('DELETE FROM mytable WHERE id < 10');printf("Видалено записів: %d
", mysql_affected_rows());/* якщо WHERE завжди повертає false, то функція повертає 0 */mysql_query('DELETE FROM mytable WHERE 0');printf("Уда
", mysql_affected_rows());?> `

Результатом виконання цього прикладу буде щось подібне:

Видалено записів: 10
Видалено записів: 0

**Приклад #2 Приклад використання **mysql_affected_rows()** з
транзакціями**

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}mysql_select_db; /* Оновлюємо ряди */mysql_query("UPDATE mytable SET|usedu003d1 WHERE id < 10");printf ("Оновлено записів: %d
", mysql_affected_rows()); mysql_query("COMMIT");?> `

Результатом виконання цього прикладу буде щось подібне:

Оновлено записів: 10

### Примітки

> **Примітка**: **Транзакції**
>
> При використанні транзакцій **mysql_affected_rows()** потрібно викликати
> після запитів INSERT, UPDATE, DELETE, але з COMMIT.

> **Примітка**: **Запити SELECT**
>
> Щоб отримати кількість рядів, повернутих SELECT-запитом,
> використовуйте [mysql_num_rows()](function.mysql-num-rows.md).

> **Примітка**: **Каскадні зовнішні ключі**
>
> **mysql_affected_rows()** не підраховує ряди, неявно змінені
> обмеженнями ON DELETE CASCADE та/або ON UPDATE CASCADE.

### Дивіться також

- [mysql_num_rows()](function.mysql-num-rows.md) - Повертає
кількість рядів результату запиту
- [mysql_info()](function.mysql-info.md) - Повертає інформацію про
останньому запиті
