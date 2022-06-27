- [«SQLite3::close](sqlite3.close.md)
- [SQLite3::createAggregate »](sqlite3.createaggregate.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Створює екземпляр об'єкта SQLite3 та відкриває з'єднання з базою

# SQLite3::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::\_\_construct — Створює екземпляр об'єкта SQLite3 та відкриває
з'єднання з базою

### Опис

public **SQLite3::\_\_construct**(string `$filename`, int `$flags` u003d
SQLITE3_OPEN_READWRITE\| SQLITE3_OPEN_CREATE, string `$encryptionKey` u003d
"")

Створює екземпляр SQLite3 і відкриває з'єднання з базою. Якщо
включено шифрування, з'являється можливість використання ключа.

### Список параметрів

`filename`
Шлях до SQLite бази або `:memory:`, для використання бази в оперативній
пам'яті. Якщо `filename` задати як порожній рядок, то буде створено
приватна тимчасова база даних на диску. Ця база даних буде видалена
відразу після закриття з'єднання з нею.

`flags`
Необов'язкові прапори для визначення типу відкриття бази даних. за
замовчуванням, використовується `SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE`.

- `SQLITE3_OPEN_READONLY`: Відкрити лише для читання.

- `SQLITE3_OPEN_READWRITE`: Відкрити для читання та запису.

- `SQLITE3_OPEN_CREATE`: Створити новий файл бази даних, якщо він
Відсутнє

`encryptionKey`
Необов'язковий ключ для шифрування/розшифрування бази даних. Якщо модуль
шифрування не встановлено, цей параметр буде проігнорований.

### Помилки

Викидає виняток [Exception](class.exception.md) у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------|
| 7.0.10 | Параметр `filename` можна задавати порожнім рядком для створення на диску приватної бази даних. |

### Приклади

**Приклад #1 Приклад використання **SQLite3::\_\_construct()****

` <?php$db u003d new SQLite3('mysqlitedb.db');$db->exec('CREATE TABLE foo (bar TEXT)');$db->exec("INSERT INTO foo (bar) VALUES (' This is a test')");$result u003d $db->query('SELECT bar FROM foo');var_dump($result->fetchArray());?> `
