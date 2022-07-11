- [« SplObjectStorage::offsetSet](splobjectstorage.offsetset.md)
- [SplObjectStorage::removeAll »](splobjectstorage.removeall.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Видаляє об'єкт із контейнера

# SplObjectStorage::offsetUnset

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetUnset — Видаляє об'єкт із контейнера

### Опис

public **SplObjectStorage::offsetUnset**(object `$object`): void

Видаляє об'єкт з контейнера.

> **Примітка**:
>
> **SplObjectStorage::offsetUnset()** є псевдонімом методу
> [SplObjectStorage::detach()](splobjectstorage.detach.md).

### Список параметрів

`object`
Об'єкт об'єкта, що видаляється.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::offsetUnset()****

` <?php$o u003d new StdClass;$s u003d new SplObjectStorage();$s->attach($o);var_dump(count($s));$s->offsetUnset($o); // аналогічно unset($s[$o])var_dump(count($s));?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)
int(0)

### Дивіться також

- [SplObjectStorage::offsetGet()](splobjectstorage.offsetget.md) -
Повертає дані, асоційовані з об'єктом object
- [SplObjectStorage::offsetSet()](splobjectstorage.offsetset.md) -
Асоціює дані з об'єктом у контейнері
- [SplObjectStorage::offsetExists()](splobjectstorage.offsetexists.md) -
Перевіряє, чи існує об'єкт у контейнері
