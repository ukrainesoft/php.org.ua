- [«
SqlStatement::hasMoreResults](mysql-xdevapi-sqlstatement.hasmoreresults.md)
- [SqlStatementResult::\_\_construct
»](mysql-xdevapi-sqlstatementresult.construct.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас SqlStatementResult

# Клас SqlStatementResult

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\SqlStatementResult** implements
[mysql_xdevapi\BaseResult](class.mysql-xdevapi-baseresult.md),
[Traversable](class.traversable.md) {

/\* Методи \*/

public **fetchAll**(): array

public **fetchOne**(): array

public **getAffectedItemsCount**(): int

public **getColumnsCount**(): int

public **getColumnNames**(): array

public **getColumns**(): Array

public **getGeneratedIds**(): array

public **getLastInsertId**(): String

public **getWarnings**(): array

public **getWarningCounts**(): int

public **hasData**(): bool

public **nextResult**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

}

## Зміст

- [SqlStatementResult::\_\_construct](mysql-xdevapi-sqlstatementresult.construct.md)
- Опис конструктора
- [SqlStatementResult::fetchAll](mysql-xdevapi-sqlstatementresult.fetchall.md)
— Отримує всі рядки з результату
- [SqlStatementResult::fetchOne](mysql-xdevapi-sqlstatementresult.fetchone.md)
— Отримує один рядок
- [SqlStatementResult::getAffectedItemsCount](mysql-xdevapi-sqlstatementresult.getaffecteditemscount.md)
— Отримує порушену кількість рядків
- [SqlStatementResult::getColumnsCount](mysql-xdevapi-sqlstatementresult.getcolumncount.md)
— Отримує кількість стовпців
- [SqlStatementResult::getColumnNames](mysql-xdevapi-sqlstatementresult.getcolumnnames.md)
— Отримує імена стовпців
- [SqlStatementResult::getColumns](mysql-xdevapi-sqlstatementresult.getcolumns.md)
— Отримує стовпці
- [SqlStatementResult::getGeneratedIds](mysql-xdevapi-sqlstatementresult.getgeneratedids.md)
— Отримує згенеровані ідентифікатори
- [SqlStatementResult::getLastInsertId](mysql-xdevapi-sqlstatementresult.getlastinsertid.md)
— Отримує останній ідентифікатор вставки
- [SqlStatementResult::getWarnings](mysql-xdevapi-sqlstatementresult.getwarnings.md)
— Отримує попередження від останньої операції
- [SqlStatementResult::getWarningsCount](mysql-xdevapi-sqlstatementresult.getwarningcount.md)
— Отримує кількість попереджень від останньої операції
- [SqlStatementResult::hasData](mysql-xdevapi-sqlstatementresult.hasdata.md)
— Перевіряє, чи є результати дані
- [SqlStatementResult::nextResult](mysql-xdevapi-sqlstatementresult.nextresult.md)
— Отримує наступний результат
