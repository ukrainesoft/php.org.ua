- [« ReflectionClass::\_\_toString](reflectionclass.tostring.md)
- [ReflectionClassConstant::\_\_construct
»](reflectionclassconstant.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionClassConstant

# Клас ReflectionClassConstant

(PHP 7 \>u003d 7.1.0, PHP 8)

## Вступ

Клас **ReflectionClassConstant** використовується для отримання інформації
про константи класу.

## Огляд класів

class **ReflectionClassConstant** implements
[Reflector](class.reflector.md) {

/\* Константи \*/

const int `IS_PUBLIC` u003d 1;

const int `IS_PROTECTED` u003d 2;

const int `IS_PRIVATE` u003d 4;

/\* Властивості \*/

public string `$name`;

public string `$class`;

/\* Методи \*/

public
[\_\_construct](reflectionclassconstant.construct.md)(object\|string
`$class`, string `$constant`)

public static
[export](reflectionclassconstant.export.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$class`, string `$name`, bool `$return` u003d ?): string

public
[getAttributes](reflectionclassconstant.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public
[getDeclaringClass](reflectionclassconstant.getdeclaringclass.md)():
[ReflectionClass](class.reflectionclass.md)

public [getDocComment](reflectionclassconstant.getdoccomment.md)():
string\|false

public [getModifiers](reflectionclassconstant.getmodifiers.md)(): int

public [getName](reflectionclassconstant.getname.md)(): string

public [getValue](reflectionclassconstant.getvalue.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [isFinal](reflectionclassconstant.isfinal.md)(): bool

public [isPrivate](reflectionclassconstant.isprivate.md)(): bool

public [isProtected](reflectionclassconstant.isprotected.md)(): bool

public [isPublic](reflectionclassconstant.ispublic.md)(): bool

public [\_\_toString](reflectionclassconstant.tostring.md)(): string

}

## Властивості

`name`
Назва константи класу. Лише читання. У разі спроби зміни
викидає виняток
[ReflectionException](class.reflectionexception.md).

`class`
Ім'я класу, у якому визначено константу. Лише читання. В разі
спроби зміни викидає виняток
[ReflectionException](class.reflectionexception.md).

## Зумовлені константи

## ReflectionClassConstant Modifiers

**`ReflectionClassConstant::IS_PUBLIC`**
Вказує, що константа є
[загальнодоступною](language.oop5.visibility.md). До PHP 7.4.0, значення
було `256`.

**`ReflectionClassConstant::IS_PROTECTED`**
Вказує, що константа є
[захищеною](language.oop5.visibility.md). До PHP 7.4.0, значення було
`512`.

**`ReflectionClassConstant::IS_PRIVATE`**
Вказує, що константа є
[закритий](language.oop5.visibility.md). До PHP 7.4.0, значення було
`1024`.

> **Примітка**:
>
> Ці константи можуть змінюватися від версії до версії PHP.
> Рекомендується завжди використовувати константи і не покладатися безпосередньо
> на значення.

## Зміст

- [ReflectionClassConstant::\_\_construct](reflectionclassconstant.construct.md)
- Створює ReflectionClassConstant
- [ReflectionClassConstant::export](reflectionclassconstant.export.md)
- Експорт
- [ReflectionClassConstant::getAttributes](reflectionclassconstant.getattributes.md)
— Отримує атрибути
- [ReflectionClassConstant::getDeclaringClass](reflectionclassconstant.getdeclaringclass.md)
— Отримує клас, що оголошує
- [ReflectionClassConstant::getDocComment](reflectionclassconstant.getdoccomment.md)
— Отримує doc-коментарі
- [ReflectionClassConstant::getModifiers](reflectionclassconstant.getmodifiers.md)
— Отримує модифікатори константи класу
- [ReflectionClassConstant::getName](reflectionclassconstant.getname.md)
— Отримати ім'я константи
- [ReflectionClassConstant::getValue](reflectionclassconstant.getvalue.md)
— Отримує значення
- [ReflectionClassConstant::isFinal](reflectionclassconstant.isfinal.md)
— Перевіряє, чи є константа класу остаточною
- [ReflectionClassConstant::isPrivate](reflectionclassconstant.isprivate.md)
— Перевіряє, чи є константа закритою
- [ReflectionClassConstant::isProtected](reflectionclassconstant.isprotected.md)
— Перевіряє, чи константа захищена
- [ReflectionClassConstant::isPublic](reflectionclassconstant.ispublic.md)
— Перевіряє, чи константа є загальнодоступною
- [ReflectionClassConstant::\_\_toString](reflectionclassconstant.tostring.md)
— Повертає строкове представлення об'єкту ReflectionClassConstant
