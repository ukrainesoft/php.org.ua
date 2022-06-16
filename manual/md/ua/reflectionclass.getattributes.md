- [« ReflectionClass::export](reflectionclass.export.md)
- [ReflectionClass::getConstant »](reflectionclass.getconstant.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Отримує атрибути

# ReflectionClass::getAttributes

(PHP 8)

ReflectionClass::getAttributes — Отримує атрибути

### Опис

public **ReflectionClass::getAttributes**(?string `$name` u003d **`null`**,
int `$flags` u003d 0): array

Повертає всі атрибути, оголошені у цьому класі у вигляді масиву
[ReflectionAttribute](class.reflectionattribute.md).

### Список параметрів

`name`
Фільтрування результатів, щоб залишити лише екземпляри
[ReflectionAttribute](class.reflectionattribute.md) для атрибутів,
відповідних цьому імені класу.

`flags`
Прапори для визначення способу фільтрації результатів, якщо зазначено
параметр `name`.

За замовчуванням значення `0`, яке повертає результати тільки для
атрибутів, що належать до класу `name`.

Єдиним доступним варіантом є використання константи
**`ReflectionAttribute::IS_INSTANCEOF`**, яка натомість буде
використовувати для фільтрації `instanceof`.

### Значення, що повертаються

Масив атрибутів як об'єкта
[ReflectionAttribute](class.reflectionattribute.md).

### Приклади

**Приклад #1 Простий приклад використання**

` <?php#[Attribute]class Fruit {}#[Attribute]class Red {}#[Fruit]#[Red]class Apple {}$class u003d new ReflectionClass('Apple');$attributes u003d $class-> getAttributes();print_r(array_map(fn($attribute) u003d> $attribute->getName(), $attributes));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> Fruit
[1] u003d> Red
)

**Приклад #2 Фільтрування результатів на ім'я класу**

` <?php#[Attribute]class Fruit {}#[Attribute]class Red {}#[Fruit]#[Red]class Apple {}$class u003d new ReflectionClass('Apple');$attributes u003d $class-> getAttributes('Fruit');print_r(array_map(fn($attribute) u003d> $attribute->getName(), $attributes));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> Fruit
)

**Приклад #3 Фільтрування результатів на ім'я класу з наслідуванням**

` <?phpinterface Color {}#[Attribute]class Fruit {}#[Attribute]class Red implements Colour {}#[Fruit]#[Red]class Apple {}$class u003d new ReflectionClass('Apple' u003d $class->getAttributes('Colour', ReflectionAttribute::IS_INSTANCEOF);print_r(array_map(fn($attribute) u003d> $attribute->getName(), $attributes));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> Red
)

### Дивіться також

- [ReflectionClassConstant::getAttributes()](reflectionclassconstant.getattributes.md) -
Отримує атрибути
- [ReflectionFunctionAbstract::getAttributes()](reflectionfunctionabstract.getattributes.md) -
Отримує атрибути
- [ReflectionParameter::getAttributes()](reflectionparameter.getattributes.md) -
Отримує атрибути
- [ReflectionProperty::getAttributes()](reflectionproperty.getattributes.md) -
Отримує атрибути
