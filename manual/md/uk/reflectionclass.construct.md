- [«ReflectionClass](class.reflectionclass.md)
- [ReflectionClass::export »](reflectionclass.export.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Створює об'єкт класу ReflectionClass

# ReflectionClass::\_\_construct

(PHP 5, PHP 7, PHP 8)

ReflectionClass::\_\_construct — Створює об'єкт класу ReflectionClass

### Опис

public **ReflectionClass::\_\_construct**(object\|string
`$objectOrClass`)

Створює новий об'єкт класу
[ReflectionClass](class.reflectionclass.md).

### Список параметрів

`objectOrClass`
Як аргумент може приймати рядок (string), що містить ім'я
досліджуваного класу, чи об'єкт (object).

### Помилки

Викликає виняток
[ReflectionException](class.reflectionexception.md), якщо заданий
клас не існує.

### Приклади

**Приклад #1 Простий приклад використання ReflectionClass**

` <?phpReflection::export(new ReflectionClass('Exception'));?> `

Результатом виконання цього прикладу буде щось подібне:

Class [ <internal:Core> class Exception ] {

- Constants [0] {
}

- Static properties [0] {
}

- Static methods [0] {
}

- Properties [7] {
Property [ <default> protected $message ]
Property [ <default> private $string ]
Property [ <default> protected $code ]
Property [ <default> protected $file ]
Property [ <default> protected $line ]
Property [ <default> private $trace ]
Property [ <default> private $previous ]
}

- Methods [10] {
Method [ <internal:Core> final private method __clone ] {
}

Method [ <internal:Core, ctor> public method __construct ] {

- Parameters [3] {
Parameter #0 [ <optional> $message ]
Parameter #1 [ <optional> $code ]
Parameter #2 [ <optional> $previous ]
}
}

Method [ <internal:Core> final public method getMessage ] {
}

Method [ <internal:Core> final public method getCode ] {
}

Method [ <internal:Core> final public method getFile ] {
}

Method [ <internal:Core> final public method getLine ] {
}

Method [ <internal:Core> final public method getTrace ] {
}

Method [ <internal:Core> final public method getPrevious ] {
}

Method [ <internal:Core> final public method getTraceAsString ] {
}

Method [ <internal:Core> public method __toString ] {
}
}
}

### Дивіться також

- [ReflectionObject::\_\_construct()](reflectionobject.construct.md) -
Конструктор класу ReflectionObject
- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
