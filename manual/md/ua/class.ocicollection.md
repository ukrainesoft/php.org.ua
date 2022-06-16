- [«
oci_unregister_taf_callback](function.oci-unregister-taf-callback.md)
- [OCICollection::append »](ocicollection.append.md)

- [PHP Manual](index.md)
- [OCI8](book.oci8.md)
- Клас OCICollection

# Клас OCICollection

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

## Вступ

Функціонал колекцій OCI8.

> **Примітка**:
>
> Клас **OCI-Collection** був перейменований на **OCICollection** у PHP 8
> OCI8 3.0.0 відповідно до стандартів іменування PHP.

## Огляд класів

class **OCICollection** {

/\* Методи \*/

public [append](ocicollection.append.md)(string `$value`): bool

public
[assign](ocicollection.assign.md)([OCICollection](class.ocicollection.md)
`$from`): bool

public [assignElem](ocicollection.assignelem.md)(int `$index`, string
`$value`): bool

public [free](ocicollection.free.md)(): bool

public [getElem](ocicollection.getelem.md)(int `$index`):
string\|float\|null\|false

public [max](ocicollection.max.md)(): int\|false

public [size](ocicollection.size.md)(): int\|false

public [trim](ocicollection.trim.md)(int `$num`): bool

}

## Зміст

- [OCICollection::append](ocicollection.append.md) - Додає
елемент у колекцію
- [OCICollection::assign](ocicollection.assign.md) - Надає
колекції значення іншої, вже існуючої колекції
- [OCICollection::assignElem](ocicollection.assignelem.md) -
Надає значення елементу колекції
- [OCICollection::free](ocicollection.free.md) - Звільняє
ресурси, які займає об'єкт колекції
- [OCICollection::getElem](ocicollection.getelem.md) - Повертає
значення елемента
- [OCICollection::max](ocicollection.max.md) — Повертає
максимальна кількість елементів у колекції
- [OCICollection::size](ocicollection.size.md) - Повертає
кількість елементів у колекції
- [OCICollection::trim](ocicollection.trim.md) — Відсікає елементи з
кінця колекції
