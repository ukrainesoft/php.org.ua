- [«
ReflectionEnumUnitCase::getValue](reflectionenumunitcase.getvalue.md)
- [ReflectionEnumBackedCase::\_\_construct
»](reflectionenumbackedcase.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionEnumBackedCase

# Клас ReflectionEnumBackedCase

(PHP 8 \>u003d 8.1.0)

## Вступ

Клас **ReflectionEnumBackedCase** повідомляє інформацію про варіант
типізованого перерахування, який має скалярний еквівалент.

## Огляд класів

class **ReflectionEnumBackedCase** extends
[ReflectionEnumUnitCase](class.reflectionenumunitcase.md) {

/\* Успадковані константи \*/

const int `ReflectionClassConstant::IS_PUBLIC` u003d 1;

const int `ReflectionClassConstant::IS_PROTECTED` u003d 2;

const int `ReflectionClassConstant::IS_PRIVATE` u003d 4;

/\* Наслідувані властивості \*/

public string `$name`;

public string `$class`;

/\* Методи \*/

public
[\_\_construct](reflectionenumbackedcase.construct.md)(object\|string
`$class`, string `$constant`)

public
[getBackingValue](reflectionenumbackedcase.getbackingvalue.md)():
int\|string

/\* Наслідувані методи \*/

public
[ReflectionEnumUnitCase::getEnum](reflectionenumunitcase.getenum.md)():
[ReflectionEnum](class.reflectionenum.md)

public
[ReflectionEnumUnitCase::getValue](reflectionenumunitcase.getvalue.md)():
[UnitEnum](class.unitenum.md)

public static
[ReflectionClassConstant::export](reflectionclassconstant.export.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$class`, string `$name`, bool `$return` u003d ?): string

public
[ReflectionClassConstant::getAttributes](reflectionclassconstant.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public
[ReflectionClassConstant::getDeclaringClass](reflectionclassconstant.getdeclaringclass.md)():
[ReflectionClass](class.reflectionclass.md)

public
[ReflectionClassConstant::getDocComment](reflectionclassconstant.getdoccomment.md)():
string\|false

public
[ReflectionClassConstant::getModifiers](reflectionclassconstant.getmodifiers.md)():
int

public
[ReflectionClassConstant::getName](reflectionclassconstant.getname.md)():
string

public
[ReflectionClassConstant::getValue](reflectionclassconstant.getvalue.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[ReflectionClassConstant::isFinal](reflectionclassconstant.isfinal.md)():
bool

public
[ReflectionClassConstant::isPrivate](reflectionclassconstant.isprivate.md)():
bool

public
[ReflectionClassConstant::isProtected](reflectionclassconstant.isprotected.md)():
bool

public
[ReflectionClassConstant::isPublic](reflectionclassconstant.ispublic.md)():
bool

public
[ReflectionClassConstant::\_\_toString](reflectionclassconstant.tostring.md)():
string

}

## Дивіться також

- [Перерахування](language.enumerations.md)
- [ReflectionEnumUnitCase](class.reflectionenumunitcase.md)

## Зміст

- [ReflectionEnumBackedCase::\_\_construct](reflectionenumbackedcase.construct.md)
— Створює об'єкт ReflectionEnumBackedCase
- [ReflectionEnumBackedCase::getBackingValue](reflectionenumbackedcase.getbackingvalue.md)
— Отримує скалярне значення варіанта перерахування
