- [« SQLite3::createAggregate](sqlite3.createaggregate.md)
- [SQLite3::createFunction »](sqlite3.createfunction.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Реєструє функцію PHP для використання як функцію
сортування SQL

# SQLite3::createCollation

(PHP 5 \>u003d 5.3.11, PHP 7, PHP 8)

SQLite3::createCollation — Реєструє функцію PHP для використання в
як функція сортування SQL

### Опис

public **SQLite3::createCollation**(string `$name`,
[callable](language.types.callable.md) `$callback`): bool

Реєструє функцію PHP або функцію користувача для використання
як функція сортування в SQL-запитах.

### Список параметрів

`name`
Ім'я створюваної або перевизначуваної функції сортування SQL

`callback`
Ім'я PHP-функції або функції, що визначається користувачем для застосування в
як callback, що визначає поведінку параметрів сортування. Вона
має приймати два значення і повертається результат повинен бути такий
ж, як і [strcmp()](function.strcmp.md), тобто. він повинен повертати
-1, 1 або 0, якщо перший рядок сортується до, після або дорівнює другий.

Функція має бути визначена як:

collation([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SQLite3::createCollation()****

Реєструє PHP-функцію [strnatcmp()](function.strnatcmp.md) як
послідовність сортування у базі даних SQLite3.

` <?php$db u003d new SQLite3(":memory:");$db->exec("CREATE TABLE test (col1 string)");$db->exec("INSERT INTO test VALUES ('a1') ");$db->exec("INSERT INTO test VALUES ('a10')");$db->exec("INSERT INTO test VALUES ('a2')");$db->createCollation('NATURAL_CMP') , 'strnatcmp');$defaultSort u003d $db->query("SELECT col1 FROM test ORDER BY col1");$naturalSortu003d $db->query("SELECT col1 FROM test OR| сортування за промовчанням:
";while ($row u003d $defaultSort->fetchArray()){   echo $row['col1'], "
";}echo "
сортування natural order:
";while ($row u003d $naturalSort->fetchArray()){   echo $row['col1'], "
";}$db->close();?> `

Результат виконання цього прикладу:


default:
a1
a10
a2

natural:
a1
a2
a10

### Дивіться також

- Документація зі зіставлення SQLite:
[»http://sqlite.org/datatype3.md#collation](http://sqlite.org/datatype3.md#collation)
