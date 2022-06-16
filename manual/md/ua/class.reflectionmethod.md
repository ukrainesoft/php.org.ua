- [«
ReflectionFunctionAbstract::\_\_toString](reflectionfunctionabstract.tostring.md)
- [ReflectionMethod::\_\_construct »](reflectionmethod.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionMethod

# Клас ReflectionMethod

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionMethod** повідомляє інформацію про методи.

## Огляд класів

class **ReflectionMethod** extends
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md) {

/\* Константи \*/

const int `IS_STATIC` u003d 16;

const int `IS_PUBLIC` u003d 1;

const int `IS_PROTECTED` u003d 2;

const int `IS_PRIVATE` u003d 4;

const int `IS_ABSTRACT` u003d 64;

const int `IS_FINAL` u003d 32;

/\* Властивості \*/

public string `$class`;

/\* Наслідувані властивості \*/

public string `$name`;

/\* Методи \*/

public [\_\_construct](reflectionmethod.construct.md)(object\|string
`$objectOrMethod`, string `$method`)

public [\_\_construct](reflectionmethod.construct.md)(string
`$classMethod`)

public static [export](reflectionmethod.export.md)(string `$class`,
string `$name`, bool `$return` u003d **`false`**): string

public [getClosure](reflectionmethod.getclosure.md)(?object `$object`
u003d **`null`**): [Closure](class.closure.md)

public [getDeclaringClass](reflectionmethod.getdeclaringclass.md)():
[ReflectionClass](class.reflectionclass.md)

public [getModifiers](reflectionmethod.getmodifiers.md)(): int

public [getPrototype](reflectionmethod.getprototype.md)():
[ReflectionMethod](class.reflectionmethod.md)

public [invoke](reflectionmethod.invoke.md)(?object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [invokeArgs](reflectionmethod.invokeargs.md)(?object `$object`,
array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [isAbstract](reflectionmethod.isabstract.md)(): bool

public [isConstructor](reflectionmethod.isconstructor.md)(): bool

public [isDestructor](reflectionmethod.isdestructor.md)(): bool

public [isFinal](reflectionmethod.isfinal.md)(): bool

public [isPrivate](reflectionmethod.isprivate.md)(): bool

public [isProtected](reflectionmethod.isprotected.md)(): bool

public [isPublic](reflectionmethod.ispublic.md)(): bool

public [isStatic](reflectionmethod.isstatic.md)(): bool

public [setAccessible](reflectionmethod.setaccessible.md)(bool
`$accessible`): void

public [\_\_toString](reflectionmethod.tostring.md)(): string

/\* Наслідувані методи \*/

private
[ReflectionFunctionAbstract::\_\_clone](reflectionfunctionabstract.clone.md)():
void

public
[ReflectionFunctionAbstract::getAttributes](reflectionfunctionabstract.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public
[ReflectionFunctionAbstract::getClosureScopeClass](reflectionfunctionabstract.getclosurescopeclass.md)():
?[ReflectionClass](class.reflectionclass.md)

public
[ReflectionFunctionAbstract::getClosureThis](reflectionfunctionabstract.getclosurethis.md)():
?object

public
[ReflectionFunctionAbstract::getClosureUsedVariables](reflectionfunctionabstract.getclosureusedvariables.md)():
array

public
[ReflectionFunctionAbstract::getDocComment](reflectionfunctionabstract.getdoccomment.md)():
string\|false

public
[ReflectionFunctionAbstract::getEndLine](reflectionfunctionabstract.getendline.md)():
int\|false

public
[ReflectionFunctionAbstract::getExtension](reflectionfunctionabstract.getextension.md)():
?[ReflectionExtension](class.reflectionextension.md)

public
[ReflectionFunctionAbstract::getExtensionName](reflectionfunctionabstract.getextensionname.md)():
string\|false

public
[ReflectionFunctionAbstract::getFileName](reflectionfunctionabstract.getfilename.md)():
string\|false

public
[ReflectionFunctionAbstract::getName](reflectionfunctionabstract.getname.md)():
string

public
[ReflectionFunctionAbstract::getNamespaceName](reflectionfunctionabstract.getnamespacename.md)():
string

public
[ReflectionFunctionAbstract::getNumberOfParameters](reflectionfunctionabstract.getnumberofparameters.md)():
int

public
[ReflectionFunctionAbstract::getNumberOfRequiredParameters](reflectionfunctionabstract.getnumberofrequiredparameters.md)():
int

public
[ReflectionFunctionAbstract::getParameters](reflectionfunctionabstract.getparameters.md)():
array

public
[ReflectionFunctionAbstract::getReturnType](reflectionfunctionabstract.getreturntype.md)():
?[ReflectionType](class.reflectiontype.md)

public
[ReflectionFunctionAbstract::getShortName](reflectionfunctionabstract.getshortname.md)():
string

public
[ReflectionFunctionAbstract::getStartLine](reflectionfunctionabstract.getstartline.md)():
int\|false

public
[ReflectionFunctionAbstract::getStaticVariables](reflectionfunctionabstract.getstaticvariables.md)():
array

public
[ReflectionFunctionAbstract::getTentativeReturnType](reflectionfunctionabstract.gettentativereturntype.md)():
?[ReflectionType](class.reflectiontype.md)

public
[ReflectionFunctionAbstract::hasReturnType](reflectionfunctionabstract.hasreturntype.md)():
bool

public
[ReflectionFunctionAbstract::hasTentativeReturnType](reflectionfunctionabstract.hastentativereturntype.md)():
bool

public
[ReflectionFunctionAbstract::inNamespace](reflectionfunctionabstract.innamespace.md)():
bool

public
[ReflectionFunctionAbstract::isClosure](reflectionfunctionabstract.isclosure.md)():
bool

public
[ReflectionFunctionAbstract::isDeprecated](reflectionfunctionabstract.isdeprecated.md)():
bool

public
[ReflectionFunctionAbstract::isGenerator](reflectionfunctionabstract.isgenerator.md)():
bool

public
[ReflectionFunctionAbstract::isInternal](reflectionfunctionabstract.isinternal.md)():
bool

public
[ReflectionFunctionAbstract::isUserDefined](reflectionfunctionabstract.isuserdefined.md)():
bool

public
[ReflectionFunctionAbstract::isVariadic](reflectionfunctionabstract.isvariadic.md)():
bool

public
[ReflectionFunctionAbstract::returnsReference](reflectionfunctionabstract.returnsreference.md)():
bool

abstract public
[ReflectionFunctionAbstract::\_\_toString](reflectionfunctionabstract.tostring.md)():
void

}

## Властивості

`name`
Ім'я методу

`class`
Ім'я класу

## Зумовлені константи

## Модифікатори ReflectionMethod

**`ReflectionMethod::IS_STATIC`**
Вказує, що це статичний метод. До PHP 7.4.0, значення було
`1`.

**`ReflectionMethod::IS_PUBLIC`**
Вказує, що це загальнодоступний метод. До PHP 7.4.0, значення
було `256`.

**`ReflectionMethod::IS_PROTECTED`**
Вказує, що це захищений метод. До PHP 7.4.0, значення було
`512`.

**`ReflectionMethod::IS_PRIVATE`**
Вказує, що це закритий метод. До PHP 7.4.0, значення було
`1024`.

**`ReflectionMethod::IS_ABSTRACT`**
Вказує, що це абстрактний метод. До PHP 7.4.0, значення було
`2`.

**`ReflectionMethod::IS_FINAL`**
Вказує, що це остаточний метод. До PHP 7.4.0, значення
було `4`.

> **Примітка**:
>
> Ці константи можуть змінюватися від версії до версії PHP.
> Рекомендується завжди використовувати константи і не покладатися безпосередньо
> на значення.

## Зміст

- [ReflectionMethod::\_\_construct](reflectionmethod.construct.md) -
Конструктор класу ReflectionMethod
- [ReflectionMethod::export](reflectionmethod.export.md) — Експорт
відбитого методу
- [ReflectionMethod::getClosure](reflectionmethod.getclosure.md) -
Повертає динамічно створене замикання для методу
- [ReflectionMethod::getDeclaringClass](reflectionmethod.getdeclaringclass.md)
— Отримує клас, який оголошує відбитий метод
- [ReflectionMethod::getModifiers](reflectionmethod.getmodifiers.md)
— Отримує модифікатори методу
- [ReflectionMethod::getPrototype](reflectionmethod.getprototype.md)
— Отримує прототип методу (якщо такий є)
- [ReflectionMethod::invoke](reflectionmethod.invoke.md) — Виклик
- [ReflectionMethod::invokeArgs](reflectionmethod.invokeargs.md)
Виклик методу з передачею аргументів масивом
- [ReflectionMethod::isAbstract](reflectionmethod.isabstract.md)
Перевіряє, чи є метод абстрактним
- [ReflectionMethod::isConstructor](reflectionmethod.isconstructor.md)
— Перевіряє, чи є метод конструктором
- [ReflectionMethod::isDestructor](reflectionmethod.isdestructor.md)
— Перевіряє, чи є метод деструктором
- [ReflectionMethod::isFinal](reflectionmethod.isfinal.md) -
Перевіряє, чи є метод остаточним
- [ReflectionMethod::isPrivate](reflectionmethod.isprivate.md) -
Перевіряє, чи є метод закритим
- [ReflectionMethod::isProtected](reflectionmethod.isprotected.md) -
Перевіряє, чи є метод захищеним
- [ReflectionMethod::isPublic](reflectionmethod.ispublic.md) -
Перевіряє, чи є метод загальнодоступним
- [ReflectionMethod::isStatic](reflectionmethod.isstatic.md) -
Перевіряє, чи є метод статичним
- [ReflectionMethod::setAccessible](reflectionmethod.setaccessible.md)
— Робить метод доступним
- [ReflectionMethod::\_\_toString](reflectionmethod.tostring.md) -
Повертає строкове представлення об'єкту ReflectionMethod
