- [« SQLite3::open](sqlite3.open.md)
- [SQLite3::prepare »](sqlite3.prepare.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Відкриває ресурс потоку для читання BLOB

# SQLite3::openBlob

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::openBlob — Відкриває ресурс потоку для читання BLOB

### Опис

public **SQLite3::openBlob**(
string `$table`,
string `$column`,
int `$rowid`,
string `$database` u003d "main",
int `$flags` u003d **`SQLITE3_OPEN_READONLY`**
): resource \ | false

Відкриває ресурс потоку для читання чи запису BLOB, який буде
обраний:

SELECT `column` FROM `database`.`table` WHERE rowid u003d `rowid`

> **Примітка**: Неможливо змінити розмір BLOB шляхом запису до потоку.
> Натомість необхідно виконати запит UPDATE, можливо, використовуючи
> функцію SQLite zeroblob(), щоб задати бажаний розмір BLOB.

### Список параметрів

`table`
Назва таблиці.

`column`
Назва стовпця.

`rowid`
Ідентифікатор рядка.

`database`
Символічна назва бази даних

`flags`
Або **`SQLITE3_OPEN_READONLY`**, або **`SQLITE3_OPEN_READWRITE`**,
щоб відкрити потік тільки для читання або для читання та запису,
відповідно.

### Значення, що повертаються

Повертає ресурс потоку або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -|
| 7.2.0 | Доданий параметр `flags`, що дозволяє записати BLOB; раніше підтримувалося лише читання. |

### Приклади

**Приклад #1 Приклад використання **SQLite3::openBlob()****

` <?php$conn u003d new SQLite3(':memory:');$conn->exec('CREATE TABLE test (text text)');$conn->exec("INSERT INTO test VALUES ('Lorem ipsum') )");$stream u003d $conn->openBlob('test', 'text', 1);echo stream_get_contents($stream);fclose($stream); // обов'язково, інакше на наступному рядку відбудеться помилка$conn->close();?> `

Результат виконання цього прикладу:

Lorem ipsum

**Приклад #2 Покроковий запис BLOB**

` <?php$conn u003d new SQLite3(':memory:');$conn->exec('CREATE TABLE test (text text)');$conn->exec("INSERT INTO test VALUES (zeroblob(36) )");$stream u003d $conn->openBlob('test', 'text', 1, 'main', SQLITE3_OPEN_READWRITE);for ($i u003d 0; $i < 3; $i++) {$ ,  "Lorem ipsum
");}fclose($stream);echo $conn->querySingle("SELECT text FROM test");$conn->close();?> `

Результат виконання цього прикладу:

Lorem ipsum
Lorem ipsum
Lorem ipsum
