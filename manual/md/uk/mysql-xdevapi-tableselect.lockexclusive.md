- [«TableSelect::limit](mysql-xdevapi-tableselect.limit.md)
- [TableSelect::lockShared
»](mysql-xdevapi-tableselect.lockshared.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)
- Виконує EXCLUSIVE LOCK

# TableSelect::lockExclusive

(No version information available, might only be in Git)

TableSelect::lockExclusive — Виконує EXCLUSIVE LOCK

### Опис

public **mysql_xdevapi\TableSelect::lockExclusive**(int
`$lock_waiting_option` u003d ?):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

Виконує операцію читання із EXCLUSIVE LOCK. Тільки один замок може бути
активним одночасно.

### Список параметрів

`lock_waiting_option`
Необов'язковий параметр очікування, який за замовчуванням дорівнює
**`MYSQLX_LOCK_DEFAULT`**. Допустимі значення:

- **`MYSQLX_LOCK_DEFAULT`**

- **`MYSQLX_LOCK_NOWAIT`**

- **`MYSQLX_LOCK_SKIP_LOCKED`**

### Значення, що повертаються

Об'єкт TableSelect.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\TableSelect::lockExclusive()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names" );$session->startTransaction();$result u003d $table->select('name', 'age') ->lockExclusive(MYSQLX_LOCK_NOWAIT) ->execute();$session->commit();$row u003du003d $result->fetchAll();print_r($row);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[name] u003d> John
[age] u003d> 42
)
[1] u003d> Array
(
[name] u003d> Sam
[age] u003d> 42
)
)
