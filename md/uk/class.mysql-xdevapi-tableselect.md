- [« TableInsert::values](mysql-xdevapi-tableinsert.values.md)
- [TableSelect::bind »](mysql-xdevapi-tableselect.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас TableSelect

# Клас TableSelect

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

Оператор для пошуку запису в таблиці.

## Огляд класів

class **mysql_xdevapi\TableSelect** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md) {

/\* Методи \*/

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **execute**():
[mysql_xdevapi\RowResult](class.mysql-xdevapi-rowresult.md)

public
**groupBy**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$sort_expr`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **having**(string `$sort_expr`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **limit**(int `$rows`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **lockExclusive**(int `$lock_waiting_option` u003d ?):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **lockShared**(int `$lock_waiting_option` u003d ?):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **offset**(int `$position`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public
**orderby**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$sort_expr`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$sort_exprs`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

public **where**(string `$where_expr`):
[mysql_xdevapi\TableSelect](class.mysql-xdevapi-tableselect.md)

}

## Зміст

- [TableSelect::bind](mysql-xdevapi-tableselect.bind.md) -
Прив'язує параметри запиту вибірки
- [TableSelect::\_\_construct](mysql-xdevapi-tableselect.construct.md)
- Конструктор класу TableSelect
- [TableSelect::execute](mysql-xdevapi-tableselect.execute.md) -
Виконує оператор вибірки
- [TableSelect::groupBy](mysql-xdevapi-tableselect.groupby.md) -
Встановлює критерії угруповання вибірки
- [TableSelect::having](mysql-xdevapi-tableselect.having.md) -
Встановлює вибір із умовою
- [TableSelect::limit](mysql-xdevapi-tableselect.limit.md) -
Обмежує вибрані рядки
- [TableSelect::lockExclusive](mysql-xdevapi-tableselect.lockexclusive.md)
- Виконує EXCLUSIVE LOCK
- [TableSelect::lockShared](mysql-xdevapi-tableselect.lockshared.md)
- Виконує SHARED LOCK
- [TableSelect::offset](mysql-xdevapi-tableselect.offset.md) -
Встановлює межу зміщення
- [TableSelect::orderby](mysql-xdevapi-tableselect.orderby.md) -
Встановлює критерії сортування вибірки
- [TableSelect::where](mysql-xdevapi-tableselect.where.md) -
Встановлює умову пошуку вибірки
