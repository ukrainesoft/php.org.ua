- [« SplObjectStorage::rewind](splobjectstorage.rewind.md)
- [SplObjectStorage::setInfo »](splobjectstorage.setinfo.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- Серіалізує контейнер

# SplObjectStorage::serialize

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

SplObjectStorage::serialize — Серіалізує контейнер

### Опис

public **SplObjectStorage::serialize**(): string

Повертає рядкову виставу контейнера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядкове представлення контейнера.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::serialize()****

` <?php$s u003d new SplObjectStorage;$o u003d new StdClass;$s[$o] u003d "data";echo $s->serialize()."
";?> `

Результатом виконання цього прикладу буде щось подібне:

x:i:1;O:8:"stdClass":0:{},s:4:"data";;m:a:0:{}

### Дивіться також

- [SplObjectStorage::unserialize()](splobjectstorage.unserialize.md) -
Відновлює серіалізований контейнер із рядка
