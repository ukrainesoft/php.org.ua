- [«
ReflectionClass::setStaticPropertyValue](reflectionclass.setstaticpropertyvalue.md)
- [ReflectionClassConstant »](class.reflectionclassconstant.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає рядкову виставу об'єкта класу ReflectionClass

# ReflectionClass::\_\_toString

(PHP 5, PHP 7, PHP 8)

ReflectionClass::\_\_toString — Повертає рядкову виставу
об'єкта класу ReflectionClass

### Опис

public **ReflectionClass::\_\_toString**(): string

Повертає рядкову виставу об'єкта класу ReflectionClass.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Строкове представлення екземпляра класу
[ReflectionClass](class.reflectionclass.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::\_\_toString()****

` <?php$reflectionClass u003d new ReflectionClass('Exception');echo $reflectionClass->__toString();?> `

Результат виконання цього прикладу:

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

- [ReflectionClass::export()](reflectionclass.export.md) -
Експортує клас
- [\_\_toString()](language.oop5.magic.md#object.tostring)
