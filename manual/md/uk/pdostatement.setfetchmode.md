- [« PDOStatement::setAttribute](pdostatement.setattribute.md)
- [PDOException »](class.pdoexception.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Встановлює режим вибірки за промовчанням для об'єкта запиту

# PDOStatement::setFetchMode

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDOStatement::setFetchMode — Встановлює режим вибірки за промовчанням
для об'єкта запиту

### Опис

public **PDOStatement::setFetchMode**(int `$mode`): bool

public **PDOStatement::setFetchMode**(int `$mode` u003d PDO::FETCH_COLUMN,
int `$colno`): bool

public **PDOStatement::setFetchMode**(int `$mode` u003d PDO::FETCH_CLASS,
string `$class`, ?array `$constructorArgs` u003d **`null`**): bool

public **PDOStatement::setFetchMode**(int `$mode` u003d PDO::FETCH_INTO,
object `$object`): bool

### Список параметрів

`mode`
Режим вибірки можна задавати лише одній із констант `PDO::FETCH_*`.

`colno`
Номер стовпця.

`class`
Назва класу.

`constructorArgs`
Аргументи конструктора класу.

`object`
Об'єкт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зміна режиму вибірки**

У цьому прикладі показано, як метод **PDOStatement::setFetchMode()**
змінює режим вибірки за замовчуванням для об'єкта PDOStatement.

` <?php$stmt u003d $dbh->query('SELECT name, colour, calories FROM fruit');$stmt->setFetchMode(PDO::FETCH_NUM);foreach ($stmt as $row)   0] . " " . $row[1] . " " . $row[2] . "
";} `

Результат виконання цього прикладу:

apple red 150
banana yellow 250
orange orange 300
kiwi brown 75
lemon yellow 25
pear green 150
