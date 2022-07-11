- [« SplObjectStorage::addAll](splobjectstorage.addall.md)
- [SplObjectStorage::contains »](splobjectstorage.contains.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Додає об'єкт у контейнер

# SplObjectStorage::attach

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::attach — Додає об'єкт у контейнер

### Опис

public **SplObjectStorage::attach**(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info` u003d **`null`**): void

Додає об'єкт object у контейнер та додатково може асоціювати
цей об'єкт із якимись даними.

### Список параметрів

`object`
Об'єкт object, що додається.

`info`
Дані, із якими потрібно асоціювати об'єкт object.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::attach()****

` <?php$o1 u003d new StdClass;$o2 u003d new StdClass;$s u003d new SplObjectStorage();$s->attach($o1); // то ж, що і $s[$o1] u003d NULL;$s->attach($o2, "hello"); // то ж, і і $s[$o2] u003d "hello";var_dump($s[$o1]);var_dump($s[$o2]);?> `

Результатом виконання цього прикладу буде щось подібне:

NULL
string(5) "hello"

### Дивіться також

- [SplObjectStorage::detach()](splobjectstorage.detach.md) - Видаляє
об'єкт object із контейнера
- [SplObjectStorage::offsetSet()](splobjectstorage.offsetset.md) -
Асоціює дані з об'єктом у контейнері
