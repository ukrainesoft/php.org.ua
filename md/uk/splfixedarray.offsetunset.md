- [« SplFixedArray::offsetSet](splfixedarray.offsetset.md)
- [SplFixedArray::rewind »](splfixedarray.rewind.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Видаляє значення за індексом $index

# SplFixedArray::offsetUnset

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::offsetUnset — Видаляє значення за індексом $index

### Опис

public **SplFixedArray::offsetUnset**(int `$index`): void

Видаляє значення за заданим індексом.

### Список параметрів

`index`
Індекс, яким видаляється значення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток [RuntimeException](class.runtimeexception.md),
коли `index` перевищує заданий розмір масиву або коли `index` не можна
розпізнати як ціле число.
