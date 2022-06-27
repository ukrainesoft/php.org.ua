- [«
ReflectionClass::isUserDefined](reflectionclass.isuserdefined.md)
- [ReflectionClass::newInstanceArgs
»](reflectionclass.newinstanceargs.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- створює екземпляр класу з переданими аргументами

# ReflectionClass::newInstance

(PHP 5, PHP 7, PHP 8)

ReflectionClass::newInstance — Створює екземпляр класу з переданими
аргументами

### Опис

public
**ReflectionClass::newInstance**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`): object

Створює новий екземпляр класу. Прийняті аргументи передаються в
конструктор класу.

### Список параметрів

`args`
Приймає довільну кількість аргументів, подібно до функції
[call_user_func()](function.call-user-func.md), які потім
передаються до конструктора класу.

### Значення, що повертаються

### Помилки

Якщо конструктор не є загальнодоступним (public), це призведе до
викидання виключення
[ReflectionException](class.reflectionexception.md).

Якщо конструктор відсутній, а параметр args має один і більше
аргументів, це призведе до викидання виключення
[ReflectionException](class.reflectionexception.md).

### Дивіться також

- [ReflectionClass::newInstanceArgs()](reflectionclass.newinstanceargs.md) -
Створює екземпляр класу з переданими параметрами
- [ReflectionClass::newInstanceWithoutConstructor()](reflectionclass.newinstancewithoutconstructor.md) -
Створює новий екземпляр класу без виклику конструктора
