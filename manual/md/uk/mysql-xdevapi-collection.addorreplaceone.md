- [« Collection::add](mysql-xdevapi-collection.add.md)
- [Collection::\_\_construct
»](mysql-xdevapi-collection.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Collection](class.mysql-xdevapi-collection.md)
- Додає або замінює документ колекції

# Collection::addOrReplaceOne

(No version information available, might only be in Git)

Collection::addOrReplaceOne — Додає або замінює документ колекції

### Опис

public **mysql_xdevapi\Collection::addOrReplaceOne**(string `$id`,
string `$doc`): [mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

Додає новий документ або замінює існуючий.

Ось кілька сценаріїв для цього методу:

- Якщо ні ідентифікатор, ні якесь унікальне значення ключа не
конфліктують із будь-яким документом у колекції, то цей документ
додається.

- Якщо ідентифікатор не відповідає жодному документу, але один або
кілька унікальних значень ключів конфліктують із документом у
колекції, видається помилка.

- Якщо ідентифікатор відповідає існуючому документу та
унікальні ключі не визначені для колекції, то документ
замінюється.

- Якщо ідентифікатор відповідає існуючому документу, чи все
унікальні ключі в документі заміни відповідають цьому ж документу
або не конфліктують з іншими документами в колекції, документ
замінюється.

- Якщо ідентифікатор відповідає існуючому документу, а один або
кілька унікальних ключів відповідають документу, відмінному від
колекції, видається помилка.

### Список параметрів

`id`
Ідентифікатор фільтру. Якщо ідентифікатор або будь-яке інше поле з
унікальним індексом вже існує в колекції, він оновить
відповідний документ.

За замовчуванням цей ідентифікатор автоматично генерується
при додаванні запису і згадується як поле з ім'ям '\_id'.

`doc`
Це документ для додавання або заміни, що є рядком
JSON.

### Значення, що повертаються

Об'єкт Result.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Collection::addOrReplaceOne()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$collection u003d $schema->get people");// Використання add()$result u003d $collection->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute() ;// Використання addOrReplaceOne()// Примітки: ми передаємо відоме значення _id$result u003d $collection->addOrReplaceOne('00005b6b5361000000000000       Construction"}');?> `
