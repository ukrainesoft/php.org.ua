- [« SplObjectStorage::serialize](splobjectstorage.serialize.md)
- [SplObjectStorage::unserialize »](splobjectstorage.unserialize.md)

- [PHP Manual](index.md)
- [SplObjectStorage](class.splobjectstorage.md)
- асоціює дані з поточним об'єктом контейнера

# SplObjectStorage::setInfo

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplObjectStorage::setInfo — Асоціює дані з поточним об'єктом
контейнера

### Опис

public
**SplObjectStorage::setInfo**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info`): void

Асоціює дані з поточним об'єктом контейнера, на який вказує
ітератор.

### Список параметрів

`info`
Дані, які необхідно зв'язати з поточним об'єктом.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplObjectStorage::setInfo()****

` <?php$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$s->attach($o1, "d1");$s->attach($o2, "d2" );$s->rewind();while($s->valid()) {    $s->setInfo("new"); $s->next();}var_dump($s[$o1]);var_dump($s[$o2]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(3) "new"
string(3) "new"

### Дивіться також

- [SplObjectStorage::current()](splobjectstorage.current.md) -
Повертає поточний об'єкт
- [SplObjectStorage::rewind()](splobjectstorage.rewind.md) -
Переводить ітератор на перший елемент контейнера
- [SplObjectStorage::key()](splobjectstorage.key.md) - Повертає
індекс поточного положення ітератора
- [SplObjectStorage::next()](splobjectstorage.next.md) - Перехід до
наступному об'єкту
- [SplObjectStorage::valid()](splobjectstorage.valid.md) -
Визначає, чи допустиме поточне значення ітератора
- [SplObjectStorage::getInfo()](splobjectstorage.getinfo.md) -
Повертає дані, пов'язані з поточним об'єктом
