- [«
SqlStatementResult::nextResult](mysql-xdevapi-sqlstatementresult.nextresult.md)
- [Statement::\_\_construct »](mysql-xdevapi-statement.construct.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас Statement

# Клас Statement

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\Statement** {

/\* Константи \*/

const int `EXECUTE_ASYNC` u003d 1;

const int `BUFFERED` u003d 2;

/\* Методи \*/

public **getNextResult**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **getResult**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **hasMoreResults**(): bool

}

## Зумовлені константи

**`mysql_xdevapi\Statement::EXECUTE_ASYNC`**

**`mysql_xdevapi\Statement::BUFFERED`**

## Зміст

- [Statement::\_\_construct](mysql-xdevapi-statement.construct.md) -
Опис конструктора
- [Statement::getNextResult](mysql-xdevapi-statement.getnextresult.md)
— Отримує наступний результат
- [Statement::getResult](mysql-xdevapi-statement.getresult.md) -
Отримує результат
- [Statement::hasMoreResults](mysql-xdevapi-statement.hasmoreresults.md)
- Перевіряє, чи є ще результати
