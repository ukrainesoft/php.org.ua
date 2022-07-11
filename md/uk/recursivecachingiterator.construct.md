- [«RecursiveCachingIterator](class.recursivecachingiterator.md)
- [RecursiveCachingIterator::getChildren
»](recursivecachingiterator.getchildren.md)

- [PHP Manual](index.md)
- [RecursiveCachingIterator](class.recursivecachingiterator.md)
- Конструктор

# RecursiveCachingIterator::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveCachingIterator::\_\_construct — Конструктор

### Опис

public
**RecursiveCachingIterator::\_\_construct**([Iterator](class.iterator.md)
`$iterator`, int `$flags` u003d RecursiveCachingIterator::CALL_TOSTRING)

Створює новий
[RecursiveCachingIterator](class.recursivecachingiterator.md), який
складається з переданого ітератора ('iterator').

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`iterator`
Ітератор, що використовується.

`flags`
Прапори. Використовуйте **`CALL_TOSTRING`** для того, щоб викликати
**RecursiveCachingIterator::\_\_toString()** для кожного елемента (по
замовчуванням), та/або **`CATCH_GET_CHILD`** для перехоплення винятків при
спробі отримання дочірніх елементів

### Дивіться також

- [CachingIterator::\_\_construct()](cachingiterator.construct.md) -
Створює новий об'єкт CachingIterator для ітератора
