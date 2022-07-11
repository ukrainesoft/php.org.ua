- [«
CollectionModify::patch](mysql-xdevapi-collectionmodify.patch.md)
- [CollectionModify::set »](mysql-xdevapi-collectionmodify.set.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)
- Замінює поле документа

# CollectionModify::replace

(No version information available, might only be in Git)

CollectionModify::replace — Замінює поле документа

### Опис

public **mysql_xdevapi\CollectionModify::replace**(string
`$collection_field`, string `$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

Замінює (оновлює) це значення поля новим.

### Список параметрів

`collection_field`
Шлях документа до елемента оновлення.

`expression_or_literal`
Значення, яке встановлюється для зазначеного атрибута.

### Значення, що повертаються

Об'єкт CollectionModify.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionModify::replace()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema     u003d $session->getSchema("addressbook");$collection u003d $schema->createCollection("people");$result u003d  {"name":   "Bernie",    "traits": ["Friend", "Brother", "Human"]}') ->execute();$collection  ->modify("name u003d :name")  bind(['name' u003d> 'Bernie'])  ->replace("name", "Bern") ->execute();$result u003d $collection ->find() ->execute();print_r($ result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> Array
(
[_id] u003d> 00005b6b536100000000000011b
[name] u003d> Bern
[traits] u003d> Array
(
[0] u003d> Friend
[1] u003d> Brother
[2] u003d> Human
)
)
)
