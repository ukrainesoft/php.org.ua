- [«
ReflectionClassConstant::\_\_toString](reflectionclassconstant.tostring.md)
- [ReflectionEnum::\_\_construct »](reflectionenum.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionEnum

# Клас ReflectionEnum

(PHP 8 \>u003d 8.1.0)

## Вступ

Клас **ReflectionEnum** повідомляє інформацію про перерахування.

## Огляд класів

class **ReflectionEnum** extends
[ReflectionClass](class.reflectionclass.md) {

/\* Успадковані константи \*/

const int `ReflectionClass::IS_IMPLICIT_ABSTRACT` u003d 16;

const int `ReflectionClass::IS_EXPLICIT_ABSTRACT` u003d 32;

const int `ReflectionClass::IS_FINAL` u003d 64;

/\* Наслідувані властивості \*/

public string `$name`;

/\* Методи \*/

public [\_\_construct](reflectionenum.construct.md)(object\|string
`$objectOrClass`)

public [getBackingType](reflectionenum.getbackingtype.md)():
?[ReflectionType](class.reflectiontype.md)

public [getCase](reflectionenum.getcase.md)(string `$name`):
[ReflectionEnumUnitCase](class.reflectionenumunitcase.md)

public [getCases](reflectionenum.getcases.md)(): array

public [hasCase](reflectionenum.hascase.md)(string `$name`): bool

public [isBacked](reflectionenum.isbacked.md)(): bool

/\* Наслідувані методи \*/

public static
[ReflectionClass::export](reflectionclass.export.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$argument`, bool `$return` u003d **`false`**): string

public
[ReflectionClass::getAttributes](reflectionclass.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public
[ReflectionClass::getConstant](reflectionclass.getconstant.md)(string
`$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[ReflectionClass::getConstants](reflectionclass.getconstants.md)(?int
`$filter` u003d **`null`**): array

public
[ReflectionClass::getConstructor](reflectionclass.getconstructor.md)():
?[ReflectionMethod](class.reflectionmethod.md)

public
[ReflectionClass::getDefaultProperties](reflectionclass.getdefaultproperties.md)():
array

public
[ReflectionClass::getDocComment](reflectionclass.getdoccomment.md)():
string\|false

public [ReflectionClass::getEndLine](reflectionclass.getendline.md)():
int\|false

public
[ReflectionClass::getExtension](reflectionclass.getextension.md)():
?[ReflectionExtension](class.reflectionextension.md)

public
[ReflectionClass::getExtensionName](reflectionclass.getextensionname.md)():
string\|false

public
[ReflectionClass::getFileName](reflectionclass.getfilename.md)():
string\|false

public
[ReflectionClass::getInterfaceNames](reflectionclass.getinterfacenames.md)():
array

public
[ReflectionClass::getInterfaces](reflectionclass.getinterfaces.md)():
array

public
[ReflectionClass::getMethod](reflectionclass.getmethod.md)(string
`$name`): [ReflectionMethod](class.reflectionmethod.md)

public
[ReflectionClass::getMethods](reflectionclass.getmethods.md)(?int
`$filter` u003d **`null`**): array

public
[ReflectionClass::getModifiers](reflectionclass.getmodifiers.md)():
int

public [ReflectionClass::getName](reflectionclass.getname.md)():
string

public
[ReflectionClass::getNamespaceName](reflectionclass.getnamespacename.md)():
string

public
[ReflectionClass::getParentClass](reflectionclass.getparentclass.md)():
[ReflectionClass](class.reflectionclass.md)\|false

public
[ReflectionClass::getProperties](reflectionclass.getproperties.md)(?int
`$filter` u003d **`null`**): array

public
[ReflectionClass::getProperty](reflectionclass.getproperty.md)(string
`$name`): [ReflectionProperty](class.reflectionproperty.md)

public
[ReflectionClass::getReflectionConstant](reflectionclass.getreflectionconstant.md)(string
`$name`):
[ReflectionClassConstant](class.reflectionclassconstant.md)\|false

public
[ReflectionClass::getReflectionConstants](reflectionclass.getreflectionconstants.md)(?int
`$filter` u003d **`null`**): array

public
[ReflectionClass::getShortName](reflectionclass.getshortname.md)():
string

public
[ReflectionClass::getStartLine](reflectionclass.getstartline.md)():
int\|false

public
[ReflectionClass::getStaticProperties](reflectionclass.getstaticproperties.md)():
?array

public
[ReflectionClass::getStaticPropertyValue](reflectionclass.getstaticpropertyvalue.md)(string
`$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$def_value` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[ReflectionClass::getTraitAliases](reflectionclass.gettraitaliases.md)():
array

public
[ReflectionClass::getTraitNames](reflectionclass.gettraitnames.md)():
array

public [ReflectionClass::getTraits](reflectionclass.gettraits.md)():
array

public
[ReflectionClass::hasConstant](reflectionclass.hasconstant.md)(string
`$name`): bool

public
[ReflectionClass::hasMethod](reflectionclass.hasmethod.md)(string
`$name`): bool

public
[ReflectionClass::hasProperty](reflectionclass.hasproperty.md)(string
`$name`): bool

public
[ReflectionClass::implementsInterface](reflectionclass.implementsinterface.md)([ReflectionClass](class.reflectionclass.md)\|string
`$interface`): bool

public
[ReflectionClass::inNamespace](reflectionclass.innamespace.md)(): bool

public [ReflectionClass::isAbstract](reflectionclass.isabstract.md)():
bool

public
[ReflectionClass::isAnonymous](reflectionclass.isanonymous.md)(): bool

public
[ReflectionClass::isCloneable](reflectionclass.iscloneable.md)(): bool

public [ReflectionClass::isEnum](reflectionclass.isenum.md)(): bool

public [ReflectionClass::isFinal](reflectionclass.isfinal.md)(): bool

public
[ReflectionClass::isInstance](reflectionclass.isinstance.md)(object
`$object`): bool

public
[ReflectionClass::isInstantiable](reflectionclass.isinstantiable.md)():
bool

public
[ReflectionClass::isInterface](reflectionclass.isinterface.md)(): bool

public [ReflectionClass::isInternal](reflectionclass.isinternal.md)():
bool

public [ReflectionClass::isIterable](reflectionclass.isiterable.md)():
bool

public
[ReflectionClass::isSubclassOf](reflectionclass.issubclassof.md)([ReflectionClass](class.reflectionclass.md)\|string
`$class`): bool

public [ReflectionClass::isTrait](reflectionclass.istrait.md)(): bool

public
[ReflectionClass::isUserDefined](reflectionclass.isuserdefined.md)():
bool

public
[ReflectionClass::newInstance](reflectionclass.newinstance.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): object

public
[ReflectionClass::newInstanceArgs](reflectionclass.newinstanceargs.md)(array
`$args` u003d \[\]): ?object

public
[ReflectionClass::newInstanceWithoutConstructor](reflectionclass.newinstancewithoutconstructor.md)():
object

public
[ReflectionClass::setStaticPropertyValue](reflectionclass.setstaticpropertyvalue.md)(string
`$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [ReflectionClass::\_\_toString](reflectionclass.tostring.md)():
string

}

## Дивіться також

- [Перерахування](language.enumerations.md)

## Зміст

- [ReflectionEnum::\_\_construct](reflectionenum.construct.md) -
Створює об'єкт ReflectionEnum
- [ReflectionEnum::getBackingType](reflectionenum.getbackingtype.md)
— Отримує тип перерахування, якщо є
- [ReflectionEnum::getCase](reflectionenum.getcase.md) - Повертає
певний варіант перерахування
- [ReflectionEnum::getCases](reflectionenum.getcases.md) -
Повертає список усіх варіантів перерахування
- [ReflectionEnum::hasCase](reflectionenum.hascase.md) — Перевіряє
варіант перерахування
- [ReflectionEnum::isBacked](reflectionenum.isbacked.md) -
Визначає, чи є перерахування типовим
