- [« CollectionAdd::execute](mysql-xdevapi-collectionadd.execute.md)
- [CollectionFind::bind »](mysql-xdevapi-collectionfind.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас CollectionFind

# Клас CollectionFind

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\CollectionFind** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md),
[mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md),
[mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md),
[mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
{

/\* Методи \*/

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **execute**():
[mysql_xdevapi\DocResult](class.mysql-xdevapi-docresult.md)

public **fields**(string `$projection`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **groupBy**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **having**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **limit**(int `$rows`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **lockExclusive**(int `$lock_waiting_option` u003d ?):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **lockShared**(int `$lock_waiting_option` u003d ?):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **offset**(int `$position`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

public **sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

}

## Зміст

- [CollectionFind::bind](mysql-xdevapi-collectionfind.bind.md) -
Прив'язує значення до заповнювача запиту
- [CollectionFind::\_\_construct](mysql-xdevapi-collectionfind.construct.md)
- Конструктор класу CollectionFind
- [CollectionFind::execute](mysql-xdevapi-collectionfind.execute.md)
- Виконує твердження
- [CollectionFind::fields](mysql-xdevapi-collectionfind.fields.md) -
Встановлює фільтр поля документа
- [CollectionFind::groupBy](mysql-xdevapi-collectionfind.groupby.md)
— Встановлює критерії угруповання
- [CollectionFind::having](mysql-xdevapi-collectionfind.having.md) -
Встановлює умову для агрегатних функцій
- [CollectionFind::limit](mysql-xdevapi-collectionfind.limit.md) -
Обмежує кількість документів, що повертаються.
- [CollectionFind::lockExclusive](mysql-xdevapi-collectionfind.lockexclusive.md)
- Виконує операцію з EXCLUSIVE LOCK
- [CollectionFind::lockShared](mysql-xdevapi-collectionfind.lockshared.md)
- Виконує операцію з SHARED LOCK
- [CollectionFind::offset](mysql-xdevapi-collectionfind.offset.md) -
Пропускає вказану кількість елементів, що повертаються.
- [CollectionFind::sort](mysql-xdevapi-collectionfind.sort.md) -
Встановлює критерії сортування
