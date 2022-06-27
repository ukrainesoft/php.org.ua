- [«
mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md)
- [mysql_xdevapi\CrudOperationSkippable
»](class.mysql-xdevapi-crudoperationskippable.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md)
- Встановлює ліміт результату

# CrudOperationLimitable::limit

(No version information available, might only be in Git)

CrudOperationLimitable::limit — Встановлює ліміт результату

### Опис

abstract public **mysql_xdevapi\CrudOperationLimitable::limit**(int
`$rows`):
[mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md)

Встановлює максимальну кількість записів або документів для
повернення.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`rows`
Максимальна кількість записів чи документів.

### Значення, що повертаються

Об'єкт CrudOperationLimitable.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CrudOperationLimitable::limit()****

` <?php$res u003d $coll->find()->fields(['name as n','age as a','job as j'])->groupBy('j')->limit( 11)->execute();$res u003d $table->update()->set('age',69)->where('age > 15 and age < 22')->limit(4)-> orderby(['age asc','name desc'])->execute();?> `
