- [«SQLite3](class.sqlite3.md)
- [SQLite3::busyTimeout »](sqlite3.busytimeout.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Резервне копіювання однієї бази даних до іншої

# SQLite3::backup

(PHP 7 \>u003d 7.4.0, PHP 8)

SQLite3::backup — Резервне копіювання однієї бази даних до іншої

### Опис

public **SQLite3::backup**([SQLite3](class.sqlite3.md) `$destination`,
string `$sourceDatabase` u003d "main", string `$destinationDatabase` u003d
"main"): bool

**SQLite3::backup()** копіює вміст однієї бази в іншу,
перезаписуючи вміст цільової основи. Це корисно як для створення
резервних копій, так і для копіювання in-memory баз у файл або з
файлу.

**Підказка**

Починаючи з SQLite 3.27.0 (07.02.2019) також можна використовувати
конструкцію `VACUUM INTO 'file.db';` для резервного копіювання бази
даних у новий файл.

### Список параметрів

`destination`
З'єднання з базою, відкрите за допомогою
[SQLite3::open()](sqlite3.open.md).

`sourceDatabase`
Назва бази даних. Для головної бази ``main'`, для тимчасової ``temp'`, або
ім'я, задане після ключового слова AS у виразі ATTACH для
приєднаних баз.

`destinationDatabase`
Аналогічно `sourceDatabase` але для `destinationDatabase`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Створення резервної копії існуючої бази**

` <?php// $conn is a connection to an already opened sqlite3 database$backup u003d new SQLite3('backup.sqlite');$conn->backup($backup);?> `
