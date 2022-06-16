- [«
ReflectionEnumBackedCase::getBackingValue](reflectionenumbackedcase.getbackingvalue.md)
- [ReflectionZendExtension::\_\_clone
»](reflectionzendextension.clone.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionZendExtension

# Клас ReflectionZendExtension

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

## Огляд класів

class **ReflectionZendExtension** implements
[Reflector](class.reflector.md) {

/\* Властивості \*/

public string `$name`;

/\* Методи \*/

public [\_\_construct](reflectionzendextension.construct.md)(string
`$name`)

private [\_\_clone](reflectionzendextension.clone.md)(): void

public static [export](reflectionzendextension.export.md)(string
`$name`, bool `$return` u003d ?): string

public [getAuthor](reflectionzendextension.getauthor.md)(): string

public [getCopyright](reflectionzendextension.getcopyright.md)():
string

public [getName](reflectionzendextension.getname.md)(): string

public [getURL](reflectionzendextension.geturl.md)(): string

public [getVersion](reflectionzendextension.getversion.md)(): string

public [\_\_toString](reflectionzendextension.tostring.md)(): string

}

## Властивості

`name`
Ім'я модуль. Доступно тільки для читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

## Зміст

- [ReflectionZendExtension::\_\_clone](reflectionzendextension.clone.md)
- Обробник клонування
- [ReflectionZendExtension::\_\_construct](reflectionzendextension.construct.md)
- Конструктор
- [ReflectionZendExtension::export](reflectionzendextension.export.md)
- Експорт
- [ReflectionZendExtension::getAuthor](reflectionzendextension.getauthor.md)
— Отримує автора
- [ReflectionZendExtension::getCopyright](reflectionzendextension.getcopyright.md)
— Отримує авторські права
- [ReflectionZendExtension::getName](reflectionzendextension.getname.md)
— Отримує ім'я
- [ReflectionZendExtension::getURL](reflectionzendextension.geturl.md)
— Отримує URL
- [ReflectionZendExtension::getVersion](reflectionzendextension.getversion.md)
— Отримує версію
- [ReflectionZendExtension::\_\_toString](reflectionzendextension.tostring.md)
- Обробник перетворення в рядок
