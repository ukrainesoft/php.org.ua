- [« SQLite3::loadExtension](sqlite3.loadextension.md)
- [SQLite3::openBlob »](sqlite3.openblob.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Відкрити базу даних SQLite

# SQLite3::open

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::open — Відкрити базу даних SQLite

### Опис

public **SQLite3::open**(string `$filename`, int `$flags` u003d
SQLITE3_OPEN_READWRITE\| SQLITE3_OPEN_CREATE, string `$encryptionKey` u003d
""): void

Відкриває базу даних SQLite 3. Якщо збірка включає шифрування, вона
пробуватиме використовувати ключ.

### Список параметрів

`filename`
Шлях до БД SQLite або `: memory:` для використання БД у пам'яті.

`flags`
Опціональні прапори використовувані визначення, як відкривати БД. за
за замовчуванням `SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE`.

- `SQLITE3_OPEN_READONLY`: Відкрити БД лише для читання.

- `SQLITE3_OPEN_READWRITE`: Відкрити БД для читання та запису.

- `SQLITE3_OPEN_CREATE`: Створити БД, якщо її немає.

`encryptionKey`
Опціональний ключ для використання шифрування при роботі з БД. Якщо
модуль шифрування не встановлений, то ця опція не буде використана.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SQLite3::open()****

` <?php/** * Простий приклад розширення класу SQLite3 і зміни параметрів конструктора. * Після чого використання методуopen для ініціалізації БД. */class MyDB extends SQLite3{    function __construct()    {        $this->open('mysqlitedb.db'); }}$db u003d new MyDB();$db->exec('CREATE TABLE foo (bar STRING)');$db->exec("INSERT INTO foo (bar) VALUES ('This is a test') );$result u003d $db->query('SELECT bar FROM foo');var_dump($result->fetchArray());?> `
