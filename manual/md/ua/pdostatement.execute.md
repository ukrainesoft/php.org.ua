- [« PDOStatement::errorInfo](pdostatement.errorinfo.md)
- [PDOStatement::fetch »](pdostatement.fetch.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Запускає підготовлений запит на виконання

# PDOStatement::execute

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::execute — Запускає підготовлений запит на виконання

### Опис

public **PDOStatement::execute**(?array `$params` u003d **`null`**): bool

Запускає [підготовлений запит](pdo.prepared-statements.md). Якщо
запит містить маркери параметрів (псевдозмінні), ви повинні або:

- викликати [PDOStatement::bindParam()](pdostatement.bindparam.md)
та/або [PDOStatement::bindValue()](pdostatement.bindvalue.md),
щоб зв'язати ці маркери, відповідно, зі змінними або
значеннями. Пов'язані змінні передають свої значення як вхідні
дані та отримують вихідні значення

- або передати масив значень лише на вхід

### Список параметрів

`params`
Масив значень, що містить стільки елементів, скільки параметрів
заявлено у SQL-запиті. Всі значення будуть прийняті як такі, що мають тип
**`PDO::PARAM_STR`**.

Не можна прив'язати кілька значень одного параметру; наприклад, не можна
прив'язати два значення до іменованого параметра у виразі IN().

Не можна прив'язати більше значень, ніж заявлено у запиті; якщо в масиві
`params` більше елементів, ніж заявлено в SQL-запиті методом
[PDO::prepare()](pdo.prepare.md), виконання запиту завершиться
невдачею і буде викликана помилка.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Виконання підготовленого запиту з прив'язкою змінних та
значень**

`<?php/* Виконання підготовленого запиту з прив'язкою змінних і значень */$calories u003d 150;$colour u003d 'gre';$sth u003d $dbh->prepare('SELECT name,  ca| calories AND colour LIKE :colour');$sth->bindParam('calories', $calories, PDO::PARAM_INT);/* Імена також можуть починатися з двокрапки ":" (необов'язково) ':colour', "%$colour%");$sth->execute();?> `

**Приклад #2 Виконання підготовленого запиту з масивом іменованих
значень**

`<?php/* Виконання підготовленого запиту з передачею масиву вхідних значень */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('S   calories AND colour u003d :colour');$sth->execute(array('calories' u003d> $calories, 'colour' u003d> $colour));/* Ключі масива також можуть починатися з | */$sth->execute(array(':calories' u003d> $calories, ':colour' u003d> $colour));?> `

**Приклад #3 Виконання підготовленого запиту з масивом позиційних
значень**

¦<?php/* Виконання підготовленого запиту з передачею масиву вхідних значень */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name   AND colour u003d ?');$sth->execute(array($calories, $colour));?> `

**Приклад #4 Виконання підготовленого запиту зі змінними,
прив'язаними до позиційних заповнювачів**

`<?php/* Виконання підготовленого запиту з прив'язкою PHP змінних */$calories u003d 150;$colour u003d 'red';$sth u003d $dbh->prepare('SELECT name,                 colour u003d ?');$sth->bindParam(1, $calories, PDO::PARAM_INT);$sth->bindParam(2, $colour, PDO::PARAM_STR, 12);$sth->execute(); ?> `

**Приклад #5 Виконання підготовленого запиту з використанням масиву
для вираження IN**

`<?php/* Виконання підготовленого запиту з використанням масиву для вираження IN */$params u003d array(1, 21, 63, 171);/* Створюємо ряд| place_holdersu003du003d implode(',', array_fill(0,count($params), '?'));/*     У цьому прикладі підготовляється запрос з достатньою досить           Коли запит буде     виконуватися, ці знаки запитання будуть замінені на елементи масиву. Це не то ж     саме, що використовувати PDOStatement::bindParam(), де прив'язка здійснюється за    посилання на змінну. PDOStatement::execute() зв'язує параметри за значенням.*/$sth u003d $dbh->prepare("SELECT id, name FROM contacts WHERE id IN ($place_holders)");$sth->exe > `

### Примітки

> **Примітка**:
>
> Для деяких драйверів необхідно [закривати
> курсор](pdostatement.closecursor.md), перш ніж виконувати наступний
> запит.

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::bindParam()](pdostatement.bindparam.md) -
Прив'язує параметр запиту до змінної
- [PDOStatement::fetch()](pdostatement.fetch.md) - Вилучення
наступного рядка з результуючого набору
- [PDOStatement::fetchAll()](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка результуючого
набору
