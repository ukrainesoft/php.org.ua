- [« CollectionModify::skip](mysql-xdevapi-collectionmodify.skip.md)
- [CollectionModify::unset
»](mysql-xdevapi-collectionmodify.unset.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Встановлює критерії сортування

# CollectionModify::sort

(No version information available, might only be in Git)

CollectionModify::sort — Встановлює критерії сортування

### Опис

public **mysql_xdevapi\CollectionModify::sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Сортує набір результатів по полю, вибраному аргументом sort_expr.
Дозволені напрямки: ASC (за зростанням) або DESC (за спаданням).
Ця операція еквівалентна операції SQL 'ORDER BY' і відповідає тому
ж набір правил.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`sort_expr`
Можна вказати один або кілька виразів сортування.
праворуч, кожен вираз має бути розділений комою.

### Значення, що повертаються

Об'єкт CollectionModify, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::sort()****

` <?php$res u003d $coll->modify('true')->sort('name desc', 'age asc')->limit(4)->set('Married', 'NO')- >execute();?> `
