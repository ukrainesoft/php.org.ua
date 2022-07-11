- [«
ReflectionClassConstant::getModifiers](reflectionclassconstant.getmodifiers.md)
- [ReflectionClassConstant::getValue
»](reflectionclassconstant.getvalue.md)

- [PHP Manual](index.md)
- [ReflectionClassConstant](class.reflectionclassconstant.md)
- Отримати ім'я константи

# ReflectionClassConstant::getName

(PHP 7 \>u003d 7.1.0, PHP 8)

ReflectionClassConstant::getName — Отримати назву константи

### Опис

public **ReflectionClassConstant::getName**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я константи.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------|
| 8.1.0 | Викидає помилку [Error](class.error.md) у випадку, якщо властивість name не була ініціалізована. Раніше, у разі виникнення помилки, метод повертав **`false`**. |
