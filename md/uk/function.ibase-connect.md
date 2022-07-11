- [« ibase_commit](function.ibase-commit.md)
- [ibase_db_info »](function.ibase-db-info.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Відкриває з'єднання з базою даних

# ibase_connect

(PHP 5, PHP 7 \< 7.4.0)

ibase_connect — Відкриває з'єднання з базою даних

### Опис

**ibase_connect**(
string `$database` u003d ?,
string `$username` u003d ?,
string `$password` u003d ?,
string `$charset` u003d ?,
int `$buffers` u003d ?,
int `$dialect` u003d ?,
string `$role` u003d ?,
int `$sync` u003d ?
): resource

Встановлює з'єднання із сервером Firebird/InterBase.

У разі повторного виклику **ibase_connect()** з тими самими аргументами
нове посилання не буде встановлено, натомість буде повернено
ідентифікатор вже відкритого посилання. Посилання на сервер буде закрито, як
тільки завершиться виконання скрипту, якщо вона не була закрита
раніше явним викликом [ibase_close()](function.ibase-close.md).

### Список параметрів

`database`
Аргумент `database` повинен бути коректним шляхом до файлу бази даних
сервер, на якому він знаходиться. Якщо сервер не є локальним,
перед ним має стояти префікс 'hostname:' (TCP/IP), 'hostname/port:'
(TCP/IP з сервером interbase на настроюваному порту TCP), '//hostname/'
(NetBEUI), залежно від протоколу з'єднання.

`username`
Ім'я користувача. Може бути встановлений за допомогою директиви
`ibase.default_user` `php.ini`.

`password`
Пароль для `username`. Може бути встановлений за допомогою директиви
`ibase.default_password` `php.ini`.

`charset`
`charset` є набором стандартних символів для бази даних.

`buffers`
`buffers` - це кількість буферів бази даних, що виділяються для кеша на
стороні сервера. Якщо 0 або не вказано, сервер вибирає свій власний
за замовчуванням.

`dialect`
`dialect` вибирає діалект SQL за замовчуванням для будь-якого оператора,
виконуваного у з'єднанні, за умовчанням він відповідає максимальному
із підтримуваних клієнтських бібліотек.

`role`
Функціонально лише з InterBase 5 та вище.

`sync`

### Значення, що повертаються

Повертає ідентифікатор посилання Firebird/InterBase у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Помилки

Якщо ви отримаєте якусь помилку, наприклад, "arithmetic exception,
numeric overflow, або string truncation. Cannot transliterate character
between character sets" (відбувається, коли ви намагаєтеся використати
деякі символи з наголосами), при використанні цього та після
[ibase_query()](function.ibase-query.md) ви повинні встановити набір
символів (наприклад, ISO8859_1 або поточний набір символів).

### Приклади

**Приклад #1 Приклад використання **ibase_connect()****

` <?php$host u003d 'localhost:/path/to/your.gdb';$dbh u003d ibase_connect($host, $username, $password);$stmt u003d 'SELECT * FROM tblname';$sth u003d iba $dbh, $stmt);while ($row u003d ibase_fetch_object($sth)) {    echo $row->email, "
";}ibase_free_result($sth);ibase_close($dbh);?> `

### Дивіться також

- [ibase_pconnect()](function.ibase-pconnect.md) - Відкриває
постійне з'єднання з базою даних InterBase
- [ibase_close()](function.ibase-close.md) - Закриває з'єднання з
базою даних InterBase
