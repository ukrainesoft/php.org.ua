- [«mysql_pconnect](function.mysql-pconnect.md)
- [mysql_query »](function.mysql-query.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Перевіряє з'єднання з сервером та переєднується за необхідності

# mysql_ping

(PHP 4 u003d 4.3.0, PHP 5)

mysql_ping - Перевіряє з'єднання з сервером і переєднується при
необхідності

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_ping()](mysqli.ping.md)

### Опис

**mysql_ping**(resource `$link_identifier` u003d NULL): bool

Перевіряє, чи з'єднання з сервером працює. Якщо воно втрачено,
автоматично робиться спроба переєднання. Ця функція може
бути використана у скриптах, що працюють протягом тривалого часу.

> **Примітка**:
>
> Автоматичне відновлення стандартного з'єднання вимкнено в
> версіях MySQL u003d> 5.0.3.

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

Повертає **`true`**, якщо з'єднання в робочому стані та **`false`**
в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **mysql_ping()****

` <?phpset_time_limit(0);$connu003du003dmysql_connect('localhost', 'mysqluser', 'mypass');$db   u003d Mysql_select_db('mydb');/* u003d mysql_query($sql);if (!$result) {   echo 'Запит #1 не удався, виходимо.'; exit;}/* Перевіряємо що з'єднання ще працює, якщо ні, з'єднуємося заново */if (!mysql_ping($conn)) {    echo 'З'єднання втрачено,' | exit;} mysql_free_result($result);/* З'єднання ще працює, виконуємо еще один запрос */$result2 u003d mysql_query($sql2);?> `

### Дивіться також

- [mysql_thread_id()](function.mysql-thread-id.md) - Повертає
ідентифікатор потоку
- [mysql_list_processes()](function.mysql-list-processes.md) -
Повертає список процесів MySQL
