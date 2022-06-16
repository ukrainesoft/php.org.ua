- [« SplObjectStorage::setInfo](splobjectstorage.setinfo.md)
- [SplObjectStorage::valid »](splobjectstorage.valid.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Відновлює серіалізований контейнер із рядка

# SplObjectStorage::unserialize

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

SplObjectStorage::unserialize — Відновлює серіалізований контейнер
з рядка

### Опис

public **SplObjectStorage::unserialize**(string `$data`): void

Відновлює дані контейнера з рядка та додає їх у поточний
контейнер.

### Список параметрів

`data`
Серіалізоване представлення контейнера.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::unserialize()****

` <?php$s1 u003d new SplObjectStorage;$s2 u003d new SplObjectStorage;$o u003d new StdClass;$s1[$o] u003d "data";$s2->unserialize($s1->serialize(); count($s2));?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)

### Дивіться також

- [SplObjectStorage::serialize()](splobjectstorage.serialize.md) -
Серіалізує контейнер
