- [«mysql_ping](function.mysql-ping.md)
- [mysql_real_escape_string »](function.mysql-real-escape-string.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Надсилає запит MySQL

# mysql_query

(PHP 4, PHP 5)

mysql_query — Надсилає запит MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_query()](mysqli.query.md)
- [PDO::query()](pdo.query.md)

### Опис

**mysql_query**(string `$query`, resource `$link_identifier` u003d NULL):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**mysql_query()** посилає один запит (надсилка кількох запитів не
підтримується) активної бази даних сервера, на який посилається
переданий дескриптор `link_identifier`.

### Список параметрів

`query`
SQL-запит

Запит не повинен закінчуватися крапкою з комою. Дані у запиті повинні
бути [коректно
проекрановані](function.mysql-real-escape-string.md).

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Для запитів SELECT, SHOW, DESCRIBE, EXPLAIN та інших запитів,
що повертають результат з кількох рядів, **mysql_query()** повертає
дескриптор результату запиту (resource), або **`false`** у разі
виникнення помилки.

Для інших типів SQL-запитів, INSERT, UPDATE, DELETE, DROP та інших,
**mysql_query()** повертає **`true`** у разі успішного виконання та
**`false`** у разі виникнення помилки.

Отриманий дескриптор результату слід передати у функцію
[mysql_fetch_assoc()](function.mysql-fetch-assoc.md) або будь-яку іншу
функцію, що працює із результатами запитів.

Використовуйте [mysql_num_rows()](function.mysql-num-rows.md) для
з'ясування кількості рядів в результаті SELECT-запиту або
[mysql_affected_rows()](function.mysql-affected-rows.md) для з'ясування
кількості оброблених рядів запитами DELETE, INSERT, REPLACE та
UPDATE.

**mysql_query()** також завершиться з помилкою і поверне **`false`**, якщо
у користувача немає доступу до будь-якої з таблиць, що фігурують у
запит.

### Приклади

**Приклад #1 Неправильний запит**

Наступний запит складено неправильно і **mysql_query()** поверне
**`false`**.

` <?php$result u003d mysql_query('SELECT * WHERE 1 u003d 1');if (!$result) {    die('Невірний запит: ' . mysql_error());}?> `

**Приклад #2 Вірний запит**

Наступний запит є вірним, тому **mysql_query()** поверне resource.

` <?php//Ці дані, к прикладу, могли бути отримані від користувача$firstname u003d 'fred';$lastname  u003d 'fox';// Формуємо запрос// Ценай          ¦¦ в документации mysql_real_escape_string()$query u003d sprintf("SELECT firstname, lastname, address, age FROM friends    WHERE firstnameu003d'%s' AND lastnameu003d'%s'",    mysql_real_escape_string($firstname),    mysql_real_escape_string($lastname)); // Виконуємо запит$result u003d mysql_query($query);// Перевіряємо результат// Це показує реальний запит, посланий к MySQL, а також помилки. Зручно при налагодженні.if (!$result) {   $message  u003d 'Невірний запит: ' . mysql_error() . "
";    $message .u003d 'Запит цілком: ' . $query;   die($message);}// Використовуємо результат// Спроба інформацію , працюючу з результатом запиту// Дивіться також mysql_result(), mysql_fetch_array(), mysql_fetch_row() і т.п.while ($row u003d mysql_fetch_   'lastname'];    echo $row['address'];   echo $row['age'];}// Звільняємо ресурси, асоційовані з результатом// Це робиться автоматично 

### Дивіться також

- [mysql_connect()](function.mysql-connect.md) - Відкриває
з'єднання з сервером MySQL
- [mysql_error()](function.mysql-error.md) - Повертає текст помилки
останньої операції з MySQL
- [mysql_real_escape_string()](function.mysql-real-escape-string.md) -
Екранує спеціальні символи в рядках для використання в
виразах SQL
- [mysql_result()](function.mysql-result.md) - Повертає дані
результату запиту
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_unbuffered_query()](function.mysql-unbuffered-query.md) -
Надсилає запит MySQL без авто-обробки результату та його
буферизації
