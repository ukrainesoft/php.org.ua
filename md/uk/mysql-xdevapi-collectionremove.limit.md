- [«
CollectionRemove::execute](mysql-xdevapi-collectionremove.execute.md)
- [CollectionRemove::sort »](mysql-xdevapi-collectionremove.sort.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Обмежує кількість документів для видалення

# CollectionRemove::limit

(No version information available, might only be in Git)

CollectionRemove::limit — Обмежує кількість документів для
видалення

### Опис

public **mysql_xdevapi\CollectionRemove::limit**(int `$rows`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

Встановлює максимальну кількість документів для видалення.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`rows`
Максимальна кількість документів видалення.

### Значення, що повертаються

Повертає об'єкт CollectionRemove, який можна використовувати для
виконання команди або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionRemove::limit()****

` <?php$res u003d $coll->remove('job in (\'Barista\', \'Programmatore\', \'Ballerino\', \'Programmatrice\')')->limit(5)- >sort(['age desc', 'name asc'])->execute();?> `
