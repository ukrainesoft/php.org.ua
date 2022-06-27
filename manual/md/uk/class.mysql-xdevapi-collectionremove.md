- [«
CollectionModify::unset](mysql-xdevapi-collectionmodify.unset.md)
- [CollectionRemove::bind »](mysql-xdevapi-collectionremove.bind.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас CollectionRemove

# Клас CollectionRemove

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\CollectionRemove** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md),
[mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md),
[mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md),
[mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
{

/\* Методи \*/

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

public **execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **limit**(int `$rows`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

public **sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

}

## Зміст

- [CollectionRemove::bind](mysql-xdevapi-collectionremove.bind.md) -
Прив'язує значення до заповнювача
- [CollectionRemove::\_\_construct](mysql-xdevapi-collectionremove.construct.md)
- Конструктор класу CollectionRemove
- [CollectionRemove::execute](mysql-xdevapi-collectionremove.execute.md)
- Виконує операцію видалення
- [CollectionRemove::limit](mysql-xdevapi-collectionremove.limit.md)
— Обмежує кількість документів для видалення
- [CollectionRemove::sort](mysql-xdevapi-collectionremove.sort.md)
Встановлює критерії сортування
