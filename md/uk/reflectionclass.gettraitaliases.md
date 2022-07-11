- [«
ReflectionClass::getStaticPropertyValue](reflectionclass.getstaticpropertyvalue.md)
- [ReflectionClass::getTraitNames
»](reflectionclass.gettraitnames.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає масив псевдонімів трейтів

# ReflectionClass::getTraitAliases

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionClass::getTraitAliases — Повертає масив псевдонімів трейтів

### Опис

public **ReflectionClass::getTraitAliases**(): array

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив, ключами якого є нові імена
методів, а значеннями - оригінальні імена методів (у форматі
`"TraitName::original"`). У разі виникнення помилки повертає
**`null`**.
