- [« CollectionModify::sort](mysql-xdevapi-collectionmodify.sort.md)
- [mysql_xdevapi\CollectionRemove
»](class.mysql-xdevapi-collectionremove.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- скидає значення полів документа

# CollectionModify::unset

(No version information available, might only be in Git)

CollectionModify::unset — Скидає значення полів документа

### Опис

public **mysql_xdevapi\CollectionModify::unset**(array `$fields`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Видаляє атрибути з документів у колекції.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`fields`
Атрибути для видалення документів у колекції.

### Значення, що повертаються

Об'єкт CollectionModify, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::unset()****

` <?php$res u003d $coll->modify('job like :job_name')->unset(["age", "name"])->bind(['job_name' u003d> 'Plumber'])- >execute();?> `
