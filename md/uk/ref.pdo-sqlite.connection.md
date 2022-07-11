- [«SQLite (PDO)] (ref.pdo-sqlite.md)
- [PDO::sqliteCreateAggregate »](pdo.sqlitecreateaggregate.md)

- [PHP Manual](index.md)
- [SQLite (PDO)] (ref.pdo-sqlite.md)
- З'єднання з базою даних SQLite

#PDO_SQLITE DSN

(PHP 5 \>u003d 5.1.0, PHP 7, PECL PDO_SQLITE \>u003d 0.2.0)

PDO_SQLITE DSN — З'єднання з базою даних SQLite

### Опис

Ім'я джерела даних (Data Source Name, DSN) PDO_SQLITE складається з
наступних елементів:

DSN-префікс (SQLite 3)
DSN-префікс - це 'sqlite:'**.

- Для доступу до бази даних на диску абсолютний шлях повинен бути
додано до DSN-префіксу.

- Для створення бази даних у пам'яті ``memory:` повинен бути доданий до
DSN-префіксу.

- Якщо DSN складається лише з префіксу DSN, використовується тимчасова база
даних, що видаляється при закритті з'єднання.

### Приклади

**Приклад #1 Приклад DSN PDO_SQLITE**

У наступному прикладі показано DSN PDO_SQLITE для з'єднання з SQLite:

sqlite:/opt/databases/mydb.sq3
sqlite::memory:
sqlite:
