- [«
mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md)
- [mysql_xdevapi\CrudOperationLimitable
»](class.mysql-xdevapi-crudoperationlimitable.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md)
- Прив'язує значення до заповнювача

# CrudOperationBindable::bind

(No version information available, might only be in Git)

CrudOperationBindable::bind — Прив'язує значення до заповнювача

### Опис

abstract public **mysql_xdevapi\CrudOperationBindable::bind**(array
`$placeholder_values`):
[mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md)

Прив'язує значення до певного наповнювача.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`placeholder_values`
Ім'я заповнювачів та значення для прив'язки.

### Значення, що повертаються

Об'єкт CrudOperationBindable.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CrudOperationBindable::bind()****

` <?php$res u003d $coll->modify('name like :name')->arrayInsert('job[0]', 'Calciatore')->bind(['name' u003d> 'ENTITY']) ->execute();$res u003d $table->delete()->orderby('age desc')->where('age < 20 and age >>12 and name !u003d :name')->bind([ 'name' u003d> 'Tierney'])->limit(2)->execute();?> `
