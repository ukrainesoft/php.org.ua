- [«CachingIterator::current](cachingiterator.current.md)
- [CachingIterator::getFlags »](cachingiterator.getflags.md)

- [PHP Manual](index.md)
- [CachingIterator](class.cachingiterator.md)
- Отримання вмісту кешу

# CachingIterator::getCache

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

CachingIterator::getCache — Отримання вмісту кешу

### Опис

public **CachingIterator::getCache**(): array

Отримання вмісту кеша.

> **Примітка**:
>
> Потрібно використовувати прапор **`CachingIterator::FULL_CACHE`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив array містить елементи кеша.

### Помилки

Викидає [BadMethodCallException](class.badmethodcallexception.md)
у випадку, якщо не встановлено прапор **`CachingIterator::FULL_CACHE`**.

### Приклади

**Приклад #1 Приклад використання **CachingIterator::getCache()****

` <?php$iterator u003d new ArrayIterator(array(1, 2, 3));$cache   u003d new CachingIterator($iterator, CachingIterator::FULL_CACHE);$cache->next();$$ ;var_dump($cache->getCache());$cache->next();var_dump($cache->getCache());?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
int(1)
[1]u003d>
int(2)
}
array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
