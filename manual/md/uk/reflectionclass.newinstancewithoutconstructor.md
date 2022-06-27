- [«
ReflectionClass::newInstanceArgs](reflectionclass.newinstanceargs.md)
- [ReflectionClass::setStaticPropertyValue
»](reflectionclass.setstaticpropertyvalue.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Створює новий екземпляр класу без виклику конструктора

# ReflectionClass::newInstanceWithoutConstructor

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionClass::newInstanceWithoutConstructor — Створює новий екземпляр
класу без виклику конструктора

### Опис

public **ReflectionClass::newInstanceWithoutConstructor**(): object

Створює новий екземпляр класу без виклику конструктора.

### Список параметрів

### Значення, що повертаються

### Помилки

Якщо клас є вбудованим, його екземпляр не може бути створений без
виклику конструктора, це призведе до генерації виключення
[ReflectionException](class.reflectionexception.md). Це виключення
обмежено лише класами з модифікатором
[final](language.oop5.final.md).

### Дивіться також

- [ReflectionClass::newInstance()](reflectionclass.newinstance.md) -
Створює екземпляр класу з переданими аргументами
- [ReflectionClass::newInstanceArgs()](reflectionclass.newinstanceargs.md) -
Створює екземпляр класу з переданими параметрами
