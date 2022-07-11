- [« PDOStatement::debugDumpParams](pdostatement.debugdumpparams.md)
- [PDOStatement::errorInfo »](pdostatement.errorinfo.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Отримує код SQLSTATE, пов'язаний із останньою операцією в об'єкті
PDOStatement

# PDOStatement::errorCode

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::errorCode — Отримує код SQLSTATE, пов'язаний з останньою
операцією в об'єкті PDOStatement

### Опис

public **PDOStatement::errorCode**(): ?string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Метод ідентичний [PDO::errorCode()](pdo.errorcode.md) крім
того, що **PDOStatement::errorCode()** повертає коди помилок,
що відбулися в результаті роботи об'єкта PDOStatement.

### Приклади

**Приклад #1 Отримання коду SQLSTATE**

` <?php/* Спровокуємо помилки -- таблиці BONES не існує */$err u003d $dbh->prepare('SELECT skull FROM bones');$err->execute();echo "
PDOStatement::errorCode(): ";print $err->errorCode();?> `

Результат виконання цього прикладу:

PDOStatement::errorCode(): 42S02

### Дивіться також

- [PDO::errorCode()](pdo.errorcode.md) - Повертає код SQLSTATE
результату останньої операції з базою даних
- [PDO::errorInfo()](pdo.errorinfo.md) - Отримує розширену
інформацію про помилку, що сталася під час останнього звернення до
базі даних
- [PDOStatement::errorInfo()](pdostatement.errorinfo.md) - Отримання
розширеної інформації про помилку, що сталася внаслідок роботи
об'єкта PDOStatement
