- [«MultipleIterator](class.multipleiterator.md)
- [MultipleIterator::\_\_construct »](multipleiterator.construct.md)

- [PHP Manual](index.md)
- [MultipleIterator](class.multipleiterator.md)
- приєднує ітератор

# MultipleIterator::attachIterator

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

MultipleIterator::attachIterator — Приєднує ітератор

### Опис

public
**MultipleIterator::attachIterator**([Iterator](class.iterator.md)
`$iterator`, string\|int\|null `$info` u003d **`null`**): void

Приєднує ітератор.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`iterator`
Новий ітератор для приєднання.

`info`
Асоціативна інформація для ітератора (Iterator), яка має бути
представлена цілим числом (int), рядком (string), або **`null`**.

### Значення, що повертаються

Опис...

### Помилки

**IllegalValueException**, якщо параметр `iterator` недійсний, або
якщо `info` містить вже асоційовану інформацію.

### Дивіться також

- [MultipleIterator::\_\_construct()](multipleiterator.construct.md) -
Створює новий MultipleIterator
