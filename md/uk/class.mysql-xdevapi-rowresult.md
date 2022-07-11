- [«
Result::getWarningsCount](mysql-xdevapi-result.getwarningscount.md)
- [RowResult::\_\_construct »](mysql-xdevapi-rowresult.construct.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас RowResult

# Клас RowResult

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\RowResult** implements
[mysql_xdevapi\BaseResult](class.mysql-xdevapi-baseresult.md),
[Traversable](class.traversable.md) {

/\* Методи \*/

public **fetchAll**(): array

public **fetchOne**(): array

public **getColumnsCount**(): int

public **getColumnNames**(): array

public **getColumns**(): array

public **getWarnings**(): array

public **getWarningsCount**(): int

}

## Зміст

- [RowResult::\_\_construct](mysql-xdevapi-rowresult.construct.md) -
Конструктор класу RowResult
- [RowResult::fetchAll](mysql-xdevapi-rowresult.fetchall.md)
Отримує всі рядки з результату
- [RowResult::fetchOne](mysql-xdevapi-rowresult.fetchone.md)
Отримує рядок із результату
- [RowResult::getColumnsCount](mysql-xdevapi-rowresult.getcolumncount.md)
— Отримує кількість стовпців
- [RowResult::getColumnNames](mysql-xdevapi-rowresult.getcolumnnames.md)
— Отримує всі імена стовпців
- [RowResult::getColumns](mysql-xdevapi-rowresult.getcolumns.md)
Отримує метадані стовпця
- [RowResult::getWarnings](mysql-xdevapi-rowresult.getwarnings.md)
Отримує попередження останньої операції
- [RowResult::getWarningsCount](mysql-xdevapi-rowresult.getwarningscount.md)
— Отримує кількість попереджень останньої операції
