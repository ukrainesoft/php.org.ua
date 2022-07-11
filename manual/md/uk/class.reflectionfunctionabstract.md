- [«
ReflectionFunction::\_\_toString](reflectionfunction.tostring.md)
- [ReflectionFunctionAbstract::\_\_clone
»](reflectionfunctionabstract.clone.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionFunctionAbstract

# Клас ReflectionFunctionAbstract

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

## Вступ

Є батьківським класом для
[ReflectionFunction](class.reflectionfunction.md), більш детальну
інформацію дивіться у описі цього дочірнього класу.

## Огляд класів

abstract class **ReflectionFunctionAbstract** implements
[Reflector](class.reflector.md) {

/\* Властивості \*/

public string `$name`;

/\* Методи \*/

private [\_\_clone](reflectionfunctionabstract.clone.md)(): void

public
[getAttributes](reflectionfunctionabstract.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public
[getClosureScopeClass](reflectionfunctionabstract.getclosurescopeclass.md)():
?[ReflectionClass](class.reflectionclass.md)

public
[getClosureThis](reflectionfunctionabstract.getclosurethis.md)():
?object

public
[getClosureUsedVariables](reflectionfunctionabstract.getclosureusedvariables.md)():
array

public [getDocComment](reflectionfunctionabstract.getdoccomment.md)():
string\|false

public [getEndLine](reflectionfunctionabstract.getendline.md)():
int\|false

public [getExtension](reflectionfunctionabstract.getextension.md)():
?[ReflectionExtension](class.reflectionextension.md)

public
[getExtensionName](reflectionfunctionabstract.getextensionname.md)():
string\|false

public [getFileName](reflectionfunctionabstract.getfilename.md)():
string\|false

public [getName](reflectionfunctionabstract.getname.md)(): string

public
[getNamespaceName](reflectionfunctionabstract.getnamespacename.md)():
string

public
[getNumberOfParameters](reflectionfunctionabstract.getnumberofparameters.md)():
int

public
[getNumberOfRequiredParameters](reflectionfunctionabstract.getnumberofrequiredparameters.md)():
int

public [getParameters](reflectionfunctionabstract.getparameters.md)():
array

public [getReturnType](reflectionfunctionabstract.getreturntype.md)():
?[ReflectionType](class.reflectiontype.md)

public [getShortName](reflectionfunctionabstract.getshortname.md)():
string

public [getStartLine](reflectionfunctionabstract.getstartline.md)():
int\|false

public
[getStaticVariables](reflectionfunctionabstract.getstaticvariables.md)():
array

public
[getTentativeReturnType](reflectionfunctionabstract.gettentativereturntype.md)():
?[ReflectionType](class.reflectiontype.md)

public [hasReturnType](reflectionfunctionabstract.hasreturntype.md)():
bool

public
[hasTentativeReturnType](reflectionfunctionabstract.hastentativereturntype.md)():
bool

public [inNamespace](reflectionfunctionabstract.innamespace.md)():
bool

public [isClosure](reflectionfunctionabstract.isclosure.md)(): bool

public [isDeprecated](reflectionfunctionabstract.isdeprecated.md)():
bool

public [isGenerator](reflectionfunctionabstract.isgenerator.md)():
bool

public [isInternal](reflectionfunctionabstract.isinternal.md)(): bool

public [isUserDefined](reflectionfunctionabstract.isuserdefined.md)():
bool

public [isVariadic](reflectionfunctionabstract.isvariadic.md)(): bool

public
[returnsReference](reflectionfunctionabstract.returnsreference.md)():
bool

abstract public
[\_\_toString](reflectionfunctionabstract.tostring.md)(): void

}

## Властивості

`name`
Назва функції. Доступно тільки для читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

## Зміст

- [ReflectionFunctionAbstract::\_\_clone](reflectionfunctionabstract.clone.md)
- Клонує функцію
- [ReflectionFunctionAbstract::getAttributes](reflectionfunctionabstract.getattributes.md)
— Отримує атрибути
- [ReflectionFunctionAbstract::getClosureScopeClass](reflectionfunctionabstract.getclosurescopeclass.md)
— Повертає клас, в рамках якого було оголошено замикання
- [ReflectionFunctionAbstract::getClosureThis](reflectionfunctionabstract.getclosurethis.md)
— Повертає вказівник, прив'язаний до замикання
- [ReflectionFunctionAbstract::getClosureUsedVariables](reflectionfunctionabstract.getclosureusedvariables.md)
— Повертає масив змінних, що використовуються в замиканні.
- [ReflectionFunctionAbstract::getDocComment](reflectionfunctionabstract.getdoccomment.md)
— Отримує doc-коментар
- [ReflectionFunctionAbstract::getEndLine](reflectionfunctionabstract.getendline.md)
— Отримує номер рядка завершення опису функції
- [ReflectionFunctionAbstract::getExtension](reflectionfunctionabstract.getextension.md)
— Отримує інформацію про модуль
- [ReflectionFunctionAbstract::getExtensionName](reflectionfunctionabstract.getextensionname.md)
— Отримання імені модуля
- [ReflectionFunctionAbstract::getFileName](reflectionfunctionabstract.getfilename.md)
— Отримує ім'я файлу
- [ReflectionFunctionAbstract::getName](reflectionfunctionabstract.getname.md)
— Отримує ім'я функції
- [ReflectionFunctionAbstract::getNamespaceName](reflectionfunctionabstract.getnamespacename.md)
— Отримання імені простору імен
- [ReflectionFunctionAbstract::getNumberOfParameters](reflectionfunctionabstract.getnumberofparameters.md)
— Отримує кількість параметрів
- [ReflectionFunctionAbstract::getNumberOfRequiredParameters](reflectionfunctionabstract.getnumberofrequiredparameters.md)
— Отримує кількість обов'язкових параметрів
- [ReflectionFunctionAbstract::getParameters](reflectionfunctionabstract.getparameters.md)
— Отримує параметри
- [ReflectionFunctionAbstract::getReturnType](reflectionfunctionabstract.getreturntype.md)
— Отримує оголошений тип значення, що повертається функцією значення
- [ReflectionFunctionAbstract::getShortName](reflectionfunctionabstract.getshortname.md)
— Отримує коротке ім'я функції
- [ReflectionFunctionAbstract::getStartLine](reflectionfunctionabstract.getstartline.md)
— Отримує початковий номер рядка
- [ReflectionFunctionAbstract::getStaticVariables](reflectionfunctionabstract.getstaticvariables.md)
— Отримує статичні змінні
- [ReflectionFunctionAbstract::getTentativeReturnType](reflectionfunctionabstract.gettentativereturntype.md)
— Повертає попередній тип значення, що повертається, пов'язаний з
функцією
- [ReflectionFunctionAbstract::hasReturnType](reflectionfunctionabstract.hasreturntype.md)
— Перевіряє, чи має функція оголошений тип значення, що повертається
- [ReflectionFunctionAbstract::hasTentativeReturnType](reflectionfunctionabstract.hastentativereturntype.md)
— Визначає, чи має функція попередній тип повертаного
значення
- [ReflectionFunctionAbstract::inNamespace](reflectionfunctionabstract.innamespace.md)
— Перевіряє, чи є функція у просторі імен
- [ReflectionFunctionAbstract::isClosure](reflectionfunctionabstract.isclosure.md)
- Перевіряє, чи є функція замиканням (Closure)
- [ReflectionFunctionAbstract::isDeprecated](reflectionfunctionabstract.isdeprecated.md)
— Перевіряє, чи функція застаріла
- [ReflectionFunctionAbstract::isGenerator](reflectionfunctionabstract.isgenerator.md)
— Перевіряє, чи функція є генератором
- [ReflectionFunctionAbstract::isInternal](reflectionfunctionabstract.isinternal.md)
— Перевіряє, чи є функція внутрішньої
- [ReflectionFunctionAbstract::isUserDefined](reflectionfunctionabstract.isuserdefined.md)
— Перевіряє, чи функція є певною користувачем
- [ReflectionFunctionAbstract::isVariadic](reflectionfunctionabstract.isvariadic.md)
— Перевіряє, чи є функція зі змінним числом
аргументів
- [ReflectionFunctionAbstract::returnsReference](reflectionfunctionabstract.returnsreference.md)
- Перевіряє, що функція повертає посилання
- [ReflectionFunctionAbstract::\_\_toString](reflectionfunctionabstract.tostring.md)
— Перетворення на рядок
