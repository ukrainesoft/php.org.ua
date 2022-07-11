- [« Transliterator::\_\_construct](transliterator.construct.md)
- [Transliterator::createFromRules
»](transliterator.createfromrules.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Створити транслітератор

# Transliterator::create

#transliterator_create

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::create -- transliterator_create — Створити транслітератор

### Опис

Об'єктно-орієнтований стиль

public static **Transliterator::create**(string `$id`, int `$direction`
u003d Transliterator::FORWARD): ?[Transliterator](class.transliterator.md)

Процедурний стиль

**transliterator_create**(string `$id`, int `$direction` u003d
Transliterator::FORWARD): ?[Transliterator](class.transliterator.md)

Відкриває об'єкт Transliterator за ідентифікатором.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`id`
Ідентифікатор. Список усіх зареєстрованих ідентифікаторів
транслітератора можна отримати за допомогою
[Transliterator::listIDs()](transliterator.listids.md).

`direction`
Напрямок транслітерації. За замовчуванням
[\>Transliterator::FORWARD](class.transliterator.md#transliterator.constants.forward).
Можно використовувати
[Transliterator::REVERSE](class.transliterator.md#transliterator.constants.reverse).

### Значення, що повертаються

Повертає об'єкт [Transliterator](class.transliterator.md) або
**`null`** у разі виникнення помилки.

### Дивіться також

- [Transliterator::getErrorMessage()](transliterator.geterrormessage.md) -
Отримати останнє повідомлення про помилку
- [Transliterator::\_\_construct()](transliterator.construct.md) -
Приватний конструктор
