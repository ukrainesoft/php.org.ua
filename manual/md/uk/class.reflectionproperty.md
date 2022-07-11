- [«
ReflectionParameter::\_\_toString](reflectionparameter.tostring.md)
- [ReflectionProperty::\_\_clone »](reflectionproperty.clone.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionProperty

# Клас ReflectionProperty

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionProperty** повідомляє інформацію про властивості класу.

## Огляд класів

class **ReflectionProperty** implements
[Reflector](class.reflector.md) {

/\* Константи \*/

const int `IS_STATIC` u003d 16;

const int `IS_PUBLIC` u003d 1;

const int `IS_PROTECTED` u003d 2;

const int `IS_PRIVATE` u003d 4;

/\* Властивості \*/

public string `$name`;

public string `$class`;

/\* Методи \*/

public [\_\_construct](reflectionproperty.construct.md)(object\|string
`$class`, string `$property`)

private [\_\_clone](reflectionproperty.clone.md)(): void

public static
[export](reflectionproperty.export.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$class`, string `$name`, bool `$return` u003d ?): string

public [getAttributes](reflectionproperty.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public [getDeclaringClass](reflectionproperty.getdeclaringclass.md)():
[ReflectionClass](class.reflectionclass.md)

public [getDefaultValue](reflectionproperty.getdefaultvalue.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getDocComment](reflectionproperty.getdoccomment.md)():
string\|false

public [getModifiers](reflectionproperty.getmodifiers.md)(): int

public [getName](reflectionproperty.getname.md)(): string

public [getType](reflectionproperty.gettype.md)():
?[ReflectionType](class.reflectiontype.md)

public [getValue](reflectionproperty.getvalue.md)(?object `$object` u003d
**`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [hasDefaultValue](reflectionproperty.hasdefaultvalue.md)():
bool

public [hasType](reflectionproperty.hastype.md)(): bool

public [isDefault](reflectionproperty.isdefault.md)(): bool

public [isInitialized](reflectionproperty.isinitialized.md)(?object
`$object` u003d **`null`**): bool

public [isPrivate](reflectionproperty.isprivate.md)(): bool

public [isPromoted](reflectionproperty.ispromoted.md)(): bool

public [isProtected](reflectionproperty.isprotected.md)(): bool

public [isPublic](reflectionproperty.ispublic.md)(): bool

public [isReadOnly](reflectionproperty.isreadonly.md)(): bool

public [isStatic](reflectionproperty.isstatic.md)(): bool

public [setAccessible](reflectionproperty.setaccessible.md)(bool
`$accessible`): void

public [setValue](reflectionproperty.setvalue.md)(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[setValue](reflectionproperty.setvalue.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [\_\_toString](reflectionproperty.tostring.md)(): string

}

## Властивості

`name`
Ім'я якості. Доступно тільки для читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

`class`
Ім'я класу, в якому ця властивість описана. Доступно тільки для
читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

## Зумовлені константи

## Модифікатори ReflectionProperty

**`ReflectionProperty::IS_STATIC`**
Вказує, що властивість є
[Статичним] (language.oop5.static.md). До PHP 7.4.0, значення було
`1`.

**`ReflectionProperty::IS_PUBLIC`**
Вказує, що властивість є
[загальнодоступним](language.oop5.visibility.md). До PHP 7.4.0, значення
було `256`.

**`ReflectionProperty::IS_PROTECTED`**
Вказує, що властивість є
[захищеним](language.oop5.visibility.md). До PHP 7.4.0, значення було
`512`.

**`ReflectionProperty::IS_PRIVATE`**
Вказує, що властивість є
[закритим](language.oop5.visibility.md). До PHP 7.4.0, значення було
`1024`.

> **Примітка**:
>
> Ці константи можуть змінюватися від версії до версії PHP.
> Рекомендується завжди використовувати константи і не покладатися безпосередньо
> на значення.

## Зміст

- [ReflectionProperty::\_\_clone](reflectionproperty.clone.md) -
Клонувати
- [ReflectionProperty::\_\_construct](reflectionproperty.construct.md)
- Конструктор класу ReflectionProperty
- [ReflectionProperty::export](reflectionproperty.export.md) -
Експорт
- [ReflectionProperty::getAttributes](reflectionproperty.getattributes.md)
— Отримує атрибути
- [ReflectionProperty::getDeclaringClass](reflectionproperty.getdeclaringclass.md)
— Отримання класу, що оголошує
- [ReflectionProperty::getDefaultValue](reflectionproperty.getdefaultvalue.md)
— Повертає значення за промовчанням, задане для якості
- [ReflectionProperty::getDocComment](reflectionproperty.getdoccomment.md)
— Отримання doc-коментаря для якості
- [ReflectionProperty::getModifiers](reflectionproperty.getmodifiers.md)
- Отримання модифікаторів властивостей класу
- [ReflectionProperty::getName](reflectionproperty.getname.md) -
Отримання імені властивості
- [ReflectionProperty::getType](reflectionproperty.gettype.md) -
Отримати тип якості
- [ReflectionProperty::getValue](reflectionproperty.getvalue.md) -
Отримує значення
- [ReflectionProperty::hasDefaultValue](reflectionproperty.hasdefaultvalue.md)
— Перевіряє, чи встановлено значення за замовчуванням.
- [ReflectionProperty::hasType](reflectionproperty.hastype.md) -
Перевірити, чи заданий для властивості тип
- [ReflectionProperty::isDefault](reflectionproperty.isdefault.md)
Перевіряє, чи є значення властивістю за умовчанням
- [ReflectionProperty::isInitialized](reflectionproperty.isinitialized.md)
— Перевірити, чи ініціалізована властивість
- [ReflectionProperty::isPrivate](reflectionproperty.isprivate.md) -
Перевіряє, чи властивість закрита
- [ReflectionProperty::isPromoted](reflectionproperty.ispromoted.md)
— Перевіряє, чи визначено властивість у конструкторі
- [ReflectionProperty::isProtected](reflectionproperty.isprotected.md)
— Перевіряє, чи властивість захищена
- [ReflectionProperty::isPublic](reflectionproperty.ispublic.md) -
Перевіряє, чи є властивість загальнодоступною
- [ReflectionProperty::isReadOnly](reflectionproperty.isreadonly.md)
— Перевіряє, чи властивість є readonly-властивістю
- [ReflectionProperty::isStatic](reflectionproperty.isstatic.md) -
Перевірка, чи є властивість статичним
- [ReflectionProperty::setAccessible](reflectionproperty.setaccessible.md)
— Робить властивість доступною
- [ReflectionProperty::setValue](reflectionproperty.setvalue.md) -
Встановлення значення якості
- [ReflectionProperty::\_\_toString](reflectionproperty.tostring.md)
— Перетворення на рядок
