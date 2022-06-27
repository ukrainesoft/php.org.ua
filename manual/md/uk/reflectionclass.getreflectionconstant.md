- [« ReflectionClass::getProperty](reflectionclass.getproperty.md)
- [ReflectionClass::getReflectionConstants
»](reflectionclass.getreflectionconstants.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Отримує ReflectionClassConstant для константи класу

# ReflectionClass::getReflectionConstant

(PHP 7 \>u003d 7.1.0, PHP 8)

ReflectionClass::getReflectionConstant — Отримує
[ReflectionClassConstant](class.reflectionclassconstant.md) для
константи класу

### Опис

public **ReflectionClass::getReflectionConstant**(string `$name`):
[ReflectionClassConstant](class.reflectionclassconstant.md)\|false

Отримує [ReflectionClassConstant](class.reflectionclassconstant.md)
для якості константи.

### Список параметрів

`name`
Назва константи класу.

### Значення, що повертаються

Об'єкт [ReflectionClassConstant](class.reflectionclassconstant.md) або
**`false`** у разі виникнення помилки.

### Дивіться також

- [ReflectionClass::getReflectionConstants()](reflectionclass.getreflectionconstants.md) -
Отримує константи класу
- [ReflectionClassConstant](class.reflectionclassconstant.md)
