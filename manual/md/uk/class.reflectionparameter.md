- [« ReflectionObject::export](reflectionobject.export.md)
- [ReflectionParameter::allowsNull
»](reflectionparameter.allowsnull.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionParameter

# Клас ReflectionParameter

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionParameter** повідомляє інформацію про параметри методів та
функцій.

Щоб мати можливість досліджувати аргументи функції, спершу створіть
екземпляр класу [ReflectionFunction](class.reflectionfunction.md)
або [ReflectionMethod](class.reflectionmethod.md), а потім
використовуйте його метод
[ReflectionFunctionAbstract::getParameters()](reflectionfunctionabstract.getparameters.md)
для одержання масиву аргументів.

## Огляд класів

class **ReflectionParameter** implements
[Reflector](class.reflector.md) {

/\* Властивості \*/

public string `$name`;

/\* Методи \*/

public
[\_\_construct](reflectionparameter.construct.md)(string\|array\|object
`$function`, int\|string `$param`)

public [allowsNull](reflectionparameter.allowsnull.md)(): bool

public
[canBePassedByValue](reflectionparameter.canbepassedbyvalue.md)():
bool

private [\_\_clone](reflectionparameter.clone.md)(): void

public static [export](reflectionparameter.export.md)(string
`$function`, string `$parameter`, bool `$return` u003d ?): string

public [getAttributes](reflectionparameter.getattributes.md)(?string
`$name` u003d **`null`**, int `$flags` u003d 0): array

public [getClass](reflectionparameter.getclass.md)():
?[ReflectionClass](class.reflectionclass.md)

public
[getDeclaringClass](reflectionparameter.getdeclaringclass.md)():
?[ReflectionClass](class.reflectionclass.md)

public
[getDeclaringFunction](reflectionparameter.getdeclaringfunction.md)():
[ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)

public [getDefaultValue](reflectionparameter.getdefaultvalue.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[getDefaultValueConstantName](reflectionparameter.getdefaultvalueconstantname.md)():
?string

public [getName](reflectionparameter.getname.md)(): string

public [getPosition](reflectionparameter.getposition.md)(): int

public [getType](reflectionparameter.gettype.md)():
?[ReflectionType](class.reflectiontype.md)

public [hasType](reflectionparameter.hastype.md)(): bool

public [isArray](reflectionparameter.isarray.md)(): bool

public [isCallable](reflectionparameter.iscallable.md)(): bool

public
[isDefaultValueAvailable](reflectionparameter.isdefaultvalueavailable.md)():
bool

public
[isDefaultValueConstant](reflectionparameter.isdefaultvalueconstant.md)():
bool

public [isOptional](reflectionparameter.isoptional.md)(): bool

public
[isPassedByReference](reflectionparameter.ispassedbyreference.md)():
bool

public [isVariadic](reflectionparameter.isvariadic.md)(): bool

public [\_\_toString](reflectionparameter.tostring.md)(): string

}

## Властивості

`name`
Ім'я аргументу. Доступно тільки для читання та викидає виняток
[ReflectionException](class.reflectionexception.md) під час спроби
запису.

## Зміст

- [ReflectionParameter::allowsNull](reflectionparameter.allowsnull.md)
— Перевіряє, чи допустиме значення null для параметра
- [ReflectionParameter::canBePassedByValue](reflectionparameter.canbepassedbyvalue.md)
— Перевіряє, чи можна передати цей аргумент за значенням
- [ReflectionParameter::\_\_clone](reflectionparameter.clone.md) -
Клонувати
- [ReflectionParameter::\_\_construct](reflectionparameter.construct.md)
- Конструктор
- [ReflectionParameter::export](reflectionparameter.export.md) -
Експорт
- [ReflectionParameter::getAttributes](reflectionparameter.getattributes.md)
— Отримує атрибути
- [ReflectionParameter::getClass](reflectionparameter.getclass.md) -
Отримує об'єкт ReflectionClass для параметра, що відображається, або null
- [ReflectionParameter::getDeclaringClass](reflectionparameter.getdeclaringclass.md)
— Отримання класу, що оголошує
- [ReflectionParameter::getDeclaringFunction](reflectionparameter.getdeclaringfunction.md)
— Отримання функції, що оголошує
- [ReflectionParameter::getDefaultValue](reflectionparameter.getdefaultvalue.md)
— Отримання стандартного значення для параметра
- [ReflectionParameter::getDefaultValueConstantName](reflectionparameter.getdefaultvalueconstantname.md)
— Повертає ім'я константи за замовчуванням, якщо значення по
замовчуванням константа або null
- [ReflectionParameter::getName](reflectionparameter.getname.md) -
Отримання імені параметра
- [ReflectionParameter::getPosition](reflectionparameter.getposition.md)
— Отримання позиції параметра
- [ReflectionParameter::getType](reflectionparameter.gettype.md) -
Отримати тип параметра
- [ReflectionParameter::hasType](reflectionparameter.hastype.md) -
Перевірити, чи вказано тип параметра
- [ReflectionParameter::isArray](reflectionparameter.isarray.md) -
Перевіряє, чи очікує аргумент масив як значення
- [ReflectionParameter::isCallable](reflectionparameter.iscallable.md)
— Визначити, чи параметр має бути типу callable
- [ReflectionParameter::isDefaultValueAvailable](reflectionparameter.isdefaultvalueavailable.md)
— Перевіряє, чи є значення за замовчуванням
- [ReflectionParameter::isDefaultValueConstant](reflectionparameter.isdefaultvalueconstant.md)
— Визначити, чи є значення за замовчуванням константою
- [ReflectionParameter::isOptional](reflectionparameter.isoptional.md)
— Перевіряє, чи є аргумент необов'язковим
- [ReflectionParameter::isPassedByReference](reflectionparameter.ispassedbyreference.md)
— Перевіряє, чи передано параметр за посиланням
- [ReflectionParameter::isVariadic](reflectionparameter.isvariadic.md)
— Перевірити, чи параметр є змінним.
кількістю аргументів
- [ReflectionParameter::\_\_toString](reflectionparameter.tostring.md)
— Перетворення на рядок
