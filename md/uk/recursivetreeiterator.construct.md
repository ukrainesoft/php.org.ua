- [«
RecursiveTreeIterator::callHasChildren](recursivetreeiterator.callhaschildren.md)
- [RecursiveTreeIterator::current
»](recursivetreeiterator.current.md)

- [PHP Manual](index.md)
- [RecursiveTreeIterator](class.recursivetreeiterator.md)
- Конструктор класу RecursiveTreeIterator

# RecursiveTreeIterator::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

RecursiveTreeIterator::\_\_construct — Конструктор класу
RecursiveTreeIterator

### Опис

public **RecursiveTreeIterator::\_\_construct**(
[RecursiveIterator](class.recursiveiterator.md)\|[IteratorAggregate](class.iteratoraggregate.md)
`$iterator`,
int `$flags` u003d RecursiveTreeIterator::BYPASS_KEY,
int `$cachingIteratorFlags` u003d CachingIterator::CATCH_GET_CHILD,
int `$mode` u003d RecursiveTreeIterator::SELF_FIRST
)

Створює новий об'єкт класу
[RecursiveTreeIterator](class.recursivetreeiterator.md) на основі
рекурсивного об'єкту-ітератора.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`iterator`
Об'єкт класу [RecursiveIterator](class.recursiveiterator.md) або
класу [IteratorAggregate](class.iteratoraggregate.md).

`flags`
Прапори впливають поведінка деяких методів класу. Список можливих
прапорів можна знайти на сторінці [Предвизначених констант
RecursiveTreeIterator](class.recursivetreeiterator.md#recursivetreeiterator.constants).

`caching_it_flags`
Прапори для налаштування внутрішнього об'єкта
[RecursiveCachingIterator](class.recursivecachingiterator.md).

`mode`
Прапори для налаштування внутрішнього об'єкта
[RecursiveIteratorIterator](class.recursiveiteratoriterator.md).
