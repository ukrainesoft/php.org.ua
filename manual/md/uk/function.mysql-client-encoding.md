- [« mysql_affected_rows](function.mysql-affected-rows.md)
- [mysql_close »](function.mysql-close.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає кодування з'єднання

# mysql_client_encoding

(PHP 4 u003d 4.3.0, PHP 5)

mysql_client_encoding — Повертає кодування з'єднання

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_character_set_name()](mysqli.character-set-name.md)

### Опис

**mysql_client_encoding**(resource `$link_identifier` u003d NULL): string

Повертає значення змінної MySQL `character_set`.

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

Повертає кодування для цього з'єднання за промовчанням.

### Приклади

**Приклад #1 Приклад використання **mysql_client_encoding()****

` <?php$link    u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');$charset u003d mysql_client_encoding($link);echo "Поточне кодування: $charset
";?> `

Результатом виконання цього прикладу буде щось подібне:

Поточне кодування: latin1

### Дивіться також

- [mysql_set_charset()](function.mysql-set-charset.md) -
Встановлює кодування клієнта
- [mysql_real_escape_string()](function.mysql-real-escape-string.md) -
Екранує спеціальні символи в рядках для використання в
виразах SQL
