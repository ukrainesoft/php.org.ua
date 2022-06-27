- [« PDOStatement::bindColumn](pdostatement.bindcolumn.md)
- [PDOStatement::bindValue »](pdostatement.bindvalue.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Прив'язує параметр запиту до змінної

# PDOStatement::bindParam

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::bindParam — Прив'язує параметр запиту до змінної

### Опис

public **PDOStatement::bindParam**(
string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$type` u003d PDO::PARAM_STR,
int `$maxLength` u003d 0,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$driverOptions` u003d **`null`**
): bool

Зв'язує змінну PHP з іменованим або неназваним параметром
підготовлюваного SQL-запиту. На відміну від
[PDOStatement::bindValue()](pdostatement.bindvalue.md), змінна
прив'язується за посиланням та його значення обчислюватиметься під час виклику
[PDOStatement::execute()](pdostatement.execute.md).

У більшості випадків у запитах, що готуються, використовуються тільки
вхідні параметри, тобто при побудові запиту доступ до них
здійснюється тільки в режимі читання (можливе приведення в
відповідно до `type`). Тим не менш, деякі драйвери дозволяють
запускати збережені процедури, які, своєю чергою, можуть повертати
дані у вигляді вихідних параметрів. Найчастіше такі параметри
використовуються одночасно як вхідні та як вихідні.

### Список параметрів

`param`
Ідентифікатор параметра. Для запитів, що готуються, з іменованими
параметрами це буде ім'я як `:name'. Якщо використовуються
неіменовані параметри (знаки питання?) це буде позиція
псевдозмінної у запиті (починаючи з 1).

`var`
Ім'я змінної PHP, яку потрібно прив'язати до SQL-запиту.

`type`
Явно заданий тип даних параметра. Тип задається однією з [констант
`PDO::PARAM_*`](pdo.constants.md). Якщо параметр використовується, в тому
числі для виведення інформації з процедури, що зберігається, до значення аргументу
`type` необхідно додати **`PDO::PARAM_INPUT_OUTPUT`**, використовуючи
оператор побітове АБО.

`maxLength`
Розмір типу даних. Щоб вказати, що параметр використовується для виводу
даних із процедури, необхідно явно задати його розмір. Має
значення, тільки якщо у параметра `type` встановлено значення
**`PDO::PARAM_INPUT_OUTPUT`**.

`driverOptions`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Виконання підготовленого запиту з іменованими
псевдозмінними**

` <?php/* Виконання запиту з прив'язкою PHP-змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name, colour, ca  ca  ca| AND colour u003d :colour');$sth->bindParam('calories', $calories, PDO::PARAM_INT);/* Імена також можуть починатися з двоточки ":" (необов'язково) */$ :colour', $colour, PDO::PARAM_STR);$sth->execute();?> `

**Приклад #2 Виконання підготовленого запиту з неназваними
псевдозмінними (?)**

` <?php/* Виконання запиту з прив'язкою PHP-змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name, colour, ca         colour u003d ?');$sth->bindParam(1, $calories, PDO::PARAM_INT);$sth->bindParam(2, $colour, PDO::PARAM_STR);$sth->execute();?> `

**Приклад #3 Виклик збереженої процедури з INOUT-параметром**

` <?php/* Виклик збереженої процедури з INOUT-параметром */$colour u003d 'red';$sth u003d $dbh->prepare('CALL puree_fruit(?)');$sth->bindParam(1, , PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 12);$sth->execute();print("Після приготування фруктового пюра, колір - $colour");?> `

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::bindValue()](pdostatement.bindvalue.md) - Зв'язує
параметр із заданим значенням
