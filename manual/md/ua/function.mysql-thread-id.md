- [« mysql_tablename](function.mysql-tablename.md)
- [mysql_unbuffered_query »](function.mysql-unbuffered-query.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає ідентифікатор потоку

# mysql_thread_id

(PHP 4 u003d 4.3.0, PHP 5)

mysql_thread_id — Повертає ідентифікатор потоку

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_thread_id()](mysqli.thread-id.md)

### Опис

**mysql_thread_id**(resource `$link_identifier` u003d NULL): int\|false

**mysql_thread_id()** повертає ідентифікатор потоку. Якщо
з'єднання втрачено і ви переєдналися за допомогою
[mysql_ping()](function.mysql-ping.md), то ідентифікатор потоку
зміниться. Це означає, що вам не слід отримувати цей
ідентифікатор та зберігати його для подальшого використання. Викликайте
функцію тоді, коли вам потрібен.

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

Ідентифікатор потоку у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_thread_id()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');$thread_id u003d mysql_thread_id($link);if ($thread_id){    printf("Ідентифікатор 
", $thread_id);}?> `

Результатом виконання цього прикладу буде щось подібне:

Ідентифікатор потоку: 73

### Дивіться також

- [mysql_ping()](function.mysql-ping.md) - Перевіряє з'єднання з
сервером і переєднується за необхідності
- [mysql_list_processes()](function.mysql-list-processes.md) -
Повертає список процесів MySQL
