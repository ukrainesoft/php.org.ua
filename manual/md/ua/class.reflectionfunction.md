- [«
ReflectionExtension::\_\_toString](reflectionextension.tostring.md)
- [ReflectionFunction::\_\_construct
»](reflectionfunction.construct.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionFunction

# Клас ReflectionFunction

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionFunction** повідомляє інформацію про функції.

## Огляд класів

class **ReflectionFunction** extends
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md) {

/\* Константи \*/

const int `IS_DEPRECATED` u003d 262144;

/\* Наслідувані властивості \*/

public string `$name`;

/\* Методи \*/

public
[\_\_construct](reflectionfunction.construct.md)([Closure](class.closure.md)\|string
`$function`)

public static [export](reflectionfunction.export.md)(string `$name`,
string `$return` u003d ?): string

public [getClosure](reflectionfunction.getclosure.md)():
[Closure](class.closure.md)

public
[invoke](reflectionfunction.invoke.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [invokeArgs](reflectionfunction.invokeargs.md)(array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [isDisabled](reflectionfunction.isdisabled.md)(): bool

public [\_\_toString](reflectionfunction.tostring.md)(): string

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

## Зумовлені константи

## Модифікатори ReflectionFunction

**`ReflectionFunction::IS_DEPRECATED`**
Показує те, що функція застаріла (deprecated).

## Зміст

- [ReflectionFunction::\_\_construct](reflectionfunction.construct.md)
- Конструктор класу ReflectionFunction
- [ReflectionFunction::export](reflectionfunction.export.md) -
Експортує функції
- [ReflectionFunction::getClosure](reflectionfunction.getclosure.md)
— Повертає динамічно створене замикання функції
- [ReflectionFunction::invoke](reflectionfunction.invoke.md)
Викликає функцію
- [ReflectionFunction::invokeArgs](reflectionfunction.invokeargs.md)
- Виклик функції з передачею аргументів
- [ReflectionFunction::isDisabled](reflectionfunction.isdisabled.md)
— Перевіряє, що функцію вимкнено
- [ReflectionFunction::\_\_toString](reflectionfunction.tostring.md)
— Подання у вигляді рядка
