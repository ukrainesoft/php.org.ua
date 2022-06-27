- [« ReflectionProperty::export](reflectionproperty.export.md)
- [ReflectionProperty::getDeclaringClass
»](reflectionproperty.getdeclaringclass.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Отримує атрибути

# ReflectionProperty::getAttributes

(PHP 8)

ReflectionProperty::getAttributes — Отримує атрибути

### Опис

public **ReflectionProperty::getAttributes**(?string `$name` u003d
**`null`**, int `$flags` u003d 0): array

Повертає всі атрибути, оголошені у цій властивості класу, як
масиву [ReflectionAttribute](class.reflectionattribute.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`name`

`flags`

### Значення, що повертаються

Масив атрибутів як об'єкта
[ReflectionAttribute](class.reflectionattribute.md).

### Дивіться також

- [ReflectionClass::getAttributes()](reflectionclass.getattributes.md) -
Отримує атрибути
- [ReflectionClassConstant::getAttributes()](reflectionclassconstant.getattributes.md) -
Отримує атрибути
- [ReflectionFunctionAbstract::getAttributes()](reflectionfunctionabstract.getattributes.md) -
Отримує атрибути
- [ReflectionParameter::getAttributes()](reflectionparameter.getattributes.md) -
Отримує атрибути
