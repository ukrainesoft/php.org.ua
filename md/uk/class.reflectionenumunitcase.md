- [« ReflectionEnum::isBacked](reflectionenum.isbacked.md)
- [ReflectionEnumUnitCase::\_\_construct
»](reflectionenumunitcase.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionEnumUnitCase

# Клас ReflectionEnumUnitCase

(PHP 8 \>u003d 8.1.0)

## Вступ

Клас **ReflectionEnumUnitCase** повідомляє інформацію про варіант
перерахування, що не має скалярного еквівалента.

## Огляд класів

class **ReflectionEnumUnitCase** extends
[ReflectionClassConstant](class.reflectionclassconstant.md) {

/\* Успадковані константи \*/

const int `ReflectionClassConstant::IS_PUBLIC` u003d 1;

const int `ReflectionClassConstant::IS_PROTECTED` u003d 2;

const int `ReflectionClassConstant::IS_PRIVATE` u003d 4;

/\* Наслідувані властивості \*/

public string `$name`;

public string `$class`;

/\* Методи \*/

public
[\_\_construct](reflectionenumunitcase.construct.md)(object\|string
`$class`, string `$constant`)

public [getEnum](reflectionenumunitcase.getenum.md)():
[ReflectionEnum](class.reflectionenum.md)

public [getValue](reflectionenumunitcase.getvalue.md)():
[UnitEnum](class.unitenum.md)

/\* Наслідувані методи \*/

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
- [ReflectionEnumBackedCase](class.reflectionenumbackedcase.md)

## Зміст

- [ReflectionEnumUnitCase::\_\_construct](reflectionenumunitcase.construct.md)
— Створює екземпляр об'єкту ReflectionEnumUnitCase
- [ReflectionEnumUnitCase::getEnum](reflectionenumunitcase.getenum.md)
— Отримує Reflection-об'єкт перерахування цього варіанта
- [ReflectionEnumUnitCase::getValue](reflectionenumunitcase.getvalue.md)
— Отримує об'єкт варіанта перерахування, описаний
Reflection-об'єктом
