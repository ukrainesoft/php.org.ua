- [«
RecursiveIteratorIterator::getMaxDepth](recursiveiteratoriterator.getmaxdepth.md)
- [RecursiveIteratorIterator::key
»](recursiveiteratoriterator.key.md)

- [PHP Manual](index.md)
- [RecursiveIteratorIterator](class.recursiveiteratoriterator.md)
- отримання активного вкладеного ітератора

# RecursiveIteratorIterator::getSubIterator

(PHP 5, PHP 7, PHP 8)

RecursiveIteratorIterator::getSubIterator — Отримання активного
вкладеного ітератора

### Опис

public **RecursiveIteratorIterator::getSubIterator**(?int `$level` u003d
**`null`**): ?[RecursiveIterator](class.recursiveiterator.md)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`level`

### Значення, що повертаються

Активний вкладений ітератор у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | `level` тепер припускає значення null. |
