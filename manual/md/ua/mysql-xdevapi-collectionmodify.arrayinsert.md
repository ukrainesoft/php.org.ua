- [«
CollectionModify::arrayAppend](mysql-xdevapi-collectionmodify.arrayappend.md)
- [CollectionModify::bind »](mysql-xdevapi-collectionmodify.bind.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Додає елемент у поле масиву

# CollectionModify::arrayInsert

(No version information available, might only be in Git)

CollectionModify::arrayInsert — Додає елемент до поля масиву

### Опис

public **mysql_xdevapi\CollectionModify::arrayInsert**(string
`$collection_field`, string `$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Додає елемент до поля документа, коли кілька елементів поля
представляються як масиву. На відміну від arrayAppend(), arrayInsert()
дозволяє вказати, куди додасться новий елемент, визначаючи, за яким
елементом він слід, тоді як arrayAppend() завжди додає новий
елемент в кінці масиву.

### Список параметрів

`collection_field`
Визначте елемент у масиві, після якого додасться новий елемент.
Формат цього параметра: `FIELD_NAME[ INDEX ]`, де FIELD_NAME - це ім'я
поля документа, з якого видаляється елемент, а INDEX – це INDEX
елемент у полі.

Поле INDEX засноване на нулі, тому найлівіший елемент масиву має
індекс 0

`expression_or_literal`
Новий елемент для додавання після FIELD_NAME\[INDEX\]

### Значення, що повертаються

Об'єкт CollectionModify, який можна використовувати для виконання
команди або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::arrayInsert()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d  {"name":   "Bernie",    "traits": ["Friend", "Brother", "Human"]}') ->execute();$collection  ->modify("name in ('Bernie', Jane')") ->arrayInsert('traits[1]', 'Happy') ->execute();$result u003d $collection  ->find() ->execute();print_r($result->fetchAll( ));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b536100000000000010d
[name] u003d> Bernie
[traits] u003d> Array
(
[0] u003d> Friend
[1] u003d> Happy
[2] u003d> Brother
[3] u003d> Human
)
)
)
