- [« SplFixedArray::offsetExists](splfixedarray.offsetexists.md)
- [SplFixedArray::offsetSet »](splfixedarray.offsetset.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Повертає значення за вказаним індексом

# SplFixedArray::offsetGet

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::offsetGet — Повертає значення за вказаним індексом

### Опис

public **SplFixedArray::offsetGet**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення за індексом `index`.

### Список параметрів

`index`
Індекс.

### Значення, що повертаються

Значення за індексом `index`.

### Помилки

Викидає виняток [RuntimeException](class.runtimeexception.md),
коли параметр `index` виходить за рамки заданого розміру масиву або
коли `index` не можна розпізнати як ціле число.
