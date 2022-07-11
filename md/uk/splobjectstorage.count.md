- [« SplObjectStorage::contains](splobjectstorage.contains.md)
- [SplObjectStorage::current »](splobjectstorage.current.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Повертає кількість об'єктів у контейнері

# SplObjectStorage::count

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplObjectStorage::count — Повертає кількість об'єктів у контейнері

### Опис

public **SplObjectStorage::count**(int `$mode` u003d **`COUNT_NORMAL`**):
int

Здійснює підрахунок об'єктів у контейнері.

### Список параметрів

`mode`
Якщо для необов'язкового параметра `mode` встановлено значення
**`COUNT_RECURSIVE`** (або 1), **SplObjectStorage::count()** буде
рекурсивно підраховувати обсяг сховища.

### Значення, що повертаються

Кількість об'єктів у контейнері.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::count()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1);$s->attach($o2);$s->attach( $o1);var_dump($s->count());var_dump(count($s));?> `

Результатом виконання цього прикладу буде щось подібне:

int(2)
int(2)

### Дивіться також

- [SplObjectStorage::attach()](splobjectstorage.attach.md) -
Додає об'єкт у контейнер
- [SplObjectStorage::detach()](splobjectstorage.detach.md) - Видаляє
об'єкт object із контейнера
