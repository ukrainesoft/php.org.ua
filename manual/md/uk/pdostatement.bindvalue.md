- [« PDOStatement::bindParam](pdostatement.bindparam.md)
- [PDOStatement::closeCursor »](pdostatement.closecursor.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Зв'язує параметр із заданим значенням

# PDOStatement::bindValue

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 1.0.0)

PDOStatement::bindValue — Зв'язує параметр із заданим значенням

### Опис

public **PDOStatement::bindValue**(string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$type` u003d PDO::PARAM_STR): bool

Задає значення іменованої або неіменованої псевдозмінної
підготовлений SQL-запит.

### Список параметрів

`param`
Ідентифікатор запиту. Для підготовлюваних запитів з
іменованими параметрами це буде ім'я як `:name'. Якщо використовуються
неіменовані параметри (знаки питання?) це буде позиція
псевдозмінної у запиті (починаючи з 1).

`value`
Значення, яке необхідно прив'язати до параметра.

`type`
Явно заданий тип даних параметра. Тип задається однією з [констант
`PDO::PARAM_*`](pdo.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Виконання підготовленого запиту з іменованими
псевдозмінними**

` <?php/* Виконання запиту з прив'язкою PHP-змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name, colour, ca  ca  ca| AND colour u003d :colour');$sth->bindValue('calories', $calories, PDO::PARAM_INT);/* Імена також можуть починатися з двоточки ":" (необов'язково) :colour', $colour, PDO::PARAM_STR);$sth->execute();?> `

**Приклад #2 Виконання підготовленого запиту з неназваними
псевдозмінними (?)**

` <?php/* Виконання запиту з прив'язкою PHP-змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name, colour, ca   ca  colour u003d ?');$sth->bindValue(1, $calories, PDO::PARAM_INT);$sth->bindValue(2, $colour, PDO::PARAM_STR);$sth->execute();?> `

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::bindParam()](pdostatement.bindparam.md) -
Прив'язує параметр запиту до змінної
