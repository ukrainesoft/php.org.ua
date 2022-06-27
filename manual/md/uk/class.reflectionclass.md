- [« Reflection::getModifierNames](reflection.getmodifiernames.md)
- [ReflectionClass::\_\_construct »](reflectionclass.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionClass

# Клас ReflectionClass

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionClass** повідомляє інформацію про клас.

## Огляд класів

class **ReflectionClass** implements [Reflector](class.reflector.md) {

/\* Константи \*/

const int `IS_IMPLICIT_ABSTRACT` u003d 16;

const int `IS_EXPLICIT_ABSTRACT` u003d 32;

const int `IS_FINAL` u003d 64;

/\* Властивості \*/

public string `$name`;

/\* Методи \*/

public [\_\_construct](reflectionclass.construct.md)(object\|string
`$objectOrClass`)

public static
[export](reflectionclass.export.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$argument`, bool `$return` u003d **`false`**): string

public [getAttributes](reflectionclass.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public [getConstant](reflectionclass.getconstant.md)(string `$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getConstants](reflectionclass.getconstants.md)(?int `$filter`
u003d **`null`**): array

public [getConstructor](reflectionclass.getconstructor.md)():
?[ReflectionMethod](class.reflectionmethod.md)

public
[getDefaultProperties](reflectionclass.getdefaultproperties.md)():
array

public [getDocComment](reflectionclass.getdoccomment.md)():
string\|false

public [getEndLine](reflectionclass.getendline.md)(): int\|false

public [getExtension](reflectionclass.getextension.md)():
?[ReflectionExtension](class.reflectionextension.md)

public [getExtensionName](reflectionclass.getextensionname.md)():
string\|false

public [getFileName](reflectionclass.getfilename.md)(): string\|false

public [getInterfaceNames](reflectionclass.getinterfacenames.md)():
array

public [getInterfaces](reflectionclass.getinterfaces.md)(): array

public [getMethod](reflectionclass.getmethod.md)(string `$name`):
[ReflectionMethod](class.reflectionmethod.md)

public [getMethods](reflectionclass.getmethods.md)(?int `$filter` u003d
**`null`**): array

public [getModifiers](reflectionclass.getmodifiers.md)(): int

public [getName](reflectionclass.getname.md)(): string

public [getNamespaceName](reflectionclass.getnamespacename.md)():
string

public [getParentClass](reflectionclass.getparentclass.md)():
[ReflectionClass](class.reflectionclass.md)\|false

public [getProperties](reflectionclass.getproperties.md)(?int
`$filter` u003d **`null`**): array

public [getProperty](reflectionclass.getproperty.md)(string `$name`):
[ReflectionProperty](class.reflectionproperty.md)

public
[getReflectionConstant](reflectionclass.getreflectionconstant.md)(string
`$name`):
[ReflectionClassConstant](class.reflectionclassconstant.md)\|false

public
[getReflectionConstants](reflectionclass.getreflectionconstants.md)(?int
`$filter` u003d **`null`**): array

public [getShortName](reflectionclass.getshortname.md)(): string

public [getStartLine](reflectionclass.getstartline.md)(): int\|false

public
[getStaticProperties](reflectionclass.getstaticproperties.md)():
?array

public
[getStaticPropertyValue](reflectionclass.getstaticpropertyvalue.md)(string
`$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$def_value` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getTraitAliases](reflectionclass.gettraitaliases.md)(): array

public [getTraitNames](reflectionclass.gettraitnames.md)(): array

public [getTraits](reflectionclass.gettraits.md)(): array

public [hasConstant](reflectionclass.hasconstant.md)(string `$name`):
bool

public [hasMethod](reflectionclass.hasmethod.md)(string `$name`): bool

public [hasProperty](reflectionclass.hasproperty.md)(string `$name`):
bool

public
[implementsInterface](reflectionclass.implementsinterface.md)([ReflectionClass](class.reflectionclass.md)\|string
`$interface`): bool

public [inNamespace](reflectionclass.innamespace.md)(): bool

public [isAbstract](reflectionclass.isabstract.md)(): bool

public [isAnonymous](reflectionclass.isanonymous.md)(): bool

public [isCloneable](reflectionclass.iscloneable.md)(): bool

public [isEnum](reflectionclass.isenum.md)(): bool

public [isFinal](reflectionclass.isfinal.md)(): bool

public [isInstance](reflectionclass.isinstance.md)(object `$object`):
bool

public [isInstantiable](reflectionclass.isinstantiable.md)(): bool

public [isInterface](reflectionclass.isinterface.md)(): bool

public [isInternal](reflectionclass.isinternal.md)(): bool

public [isIterable](reflectionclass.isiterable.md)(): bool

public
[isSubclassOf](reflectionclass.issubclassof.md)([ReflectionClass](class.reflectionclass.md)\|string
`$class`): bool

public [isTrait](reflectionclass.istrait.md)(): bool

public [isUserDefined](reflectionclass.isuserdefined.md)(): bool

public
[newInstance](reflectionclass.newinstance.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): object

public [newInstanceArgs](reflectionclass.newinstanceargs.md)(array
`$args` u003d \[\]): ?object

public
[newInstanceWithoutConstructor](reflectionclass.newinstancewithoutconstructor.md)():
object

public
[setStaticPropertyValue](reflectionclass.setstaticpropertyvalue.md)(string
`$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [\_\_toString](reflectionclass.tostring.md)(): string

}

## Властивості

`name`
Назва класу. Доступно тільки для читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

## Зумовлені константи

## Модифікатори ReflectionClass

**`ReflectionClass::IS_IMPLICIT_ABSTRACT`**
Вказує, що клас є
[абстрактним](language.oop5.abstract.md), тому що він містить
абстрактних методів.

**`ReflectionClass::IS_EXPLICIT_ABSTRACT`**
Вказує, що клас є
[абстрактним](language.oop5.abstract.md), тому що так вказано при
його опис.

**`ReflectionClass::IS_FINAL`**
Вказує, що клас є [остаточним
(final)](language.oop5.final.md)

## Зміст

- [ReflectionClass::\_\_construct](reflectionclass.construct.md) -
Створює об'єкт класу ReflectionClass
- [ReflectionClass::export](reflectionclass.export.md)
Експортує клас
- [ReflectionClass::getAttributes](reflectionclass.getattributes.md)
— Отримує атрибути
- [ReflectionClass::getConstant](reflectionclass.getconstant.md) -
Повертає певну константу
- [ReflectionClass::getConstants](reflectionclass.getconstants.md) -
Повертає константи
- [ReflectionClass::getConstructor](reflectionclass.getconstructor.md)
- Повертає конструктор класу
- [ReflectionClass::getDefaultProperties](reflectionclass.getdefaultproperties.md)
— Повертає властивості за промовчанням
- [ReflectionClass::getDocComment](reflectionclass.getdoccomment.md)
— Повертає doc-блоки коментарів
- [ReflectionClass::getEndLine](reflectionclass.getendline.md) -
Повертає номер останнього рядка
- [ReflectionClass::getExtension](reflectionclass.getextension.md) -
Повертає об'єкт класу ReflectionExtension для модуля,
визначального клас
- [ReflectionClass::getExtensionName](reflectionclass.getextensionname.md)
— Повертає ім'я модуля, що визначає клас
- [ReflectionClass::getFileName](reflectionclass.getfilename.md) -
Повертає ім'я файлу, у якому визначено клас
- [ReflectionClass::getInterfaceNames](reflectionclass.getinterfacenames.md)
— Повертає імена інтерфейсів
- [ReflectionClass::getInterfaces](reflectionclass.getinterfaces.md)
— Повертає інтерфейси
- [ReflectionClass::getMethod](reflectionclass.getmethod.md) -
Повертає екземпляр ReflectionMethod для методу класу
- [ReflectionClass::getMethods](reflectionclass.getmethods.md) -
Повертає список методів у вигляді масиву
- [ReflectionClass::getModifiers](reflectionclass.getmodifiers.md) -
Повертає інформацію про модифікаторів класу
- [ReflectionClass::getName](reflectionclass.getname.md)
Повертає ім'я класу
- [ReflectionClass::getNamespaceName](reflectionclass.getnamespacename.md)
— Повертає назву простору імен
- [ReflectionClass::getParentClass](reflectionclass.getparentclass.md)
- Повертає батьківський клас
- [ReflectionClass::getProperties](reflectionclass.getproperties.md)
- Повертає властивості
- [ReflectionClass::getProperty](reflectionclass.getproperty.md) -
Повертає екземпляр ReflectionProperty для якості класу
- [ReflectionClass::getReflectionConstant](reflectionclass.getreflectionconstant.md)
— Отримує ReflectionClassConstant для константи класу
- [ReflectionClass::getReflectionConstants](reflectionclass.getreflectionconstants.md)
— Отримує константи класу
- [ReflectionClass::getShortName](reflectionclass.getshortname.md) -
Повертає коротке ім'я
- [ReflectionClass::getStartLine](reflectionclass.getstartline.md) -
Повертає номер початкового рядка
- [ReflectionClass::getStaticProperties](reflectionclass.getstaticproperties.md)
- Повертає статичні властивості
- [ReflectionClass::getStaticPropertyValue](reflectionclass.getstaticpropertyvalue.md)
— Повертає значення статичної властивості
- [ReflectionClass::getTraitAliases](reflectionclass.gettraitaliases.md)
— Повертає масив псевдонімів трейтів
- [ReflectionClass::getTraitNames](reflectionclass.gettraitnames.md)
— Повертає масив імен трейтів, які використовуються у цьому класі
- [ReflectionClass::getTraits](reflectionclass.gettraits.md) -
Повертає масив трейтів, що використовуються у цьому класі
- [ReflectionClass::hasConstant](reflectionclass.hasconstant.md) -
Перевіряє, чи визначена константа
- [ReflectionClass::hasMethod](reflectionclass.hasmethod.md) -
Перевіряє, чи заданий метод
- [ReflectionClass::hasProperty](reflectionclass.hasproperty.md)
Перевіряє, чи визначено властивість
- [ReflectionClass::implementsInterface](reflectionclass.implementsinterface.md)
— Перевіряє, чи реалізується інтерфейс
- [ReflectionClass::inNamespace](reflectionclass.innamespace.md)
Перевіряє, чи клас у просторі імен
- [ReflectionClass::isAbstract](reflectionclass.isabstract.md)
Перевіряє, чи є клас абстрактним
- [ReflectionClass::isAnonymous](reflectionclass.isanonymous.md)
Перевіряє, чи є клас анонімним
- [ReflectionClass::isCloneable](reflectionclass.iscloneable.md) -
Перевіряє, чи можна клонувати цей клас
- [ReflectionClass::isEnum](reflectionclass.isenum.md) — Повертає,
чи є клас перерахуванням
- [ReflectionClass::isFinal](reflectionclass.isfinal.md)
Перевіряє, чи є клас остаточним (final)
- [ReflectionClass::isInstance](reflectionclass.isinstance.md) -
Перевіряє, чи об'єкт належить класу
- [ReflectionClass::isInstantiable](reflectionclass.isinstantiable.md)
— Перевіряє, чи можна створити екземпляр класу
- [ReflectionClass::isInterface](reflectionclass.isinterface.md) -
Перевіряє, чи є клас інтерфейсом
- [ReflectionClass::isInternal](reflectionclass.isinternal.md) -
Перевіряє, чи є клас вбудованим у модуль чи ядро
- [ReflectionClass::isIterable](reflectionclass.isiterable.md) -
Перевірити, чи клас ітерується
- [ReflectionClass::isIterateable](reflectionclass.isiterateable.md)
- Псевдонім ReflectionClass::isIterable
- [ReflectionClass::isSubclassOf](reflectionclass.issubclassof.md)
Перевіряє, чи клас підкласом
- [ReflectionClass::isTrait](reflectionclass.istrait.md) -
Перевіряє, чи це трейтом
- [ReflectionClass::isUserDefined](reflectionclass.isuserdefined.md)
— Перевіряє, чи є клас для користувача
- [ReflectionClass::newInstance](reflectionclass.newinstance.md) -
Створює екземпляр класу з переданими аргументами
- [ReflectionClass::newInstanceArgs](reflectionclass.newinstanceargs.md)
- Створює екземпляр класу з переданими параметрами
- [ReflectionClass::newInstanceWithoutConstructor](reflectionclass.newinstancewithoutconstructor.md)
- Створює новий екземпляр класу без виклику конструктора
- [ReflectionClass::setStaticPropertyValue](reflectionclass.setstaticpropertyvalue.md)
- Встановлює значення статичної властивості
- [ReflectionClass::\_\_toString](reflectionclass.tostring.md) -
Повертає рядкову виставу об'єкта класу ReflectionClass
