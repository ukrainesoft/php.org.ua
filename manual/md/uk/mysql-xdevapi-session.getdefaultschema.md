- [« Session::generateUUID](mysql-xdevapi-session.generateuuid.md)
- [Session::getSchema »](mysql-xdevapi-session.getschema.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\Session](class.mysql-xdevapi-session.md)
- Отримує ім'я схеми за замовчуванням

# Session::getDefaultSchema

(No version information available, might only be in Git)

Session::getDefaultSchema — Отримує назву схеми за промовчанням

### Опис

public **mysql_xdevapi\Session::getDefaultSchema**(): string

Витягує ім'я схеми за замовчуванням, яка зазвичай встановлюється в URI
з'єднання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я схеми за замовчуванням, визначеною сполукою або **`null`**, якщо
схема не встановлена.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\Session::getSchema()****

` <?php$uri u003d "mysqlx://testuser:testpasswd@localhost:33160/testx?ssl-modeu003ddisabled";$session u003d Mysql_xdevapi\getSession($uri);$schema u003d $session->getDefault ;echo $schema;?> `

Результат виконання цього прикладу:

testx
