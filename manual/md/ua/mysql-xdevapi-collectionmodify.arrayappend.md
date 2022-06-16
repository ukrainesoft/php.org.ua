- [«
mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- [CollectionModify::arrayInsert
»](mysql-xdevapi-collectionmodify.arrayinsert.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Додає елемент у поле масиву

# CollectionModify::arrayAppend

(No version information available, might only be in Git)

CollectionModify::arrayAppend — Додає елемент до поля масиву

### Опис

public **mysql_xdevapi\CollectionModify::arrayAppend**(string
`$collection_field`, string `$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Додає елемент до поля документа, коли кілька елементів поля
представляються як масиву. На відміну від arrayInsert(), arrayAppend()
завжди додає новий елемент до кінця масиву, тоді як arrayInsert()
може визначати місцезнаходження.

### Список параметрів

`collection_field`
Ідентифікатор поля, до якого вставляється новий елемент.

`expression_or_literal`
Новий елемент для додавання до кінця масиву полів документа.

### Значення, що повертаються

Об'єкт CollectionModify, який можна використовувати для виконання
команди або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::arrayAppend()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d {"name":   "Bernie",    "traits": ["Friend", "Brother", "Human"]}') ->execute();$collection  ->modify("name in ('Bernie', Jane')") ->arrayAppend('traits', 'Happy') ->execute();$result u003d $collection  ->find() ->execute();print_r($result->fetchAll()); ?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b536100000000000010c
[name] u003d> Bernie
[traits] u003d> Array
(
[0] u003d> Friend
[1] u003d> Brother
[2] u003d> Human
[3] u003d> Happy
)
)
)
