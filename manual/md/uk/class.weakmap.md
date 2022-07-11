- [« WeakReference::get](weakreference.get.md)
- [WeakMap::\_\_construct »](ext-weakmap.construct.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Клас WeakMap

# Клас WeakMap

(PHP 8)

## Вступ

**WeakMap** - це колекція (map) або словник, який приймає об'єкти
як ключі. Однак, на відміну від аналогічного в іншому
[SplObjectStorage](class.splobjectstorage.md), об'єкт у ключі
**WeakMap** не впливає на лічильник посилань об'єкта. Тобто, якщо в
якийсь момент єдиним посиланням на об'єкт є ключ
**WeakMap**, об'єкт буде зібраний збирачем сміття та вилучений з
**WeakMap**. Його основний варіант використання - створення кешів даних,
отримані з об'єкта, яким не потрібно жити довше, ніж об'єкт.

**WeakMap** реалізує [ArrayAccess](class.arrayaccess.md),
[Iterator](class.iterator.md) та [Countable](class.countable.md),
тому в більшості випадків його можна використовувати так само, як
асоціативний масив.

## Огляд класів

final class **WeakMap** implements
[ArrayAccess](class.arrayaccess.md),
[Countable](class.countable.md),
[IteratorAggregate](class.iteratoraggregate.md) {

/\* Методи \*/

public [\_\_construct](ext-weakmap.construct.md)()

public [count](weakmap.count.md)(): int

public [getIterator](weakmap.getiterator.md)():
[Iterator](class.iterator.md)

public [offsetExists](weakmap.offsetexists.md)(object `$object`): bool

public [offsetGet](weakmap.offsetget.md)(object `$object`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](weakmap.offsetset.md)(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [offsetUnset](weakmap.offsetunset.md)(object `$object`): void

}

## Приклади

**Приклад #1 Приклад використання **Weakmap****

` <?php$wm u003d new WeakMap();$o u003d new StdClass;class A {    public function __destruct() {         echo "Знищено!
";    }}$wm[$o] u003d new A;var_dump(count($wm));echo "Скидання...
";unset($o);echo "Готово
";var_dump(count($wm)); ``

Результат виконання цього прикладу:

int(1)
Скидання...
Знищено!
Готово
int(0)

## Зміст

- [WeakMap::\_\_construct](ext-weakmap.construct.md) — Створює нову
колекцію (map)
- [WeakMap::count](weakmap.count.md) — Підраховує кількість живих
записів у колекції (map)
- [WeakMap::getIterator](weakmap.getiterator.md) — Отримує зовнішній вигляд
ітератор
- [WeakMap::offsetExists](weakmap.offsetexists.md) — Перевіряє, чи є
чи в колекції (map) певний об'єкт
- [WeakMap::offsetGet](weakmap.offsetget.md) — Повертає значення,
на яке вказує певний об'єкт
- [WeakMap::offsetSet](weakmap.offsetset.md) — Оновлює колекцію
(map) новою парою ключ-значення
- [WeakMap::offsetUnset](weakmap.offsetunset.md) — Видалення запису з
колекції (map)
