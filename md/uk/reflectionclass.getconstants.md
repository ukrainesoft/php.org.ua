- [« ReflectionClass::getConstant](reflectionclass.getconstant.md)
- [ReflectionClass::getConstructor
»](reflectionclass.getconstructor.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає константи

# ReflectionClass::getConstants

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getConstants — Повертає константи

### Опис

public **ReflectionClass::getConstants**(?int `$filter` u003d **`null`**):
array

Повертає всі визначені у класі константи, незалежно від них
модифікаторів видимості.

### Список параметрів

`filter`
Додатковий фільтр для фільтрації констант видимості. Він
налаштовується за допомогою [ReflectionClassConstant
constants](class.reflectionclassconstant.md#reflectionclassconstant.constants.modifiers)
і за умовчанням використовується всім констант видимості.

### Значення, що повертаються

Масив (array) констант. Ім'я константи - ключ, значення константи -
значення.

### Список змін

| Версія | Опис |
|--------|-----------------------------|
| 8.0.0 | Доданий параметр `filter`. |

### Дивіться також

- [ReflectionClass::getConstant()](reflectionclass.getconstant.md) -
Повертає певну константу
