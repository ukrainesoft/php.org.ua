- [« CollectionModify::set](mysql-xdevapi-collectionmodify.set.md)
- [CollectionModify::sort »](mysql-xdevapi-collectionmodify.sort.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Пропускає елементи

# CollectionModify::skip

(No version information available, might only be in Git)

CollectionModify::skip — Пропускає елементи

### Опис

public **mysql_xdevapi\CollectionModify::skip**(int `$position`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Пропускає перші N елементів, які інакше були б
повернені операцією пошуку. Якщо кількість пропущених елементів
перевищує розмір набору результатів, операція пошуку повертає порожній
набір.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`position`
Кількість елементів, що пропускаються.

### Значення, що повертаються

Об'єкт CollectionModify, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::skip()****

` <?php$coll->modify('age > :age')->sort('age desc')->unset(['age'])->bind(['age' u003d> 20])- >limit(4)->skip(1)->execute();?> `
