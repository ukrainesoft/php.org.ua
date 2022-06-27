- [«
ReflectionExtension::getConstants](reflectionextension.getconstants.md)
- [ReflectionExtension::getFunctions
»](reflectionextension.getfunctions.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Отримання залежностей

# ReflectionExtension::getDependencies

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

ReflectionExtension::getDependencies — Отримання залежностей

### Опис

public **ReflectionExtension::getDependencies**(): array

Отримує список необхідних та конфліктуючих залежностей.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив array, ключами якого є залежності,
значеннями наступні рядки: `Required`, `Optional` або `Conflicts`.

### Приклади

**Приклад #1 Приклад використання
**ReflectionExtension::getDependencies()****

` <?php$dom u003d new ReflectionExtension('dom');print_r($dom->getDependencies());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[libxml] u003d> Required
[domxml] u003d> Conflicts
)

### Дивіться також

- **ReflectionClass::getVersion()**
