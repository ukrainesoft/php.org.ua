- [«
CollectionFind::groupBy](mysql-xdevapi-collectionfind.groupby.md)
- [CollectionFind::limit »](mysql-xdevapi-collectionfind.limit.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Встановлює умову для агрегатних функцій

# CollectionFind::having

(No version information available, might only be in Git)

CollectionFind::having — Встановлює умову для агрегатних функцій

### Опис

public **mysql_xdevapi\CollectionFind::having**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Функція може використовуватися після операції 'field', щоб зробити
вибірку документів для отримання.

### Список параметрів

`sort_expr`
Має бути коректний вираз SQL, дозволено використання агрегатних
функцій.

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::having()****

` <?php//Припускаючи, що $coll є коректним об'єктом Collection//Знайти все документи, у яких'age' більше 40,//В об'єкті Result і' $        ->find()->fields(['name','age'])->having('age > 40')->execute();?> `
