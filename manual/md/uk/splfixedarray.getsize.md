- [« SplFixedArray::fromArray](splfixedarray.fromarray.md)
- [SplFixedArray::key »](splfixedarray.key.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Отримує розмір масиву

# SplFixedArray::getSize

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::getSize — Отримує розмір масиву

### Опис

public **SplFixedArray::getSize**(): int

Отримує розмір масиву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір масиву як int.

### Приклади

**Приклад #1 Приклад використання **SplFixedArray::getSize()****

` <?php$array u003d new SplFixedArray(5);echo $array->getSize()."
";$array->setSize(10);echo $array->getSize()."
";?> `

Результат виконання цього прикладу:

5
10

### Примітки

> **Примітка**:
>
> Даний метод еквівалентний
> [SplFixedArray::count()](splfixedarray.count.md)

### Дивіться також

- [SplFixedArray::count()](splfixedarray.count.md) - Повертає
розмір масиву
