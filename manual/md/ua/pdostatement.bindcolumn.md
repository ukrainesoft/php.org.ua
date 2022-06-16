- [«PDOStatement](class.pdostatement.md)
- [PDOStatement::bindParam »](pdostatement.bindparam.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Зв'язує стовпець зі змінною PHP

# PDOStatement::bindColumn

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::bindColumn — Зв'язує стовпець зі змінною PHP

### Опис

public **PDOStatement::bindColumn**(
string\|int `$column`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$type` u003d PDO::PARAM_STR,
int `$maxLength` u003d 0,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$driverOptions` u003d **`null`**
): bool

**PDOStatement::bindColumn()** прив'язує змінну до заданого
стовпця в результуючому наборі запиту. Кожен виклик
[PDOStatement::fetch()](pdostatement.fetch.md) або
[PDOStatement::fetchAll()](pdostatement.fetchall.md) буде оновлювати
всі змінні, задавати їм значення стовпців, із якими пов'язані.

> **Примітка**:
>
> У зв'язку з тим, що інформація про стовпці результуючого набору
> запит не завжди доступний об'єкту PDO, поки запит не буде запущено,
> програмам слід викликати цей метод *після* виклику
> [PDOStatement::execute()](pdostatement.execute.md).
>
> Однак, при роботі з драйвером PgSQL, коли прив'язується стовпець з
> LOB-даними, додатком необхідно викликати цей метод *до* виклику
> [PDOStatement::execute()](pdostatement.execute.md). В протилежному
> у випадку ідентифікатор великого об'єкта OID матиме тип integer.

### Список параметрів

`column`
Номер стовпця (починаючи з 1) або його ім'я у результативному наборі запиту.
Використовуючи ім'я стовпця, майте на увазі, що ім'я має бути в тому ж
регістрі, у якому його повернуто драйвером.

`var`
Ім'я змінної PHP, до якої потрібно прив'язати стовпець.

`type`
Тип даних параметра, заданий однією з констант
[`PDO::PARAM_*`](pdo.constants.md).

`maxLength`
Підказка для попереднього виділення пам'яті під змінну.

`driverOptions`
Додаткові параметри драйвера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зв'язування результуючого набору зі змінними PHP**

Прив'язування стовпців результуючого набору до PHP змінним є
ефективним способом відразу зробити дані кожного рядка набору
доступними додатком. У наступному прикладі показано, як PDO дозволяє
прив'язувати змінні та отримувати дані стовпців, приймаючи різні
налаштування та замовчування.

` <?php$stmt u003d $dbh->prepare('SELECT name, colour, calories FROM fruit');$stmt->execute();/* Bind by column number */$stmt->bindColum name);$stmt->bindColumn(2, $colour);/* Bind by column name */$stmt->bindColumn('calories', $cals);while ($stmt->fetch(PDO::FETCH_BOUND) ) {    print $name . " " . $colour . " " . $cals . "
";} `

Результат виконання цього прикладу:

apple red 150
banana yellow 175
kiwi green 75
orange orange 150
mango red 200
strawberry red 25

### Дивіться також

- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::fetch()](pdostatement.fetch.md) - Вилучення
наступного рядка з результуючого набору
- [PDOStatement::fetchAll()](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка результуючого
набору
