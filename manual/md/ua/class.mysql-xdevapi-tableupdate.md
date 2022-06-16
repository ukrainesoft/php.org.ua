- [«TableSelect::where](mysql-xdevapi-tableselect.where.md)
- [TableUpdate::bind »](mysql-xdevapi-tableupdate.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас TableUpdate

# Клас TableUpdate

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

Оператор для операцій оновлення запису у таблиці.

## Огляд класів

class **mysql_xdevapi\TableUpdate** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md) {

/\* Методи \*/

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

public **execute**():
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

public **limit**(int `$rows`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

public
**orderby**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$orderby_expr`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$orderby_exprs`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

public **set**(string `$table_field`, string `$expression_or_literal`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

public **where**(string `$where_expr`):
[mysql_xdevapi\TableUpdate](class.mysql-xdevapi-tableupdate.md)

}

## Зміст

- [TableUpdate::bind](mysql-xdevapi-tableupdate.bind.md) -
Прив'язує параметри запиту на оновлення
- [TableUpdate::\_\_construct](mysql-xdevapi-tableupdate.construct.md)
- Конструктор класу TableUpdate
- [TableUpdate::execute](mysql-xdevapi-tableupdate.execute.md) -
Виконує запит на оновлення
- [TableUpdate::limit](mysql-xdevapi-tableupdate.limit.md) -
Обмежує кількість рядків для оновлення
- [TableUpdate::orderby](mysql-xdevapi-tableupdate.orderby.md) -
Встановлює критерії сортування
- [TableUpdate::set](mysql-xdevapi-tableupdate.set.md) — Додає
поле для оновлення
- [TableUpdate::where](mysql-xdevapi-tableupdate.where.md) -
Встановлює фільтр пошуку
