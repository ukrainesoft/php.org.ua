- [«
Result::getAffectedItemsCount](mysql-xdevapi-result.getaffecteditemscount.md)
- [Result::getGeneratedIds
»](mysql-xdevapi-result.getgeneratedids.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Result](class.mysql-xdevapi-result.md)
- набуває значення автоінкремента

# Result::getAutoIncrementValue

(No version information available, might only be in Git)

Result::getAutoIncrementValue — Отримує значення автоінкремента

### Опис

public **mysql_xdevapi\Result::getAutoIncrementValue**(): int

Отримує останнє значення AUTO_INCREMENT (ідентифікатор останньої
вставки).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення AUTO_INCREMENT.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Result::getAutoIncrementValue()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$session->sql(" CREATE TABLE addressbook.names    (id INT NOT NULL AUTO_INCREMENT, name VARCHAR( RY  RY) execute();$schema u003d $session->getSchema("addressbook");$table  u003d $schema->getTable("names");$result u003d $table->insert("name", "age")- >values(["Suzanne", 31],["Julie", 43])->execute();$result u003d $table->insert("name", "age")->values(["Suki" , 34])->execute();$ai u003d $result->getAutoIncrementValue();var_dump($ai);?> `

Результат виконання цього прикладу:

int(3)
