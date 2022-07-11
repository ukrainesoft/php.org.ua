- [« Transliterator::create](transliterator.create.md)
- [Transliterator::createInverse »](transliterator.createinverse.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Створити транслітератор на основі правил

# Transliterator::createFromRules

# transliterator_create_from_rules

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::createFromRules -- transliterator_create_from_rules --
Створити транслітератор на основі правил

### Опис

Об'єктно-орієнтований стиль

public static **Transliterator::createFromRules**(string `$rules`, int
`$direction` u003d Transliterator::FORWARD):
?[Transliterator](class.transliterator.md)

Процедурний стиль

**transliterator_create_from_rules**(string `$rules`, int `$direction` u003d
Transliterator::FORWARD): ?[Transliterator](class.transliterator.md)

Створити транслітератор з урахуванням правил.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`rules`
Правила, які описані в розділі Transform Rules Syntax звіту UTS
#35: Unicode LDML.

`direction`
Напрямок транслітерації. За замовчуванням
[Transliterator::FORWARD](class.transliterator.md#transliterator.constants.forward).
Можно використовувати
[Transliterator::REVERSE](class.transliterator.md#transliterator.constants.reverse).

### Значення, що повертаються

Повертає об'єкт [Transliterator](class.transliterator.md) або
**`null`** у разі виникнення помилки.

### Дивіться також

- [Transliterator::getErrorMessage()](transliterator.geterrormessage.md) -
Отримати останнє повідомлення про помилку
- [Transliterator::create()](transliterator.create.md) - Створити
транслітератор
