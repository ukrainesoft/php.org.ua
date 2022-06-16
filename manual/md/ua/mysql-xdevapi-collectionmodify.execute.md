- [«
CollectionModify::\_\_construct](mysql-xdevapi-collectionmodify.construct.md)
- [CollectionModify::limit
»](mysql-xdevapi-collectionmodify.limit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Виконує операцію зміни

# CollectionModify::execute

(No version information available, might only be in Git)

CollectionModify::execute — Виконує операції зміни

### Опис

public **mysql_xdevapi\CollectionModify::execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Метод execute необхідний для надсилання запиту операції CRUD на сервер
MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт Result, який можна використовувати для перевірки стану
операції, наприклад, кількості порушених рядків.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::execute()****

` <?php/* ... */?> `
