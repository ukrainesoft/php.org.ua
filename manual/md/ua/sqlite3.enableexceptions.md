- [« SQLite3::createFunction](sqlite3.createfunction.md)
- [SQLite3::escapeString »](sqlite3.escapestring.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Включити викид виключень

# SQLite3::enableExceptions

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::enableExceptions — Включити викид виключень

### Опис

public **SQLite3::enableExceptions**(bool `$enable` u003d **`false`**): bool

Визначає, чи буде екземпляр [SQLite3](class.sqlite3.md) викидати
виключення чи попередження про помилку.

### Список параметрів

`enable`
Коли передано значення **`true`**, екземпляр
[SQLite3](class.sqlite3.md) та екземпляри
[SQLite3Stmt](class.sqlite3stmt.md) та
[SQLite3Result](class.sqlite3result.md), похідні від нього, будуть
викидати винятки у разі помилки.

Коли передано значення **`false`**, екземпляр
[SQLite3](class.sqlite3.md) та екземпляри
[SQLite3Stmt](class.sqlite3stmt.md) та
[SQLite3Result](class.sqlite3result.md), похідні від нього, будуть
генерувати попередження у разі виникнення помилки.

У будь-якому випадку код помилки та повідомлення, якщо вони є, будуть доступні
через [SQLite3::lastErrorCode()](sqlite3.lasterrorcode.md) та
[SQLite3::lastErrorMsg()](sqlite3.lasterrormsg.md) відповідно.

### Значення, що повертаються

Повертає старе значення; **`true`**, якщо винятки включені,
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **SQLite3::enableExceptions()****

` <?php$sqlite u003d new SQLite3(':memory:');try {   $sqlite->exec('create table foo'); $sqlite->enableExceptions(true); $sqlite->exec('create table bar');} catch (Exception $e) {   echo 'Впіймано виняток: ' . $e->getMessage();}?> `

Результатом виконання цього прикладу буде щось подібне:

Warning: SQLite3::exec(): поблизу "foo": syntax error in example.php on line 4
Впіймано виняток: near "bar": syntax error
