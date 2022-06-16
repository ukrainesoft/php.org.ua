- [«SeekableIterator](class.seekableiterator.md)
- [Винятки »](spl.exceptions.md)

- [PHP Manual](index.md)
- [SeekableIterator](class.seekableiterator.md)
- Переміщається до позиції

# SeekableIterator::seek

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SeekableIterator::seek — Переміщується до позиції

### Опис

public **SeekableIterator::seek**(int `$offset`): void

Переміщається до заданої позиції у ітераторі.

### Список параметрів

`offset`
Позиція, до якої необхідно переміститися.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Реалізації мають викидати виняток
[OutOfBoundsException](class.outofboundsexception.md), якщо `offset`
недійсна.

### Приклади

**Приклад #1 Приклад використання **SeekableIterator::seek()****

Переміщення до елемента на 3 позиції в ітераторі
([ArrayIterator](class.arrayiterator.md) реалізує
[SeekableIterator](class.seekableiterator.md)).

` <?php$array u003d array("яблуко", "банан", "вишня", "чорнослив", "ягода бузини");$iterator u003d new ArrayIterator($array);$iterator->seek(3); echo $iterator->current();?> `

Результатом виконання цього прикладу буде щось подібне:

чорнослив

### Дивіться також

- [SeekableIterator](class.seekableiterator.md)
- [Iterator](class.iterator.md)
