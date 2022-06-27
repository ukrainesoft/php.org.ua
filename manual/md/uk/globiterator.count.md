- [« GlobIterator::\_\_construct](globiterator.construct.md)
- [InfiniteIterator »](class.infiniteiterator.md)

- [PHP Manual](index.md)
- [GlobIterator](class.globiterator.md)
- Визначає кількість директорій та файлів

# GlobIterator::count

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

GlobIterator::count — Визначає кількість директорій та файлів

### Опис

public **GlobIterator::count**(): int

Визначає кількість директорій та файлів, що збігаються з
glob-виразом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Кількість директорій та файлів у вигляді цілого числа (int).

### Приклади

**Приклад #1 Приклад використання **GlobIterator::count()****

` <?php$iterator u003d new GlobIterator('*.xml');printf("Знайдено елементів: %d
", $iterator->count());?> `

Результатом виконання цього прикладу буде щось подібне:

Знайдено елементів: 8

### Дивіться також

- [GlobIterator::\_\_construct()](globiterator.construct.md) -
Створює ітератор директорії, використовуючи glob-вираз
- [count()](function.count.md) - Підраховує кількість елементів
масиву або Countable об'єкті
- [glob()](function.glob.md) - Знаходить файлові шляхи, що збігаються з
шаблоном
