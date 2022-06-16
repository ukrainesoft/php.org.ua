- [« CollectionFind::sort](mysql-xdevapi-collectionfind.sort.md)
- [CollectionModify::arrayAppend
»](mysql-xdevapi-collectionmodify.arrayappend.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Клас CollectionModify

# Клас CollectionModify

(PECL mysql-xdevapi \>u003d 8.0.11)

## Вступ

## Огляд класів

class **mysql_xdevapi\CollectionModify** implements
[mysql_xdevapi\Executable](class.mysql-xdevapi-executable.md),
[mysql_xdevapi\CrudOperationBindable](class.mysql-xdevapi-crudoperationbindable.md),
[mysql_xdevapi\CrudOperationLimitable](class.mysql-xdevapi-crudoperationlimitable.md),
[mysql_xdevapi\CrudOperationSkippable](class.mysql-xdevapi-crudoperationskippable.md),
[mysql_xdevapi\CrudOperationSortable](class.mysql-xdevapi-crudoperationsortable.md)
{

/\* Методи \*/

public **arrayAppend**(string `$collection_field`, string
`$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **arrayInsert**(string `$collection_field`, string
`$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **bind**(array `$placeholder_values`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **execute**():
[mysql_xdevapi\Result](class.mysql-xdevapi-result.md)

public **limit**(int `$rows`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **patch**(string `$document`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **replace**(string `$collection_field`, string
`$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **set**(string `$collection_field`, string
`$expression_or_literal`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **skip**(int `$position`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **sort**(string `$sort_expr`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

public **unset**(array `$fields`):
[mysql_xdevapi\CollectionModify](class.mysql-xdevapi-collectionmodify.md)

}

## Зміст

- [CollectionModify::arrayAppend](mysql-xdevapi-collectionmodify.arrayappend.md)
— Додає елемент у поле масиву
- [CollectionModify::arrayInsert](mysql-xdevapi-collectionmodify.arrayinsert.md)
— Додає елемент у поле масиву
- [CollectionModify::bind](mysql-xdevapi-collectionmodify.bind.md) -
Прив'язує значення до заповнювача запиту
- [CollectionModify::\_\_construct](mysql-xdevapi-collectionmodify.construct.md)
- Конструктор класу CollectionModify
- [CollectionModify::execute](mysql-xdevapi-collectionmodify.execute.md)
- Виконує операцію зміни
- [CollectionModify::limit](mysql-xdevapi-collectionmodify.limit.md)
— Обмежує кількість документів, що змінюються.
- [CollectionModify::patch](mysql-xdevapi-collectionmodify.patch.md)
- Виправляє документ
- [CollectionModify::replace](mysql-xdevapi-collectionmodify.replace.md)
— Замінює поле документа
- [CollectionModify::set](mysql-xdevapi-collectionmodify.set.md) -
Встановлює атрибут документа
- [CollectionModify::skip](mysql-xdevapi-collectionmodify.skip.md)
Пропускає елементи
- [CollectionModify::sort](mysql-xdevapi-collectionmodify.sort.md) -
Встановлює критерії сортування
- [CollectionModify::unset](mysql-xdevapi-collectionmodify.unset.md)
— скидає значення полів документа
