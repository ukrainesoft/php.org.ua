- [«
mysql_xdevapi\CrudOperationSkippable](class.mysql-xdevapi-crudoperationskippable.md)
- [mysql_xdevapi\CrudOperationSortable
»](class.mysql-xdevapi-crudoperationsortable.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CrudOperationSkippable](class.mysql-xdevapi-crudoperationskippable.md)
- Кількість операцій для пропуску

# CrudOperationSkippable::skip

(No version information available, might only be in Git)

CrudOperationSkippable::skip — Кількість операцій для пропуску

### Опис

abstract public **mysql_xdevapi\CrudOperationSkippable::skip**(int
`$skip`):
[mysql_xdevapi\CrudOperationSkippable](class.mysql-xdevapi-crudoperationskippable.md)

Пропускає цю кількість записів у операції, що повертається.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`skip`
Кількість елементів, що пропускаються.

### Значення, що повертаються

Об'єкт CrudOperationSkippable.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CrudOperationSkippable::skip()****

` <?php$res u003d $coll->find('job like \'Programmatore\'')->limit(1)->skip(3)->sort('age asc')->execute(); ?> `
