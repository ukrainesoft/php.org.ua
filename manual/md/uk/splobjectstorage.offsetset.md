- [« SplObjectStorage::offsetGet](splobjectstorage.offsetget.md)
- [SplObjectStorage::offsetUnset »](splobjectstorage.offsetunset.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Асоціює дані з об'єктом у контейнері

# SplObjectStorage::offsetSet

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetSet — Асоціює дані з об'єктом у контейнері

### Опис

public **SplObjectStorage::offsetSet**(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info` u003d **`null`**): void

Асоціює дані з об'єктом object у контейнері.

> **Примітка**:
>
> **SplObjectStorage::offsetSet()** є псевдонімом методу
> [SplObjectStorage::attach()](splobjectstorage.attach.md).

### Список параметрів

`object`
Об'єкт object, з яким потрібно зв'язати дані.

`info`
Дані, які слід зв'язати з об'єктом object.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::offsetSet()****

` <?php$s u003d new SplObjectStorage;$o1 u003d new StdClass;$s->offsetSet($o1, "hello"); // $s[$o1] u003d "hello";var_dump($s[$o1]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "hello"

### Дивіться також

- [SplObjectStorage::attach()](splobjectstorage.attach.md) -
Додає об'єкт у контейнер
- [SplObjectStorage::offsetGet()](splobjectstorage.offsetget.md) -
Повертає дані, асоційовані з об'єктом object
- [SplObjectStorage::offsetExists()](splobjectstorage.offsetexists.md) -
Перевіряє, чи існує об'єкт у контейнері
- [SplObjectStorage::offsetUnset()](splobjectstorage.offsetunset.md) -
Видаляє об'єкт із контейнера
