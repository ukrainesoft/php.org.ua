- [«
Session::startTransaction](mysql-xdevapi-session.starttransaction.md)
- [SqlStatement::bind »](mysql-xdevapi-sqlstatement.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас SqlStatement

# Клас SqlStatement

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\SqlStatement** {

/\* Константи \*/

const int `EXECUTE_ASYNC` u003d 1;

const int `BUFFERED` u003d 2;

/\* Властивості \*/

public `$statement`;

/\* Методи \*/

public **bind**(string `$param`):
[mysql_xdevapi\SqlStatement](class.mysql-xdevapi-sqlstatement.md)

public **execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **getNextResult**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **getResult**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **hasMoreResults**(): bool

}

## Властивості

`statement`

## Зумовлені константи

**`mysql_xdevapi\SqlStatement::EXECUTE_ASYNC`**

**`mysql_xdevapi\SqlStatement::BUFFERED`**

## Зміст

- [SqlStatement::bind](mysql-xdevapi-sqlstatement.bind.md) -
Зв'язує параметри затвердження
- [SqlStatement::\_\_construct](mysql-xdevapi-sqlstatement.construct.md)
- Опис конструктора
- [SqlStatement::execute](mysql-xdevapi-sqlstatement.execute.md) -
Виконує операцію
- [SqlStatement::getNextResult](mysql-xdevapi-sqlstatement.getnextresult.md)
— Отримує наступний результат
- [SqlStatement::getResult](mysql-xdevapi-sqlstatement.getresult.md)
— Отримує результат
- [SqlStatement::hasMoreResults](mysql-xdevapi-sqlstatement.hasmoreresults.md)
- Перевіряє, чи є ще результати
