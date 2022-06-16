- [«
ReflectionClass::getTraitNames](reflectionclass.gettraitnames.md)
- [ReflectionClass::hasConstant »](reflectionclass.hasconstant.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає масив трейтів, що використовуються у цьому класі

# ReflectionClass::getTraits

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionClass::getTraits — Повертає масив трейтів, що використовуються в
цьому класі

### Опис

public **ReflectionClass::getTraits**(): array

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив, ключами якого є імена
трейтів, а значеннями – об'єкти
[ReflectionClass](class.reflectionclass.md) для кожного трейта. В
у разі виникнення помилки повертає **`null`**.
