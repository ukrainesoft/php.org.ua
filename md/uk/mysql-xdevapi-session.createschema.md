- [« Session::\_\_construct](mysql-xdevapi-session.construct.md)
- [Session::dropSchema »](mysql-xdevapi-session.dropschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Створює нову схему

# Session::createSchema

(No version information available, might only be in Git)

Session::createSchema — Створює нову схему

### Опис

public **mysql_xdevapi\Session::createSchema**(string `$schema_name`):
[mysql_xdevapi\Schema](class.mysql-xdevapi-schema.md)

Створює нову схему.

### Список параметрів

`schema_name`
Назва схеми для створення.

### Значення, що повертаються

Об'єкт Schema у разі успішного виконання, у разі виникнення
помилки видає виняток.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::createSchema()****

` <?php$uri u003d 'mysqlx://happyuser:password@127.0.0.1:33060/';$sess u003d mysql_xdevapi\getSession($uri);try {    if ($schema u003d s ')) {        echo "Інфо: Я створив схему з ім'ям 'fruit'
";    }} catch (Exception $e) {  echo $e->getMessage();}?> `

Результатом виконання цього прикладу буде щось подібне:

Я створив схему з ім'ям 'fruit'
