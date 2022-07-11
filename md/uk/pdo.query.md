- [«PDO::prepare](pdo.prepare.md)
- [PDO::quote »](pdo.quote.md)

- [PHP Manual](index.md)
- [PDO](class.pdo.md)
- готує та виконує вираз SQL без заповнювачів

# PDO::query

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDO::query — Підготовка та виконання виразу SQL без заповнювачів

### Опис

public **PDO::query**(string `$query`, ?int `$fetchMode` u003d **`null`**):
[PDOStatement](class.pdostatement.md)\|false

public **PDO::query**(string `$query`, ?int `$fetchMode` u003d
PDO::FETCH_COLUMN, int `$colno`):
[PDOStatement](class.pdostatement.md)\|false

public **PDO::query**(
string `$query`,
?int `$fetchMode` u003d PDO::FETCH_CLASS,
string `$classname`,
array `$constructorArgs`
): [PDOStatement](class.pdostatement.md)\|false

public **PDO::query**(string `$query`, ?int `$fetchMode` u003d
PDO::FETCH_INTO, object `$object`):
[PDOStatement](class.pdostatement.md)\|false

**PDO::query()** готує та виконує вираз SQL за один виклик
функції, повертаючи вираз як об'єкт
[PDOStatement](class.pdostatement.md).

Якщо запит буде запускатися багаторазово, для покращення
продуктивності програми має сенс цей запит один раз
підготувати [PDOStatement](class.pdostatement.md) методом
[PDO::prepare()](pdo.prepare.md), а потім запускати на виконання
методом [PDOStatement::execute()](pdostatement.execute.md) стільки
раз, скільки потрібно.

Якщо після виконання попереднього запиту ви не вибрали всі дані з
результуючого набору наступний виклик **PDO::query()** може зазнати
невдачу. У таких випадках слід викликати метод
[PDOStatement::closeCursor()](pdostatement.closecursor.md), який
звільнить ресурси бази даних, зайняті попереднім об'єктом
[PDOStatement](class.pdostatement.md). Після цього можна безпечно
викликати **PDO::query()**.

> **Примітка**:
>
> Якщо `query` містить заповнювачі, вираз має бути підготовлений
> та виконано окремо з використанням методів
> [PDO::prepare()](pdo.prepare.md) та
> [PDOStatement::execute()](pdostatement.execute.md).

### Список параметрів

`query`
SQL-запит для підготовки та виконання.

Якщо SQL містить заповнювачі, замість цього слід використовувати
[PDO::prepare()](pdo.prepare.md) та
[PDOStatement::execute()](pdostatement.execute.md). В якості
альтернативи, SQL можна підготувати вручну перед викликом
**PDO::query()**, при цьому дані мають бути правильно відформатовані
з використанням [PDO::quote()](pdo.quote.md), якщо драйвер
підтримує це.

`fetchMode`
Режим вибірки за промовчанням для поверненого
[PDOStatement](class.pdostatement.md). Має бути однією з констант
[`PDO::FETCH_*`](pdo.constants.md).

Якщо цей аргумент передається функції, решта аргументів буде
оброблятися так, якби
[PDOStatement::setFetchMode()](pdostatement.setfetchmode.md) був
викликаний отриманого об'єкта висловлювання. Наступні аргументи залежать
від вибраного режиму вибірки.

### Значення, що повертаються

Повертає об'єкт [PDOStatement](class.pdostatement.md) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 SQL без наповнювачів може бути виконаний з використанням
**PDO::query()****

` <?php$sql u003d 'SELECT name, color, calories FROM fruit ORDER BY name';foreach ($conn->query($sql) as $row) {    print $row['name'] " "; print $row['color'] . " "; print $row['calories'] . "
";}?> `

Результат виконання цього прикладу:

apple red 150
banana yellow 250
kiwi brown 75
lemon yellow 25
orange orange 300
pear green 150
watermelon pink 90

### Дивіться також

- [PDO::exec()](pdo.exec.md) - Виконує SQL-запит і повертає
кількість порушених рядків
- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
