- [«
mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
- [mysql_xdevapi\DatabaseObject
»](class.mysql-xdevapi-databaseobject.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
- Сортує результати

# CrudOperationSortable::sort

(No version information available, might only be in Git)

CrudOperationSortable::sort — Сортує результати

### Опис

abstract public **mysql_xdevapi\CrudOperationSortable::sort**(string
`$sort_expr`):
[mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)

Сортує результуючий набір по полю, вибраному аргументом
sort_expr. Допустимий порядок сортування: ASC (за зростанням) або DESC
(по спаданню). Ця операція еквівалентна операції SQL 'ORDER BY' та
слід тому ж набору правил.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`sort_expr`
Може бути надано один або кілька виразів сортування.
Обчислення виконується зліва направо, і кожен вираз поділяється
комою.

### Значення, що повертаються

Об'єкт CrudOperationSortable.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CrudOperationSortable::sort()****

` <?php$res u003d $coll->find('job like \'Cavia\'')->sort('age desc', '_id desc')->execute();?> `
