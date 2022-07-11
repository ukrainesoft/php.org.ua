- [« PDO::sqliteCreateAggregate](pdo.sqlitecreateaggregate.md)
- [PDO::sqliteCreateFunction »](pdo.sqlitecreatefunction.md)

- [PHP Manual](index.md)
- [SQLite (PDO)] (ref.pdo-sqlite.md)
- Реєстрація користувача функції сортування для використання в
SQL-запитах

# PDO::sqliteCreateCollation

(PHP 5 \>u003d 5.3.11, PHP 7, PHP 8)

PDO::sqliteCreateCollation — Реєстрація функції користувача
сортування для використання у SQL-запитах

### Опис

public **PDO::sqliteCreateCollation**(string `$name`,
[callable](language.types.callable.md) `$callback`): bool

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

### Список параметрів

`name`
Ім'я функції для використання у запитах.

`callback`
Ім'я функції PHP, або певна функція для
використання як функцію зворотного виклику та визначальна
поведінка під час сортування. Вона повинна приймати два рядки та повертати
-1 або 1, якщо перший рядок повинен розташовуватися до або після другого
рядки відповідно, або 0, якщо порядок важливий.

Ця функція має бути визначена таким чином:

collation(string `$string1`, string `$string2`): int

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **PDO::sqliteCreateCollation()****

` <?php$db u003d new PDO('sqlite::memory:');$db->exec("CREATE TABLE test (col1 string)");$db->exec("INSERT INTO test VALUES ('a1 ')"); $db->exec("INSERT INTO test VALUES ('a10')");$db->exec("INSERT INTO test VALUES ('a2')"); NATURAL_CMP', 'strnatcmp');foreach ($db->query("SELECT col1 FROM test ORDER BY col1") as $row) { echo $row['col1'] . "
";}echo "
";foreach ($db->query("SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP") as $row) { echo $row['col1'] . "
";}?> `

Результат виконання цього прикладу:

a1
a10
a2

a1
a2
a10
