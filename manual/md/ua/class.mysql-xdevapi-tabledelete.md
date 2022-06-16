- [«Table::update](mysql-xdevapi-table.update.md)
- [TableDelete::bind »](mysql-xdevapi-tabledelete.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас TableDelete

# Клас TableDelete

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

Оператор для операцій видалення таблиці.

## Огляд класів

class **mysql_xdevapi\TableDelete** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md) {

/\* Методи \*/

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

public **execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **limit**(int `$rows`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

public **orderby**(string `$orderby_expr`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

public **where**(string `$where_expr`):
[mysql_xdevapi\TableDelete](class.mysql-xdevapi-tabledelete.md)

}

## Зміст

- [TableDelete::bind](mysql-xdevapi-tabledelete.bind.md) — Зв'язує
параметри запиту на видалення
- [TableDelete::\_\_construct](mysql-xdevapi-tabledelete.construct.md)
- Конструктор класу TableDelete
- [TableDelete::execute](mysql-xdevapi-tabledelete.execute.md) -
Виконує запит на видалення
- [TableDelete::limit](mysql-xdevapi-tabledelete.limit.md) -
Обмежує рядки для видалення
- [TableDelete::orderby](mysql-xdevapi-tabledelete.orderby.md) -
Встановлює критерії сортування видалення
- [TableDelete::where](mysql-xdevapi-tabledelete.where.md)
Встановлює умову пошуку для видалення
