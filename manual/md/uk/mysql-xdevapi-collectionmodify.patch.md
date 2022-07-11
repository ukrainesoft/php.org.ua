- [«
CollectionModify::limit](mysql-xdevapi-collectionmodify.limit.md)
- [CollectionModify::replace
»](mysql-xdevapi-collectionmodify.replace.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Виправляє документ

# CollectionModify::patch

(No version information available, might only be in Git)

CollectionModify::patch — Виправляє документ

### Опис

public **mysql_xdevapi\CollectionModify::patch**(string `$document`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Приймає об'єкт виправлення та застосовує його до одного або кількох
документів може оновлювати кілька властивостей документа.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`document`
Документ із властивостями, які застосовуються до відповідних документів.

### Значення, що повертаються

Об'єкт CollectionModify.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::patch()****

` <?php$res u003d $coll->modify('"Programmatore" IN job')->patch('{"Hobby" : "Programmare"}')->execute();?> `
