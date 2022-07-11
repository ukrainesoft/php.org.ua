- [«
ReflectionProperty::\_\_toString](reflectionproperty.tostring.md)
- [ReflectionType::allowsNull »](reflectiontype.allowsnull.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionType

# Клас ReflectionType

(PHP 7, PHP 8)

## Вступ

Клас **ReflectionType** повідомляє інформацію про тип
значення/повертається значення функції або тип властивості класу.
Модуль Reflection оголошує такі підтипи:

- [ReflectionNamedType](class.reflectionnamedtype.md) (починаючи з PHP
7.1.0)
- [ReflectionUnionType](class.reflectionuniontype.md) (починаючи з PHP
8.0.0)
- [ReflectionIntersectionType](class.reflectionintersectiontype.md)
(починаючи з PHP 8.1.0)

## Огляд класів

abstract class **ReflectionType** implements
[Stringable](class.stringable.md) {

/\* Методи \*/

public [allowsNull](reflectiontype.allowsnull.md)(): bool

public [\_\_toString](reflectiontype.tostring.md)(): string

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| 8.0.0 | **ReflectionType** став абстрактним, а метод **ReflectionType::isBuiltin()** був переміщений до [ReflectionNamedType::isBuiltin()](reflectionnamedtype.isbuiltin.md). |

## Зміст

- [ReflectionType::allowsNull](reflectiontype.allowsnull.md) -
Перевіряє, чи допустимо NULL
- [ReflectionType::\_\_toString](reflectiontype.tostring.md) -
Перетворення на рядок
