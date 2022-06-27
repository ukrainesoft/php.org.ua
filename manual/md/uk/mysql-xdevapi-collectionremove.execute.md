- [«
CollectionRemove::\_\_construct](mysql-xdevapi-collectionremove.construct.md)
- [CollectionRemove::limit
»](mysql-xdevapi-collectionremove.limit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Виконує операцію видалення

# CollectionRemove::execute

(No version information available, might only be in Git)

CollectionRemove::execute — Виконує операцію видалення

### Опис

public **mysql_xdevapi\CollectionRemove::execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Функція execute повинна викликатись, щоб змусити клієнта відправити
запит операції CRUD на сервер

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Result.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionRemove::execute()****

` <?php$res u003d $coll->remove('true')->sort('age desc')->limit(2)->execute();?> `
