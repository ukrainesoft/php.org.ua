- [«
ReflectionClass::getProperties](reflectionclass.getproperties.md)
- [ReflectionClass::getReflectionConstant
»](reflectionclass.getreflectionconstant.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає екземпляр ReflectionProperty для якості класу

# ReflectionClass::getProperty

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getProperty — Повертає екземпляр
[ReflectionProperty](class.reflectionproperty.md) для якості класу

### Опис

public **ReflectionClass::getProperty**(string `$name`):
[ReflectionProperty](class.reflectionproperty.md)

Повертає екземпляр [ReflectionProperty](class.reflectionproperty.md)
для якості класу.

### Список параметрів

`name`
Ім'я якості.

### Значення, що повертаються

Об'єкт класу [ReflectionProperty](class.reflectionproperty.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getProperty()****

` <?php$class u003d new ReflectionClass('ReflectionClass');$property u003d $class->getProperty('name');var_dump($property);?> `

Результат виконання цього прикладу:

object(ReflectionProperty)#2 (2) {
["name"]u003d>
string(4) "name"
["class"]u003d>
string(15) "ReflectionClass"
}

### Дивіться також

- [ReflectionClass::getProperties()](reflectionclass.getproperties.md) -
Повертає властивості
