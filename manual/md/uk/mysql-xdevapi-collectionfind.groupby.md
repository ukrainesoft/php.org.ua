- [« CollectionFind::fields](mysql-xdevapi-collectionfind.fields.md)
- [CollectionFind::having »](mysql-xdevapi-collectionfind.having.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Встановлює критерії угруповання

# CollectionFind::groupBy

(No version information available, might only be in Git)

CollectionFind::groupBy — Встановлює критерії угруповання

### Опис

public **mysql_xdevapi\CollectionFind::groupBy**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Функція може використовуватися для групування набору результатів ще
одному стовпцю, часто це використовується з агрегатними функціями, такими
як COUNT,MAX,MIN,SUM і т.д.

### Список параметрів

`sort_expr`
Стовпець або стовпці, які повинні використовуватися для операції
угруповання, це може бути або один рядок, або масив рядкових
аргументів по одному для кожного стовпця.

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для подальшого
обробки.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::groupBy()****

` <?php//Припускаючи, що| execute();?> `
