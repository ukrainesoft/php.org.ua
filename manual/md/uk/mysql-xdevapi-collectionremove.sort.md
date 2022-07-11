- [«
CollectionRemove::limit](mysql-xdevapi-collectionremove.limit.md)
- [mysql_xdevapi\ColumnResult
»](class.mysql-xdevapi-columnresult.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Встановлює критерії сортування

# CollectionRemove::sort

(No version information available, might only be in Git)

CollectionRemove::sort — Встановлює критерії сортування

### Опис

public **mysql_xdevapi\CollectionRemove::sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

Сортує набір результатів по полю, вибраному аргументом sort_expr.
Дозволені напрямки: ASC (за зростанням) або DESC (за спаданням).
Ця операція еквівалентна операції SQL 'ORDER BY' і відповідає тому
ж набір правил.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`sort_expr`
Можна вказати один або кілька виразів сортування. Застосовується ліворуч
праворуч, і кожен вираз розділяється комою.

### Значення, що повертаються

Об'єкт CollectionRemove, який можна використовувати для виконання
команди або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionRemove::sort()****

` <?php$res u003d $coll->remove('true')->sort('age desc')->limit(2)->execute();?> `
