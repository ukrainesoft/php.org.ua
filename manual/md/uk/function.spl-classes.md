- [« spl_autoload](function.spl-autoload.md)
- [spl_object_hash »](function.spl-object-hash.md)

- [PHP Manual](index.md)
- [Функції SPL](ref.spl.md)
- Повертає доступні класи SPL

# spl_classes

(PHP 5, PHP 7, PHP 8)

spl_classes — Повертає доступні класи SPL

### Опис

**spl_classes**(): array

Ця функція повертає масив з доступними в даний час класами
SPL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив (array) з доступними нині класами SPL.

### Приклади

**Приклад #1 Приклад використання **spl_classes()****

` <?phpprint_r(spl_classes());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[ArrayObject] u003d> ArrayObject
[ArrayIterator] u003d> ArrayIterator
[CachingIterator] u003d> CachingIterator
[RecursiveCachingIterator] u003d> RecursiveCachingIterator
[DirectoryIterator] u003d> DirectoryIterator
[FilterIterator] u003d> FilterIterator
[LimitIterator] u003d> LimitIterator
[ParentIterator] u003d> ParentIterator
[RecursiveDirectoryIterator] u003d> RecursiveDirectoryIterator
[RecursiveIterator] u003d> RecursiveIterator
[RecursiveIteratorIterator] u003d> RecursiveIteratorIterator
[SeekableIterator] u003d> SeekableIterator
[SimpleXMLIterator] u003d> SimpleXMLIterator
)
