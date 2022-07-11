- [«
MultipleIterator::countIterators](multipleiterator.countiterators.md)
- [MultipleIterator::detachIterator
»](multipleiterator.detachiterator.md)

- [PHP Manual](index.md)
- [MultipleIterator](class.multipleiterator.md)
- отримує зареєстровані ітератори

# MultipleIterator::current

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

MultipleIterator::current — Отримує зареєстровані ітератори

### Опис

public **MultipleIterator::current**(): array

Отримує результат виконання current() зареєстрованих ітераторів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) всіх поточних значень кожного приєднаного ітератора.

### Помилки

[RuntimeException](class.runtimeexception.md), якщо ітератор
недійсний (починаючи з PHP 8.1.0) або встановлено режим
**`MIT_NEED_ALL`** і принаймні один приєднаний ітератор
недійсний. Або **IllegalValueException**, якщо ключ має значення
**`null`**, а прапор **`MIT_KEYS_ASSOC`** встановлено.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------|
| 8.1.0 | Тепер викидається [RuntimeException](class.runtimeexception.md), якщо [MultipleIterator::key()](multipleiterator.key.md) викликається на неприпустимому ітераторі. Раніше натомість поверталося значення **`false`**. |

### Дивіться також

- [MultipleIterator::valid()](multipleiterator.valid.md) - Перевіряє
коректність підитераторів
