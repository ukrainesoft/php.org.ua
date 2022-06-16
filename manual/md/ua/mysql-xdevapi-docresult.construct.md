- [«mysql_xdevapi\DocResult](class.mysql-xdevapi-docresult.md)
- [DocResult::fetchAll »](mysql-xdevapi-docresult.fetchall.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\DocResult](class.mysql-xdevapi-docresult.md)
- Конструктор DocResult

# DocResult::\_\_construct

(No version information available, might only be in Git)

DocResult::\_\_construct — Конструктор DocResult

### Опис

private **mysql_xdevapi\DocResult::\_\_construct**()

Отримати результати та попередження документа, що створюється
ЗображенняFind.

### Список параметрів

Ця функція не має параметрів.

### Приклади

**Приклад #1 Приклад використання DocResult**

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();$session->sql( "CREATE DATABASE addressbook")->execute();$schema u003d $session->getSchema("addressbook");$create u003d $schema->createCollection("people");$create->add('{"name ": "Alfred", "age": 18, "job": "Butler"}')->execute();$create->add('{"name": "Reginald", "age": 42, "job": "Butler"}')->execute();// ...$collection u003d $schema->getCollection("people");// Повертає об'єкт DocResult$result u003d $collection ->find(' job like :job and age > :age') ->bind(['job' u003d> 'Butler', 'age' u003d> 16]) ->sort('age desc') ->limit(1)  execute();var_dump($result->fetchAll());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(4) {
["_id"]u003d>
string(28) "00005b6b53610000000000000f3"
["age"]u003d>
int(42)
["job"]u003d>
string(6) "Butler"
["name"]u003d>
string(8) "Reginald"
}
}
