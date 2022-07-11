- [« SplObjectStorage::next](splobjectstorage.next.md)
- [SplObjectStorage::offsetGet »](splobjectstorage.offsetget.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Перевіряє, чи існує об'єкт у контейнері

# SplObjectStorage::offsetExists

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetExists — Перевіряє, чи існує об'єкт в
контейнері

### Опис

public **SplObjectStorage::offsetExists**(object `$object`): bool

Перевіряє, чи об'єкт об'єкта існує в контейнері.

> **Примітка**:
>
> **SplObjectStorage::offsetExists()** є псевдонімом методу
> [SplObjectStorage::contains()](splobjectstorage.contains.md).

### Список параметрів

`object`
Об'єкт об'єкта, що шукається.

### Значення, що повертаються

Повертає **`true`**, якщо об'єкт object є у контейнері, та
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::offsetExists()****

` <?php$s u003d new SplObjectStorage;$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1);var_dump($s->offsetExists($o1)); // аналогічно isset($s[$o1])var_dump($s->offsetExists($o2)); // аналогічно isset($s[$o2])?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)

### Дивіться також

- [SplObjectStorage::offsetSet()](splobjectstorage.offsetset.md) -
Асоціює дані з об'єктом у контейнері
- [SplObjectStorage::offsetGet()](splobjectstorage.offsetget.md) -
Повертає дані, асоційовані з об'єктом object
- [SplObjectStorage::offsetUnset()](splobjectstorage.offsetunset.md) -
Видаляє об'єкт із контейнера
