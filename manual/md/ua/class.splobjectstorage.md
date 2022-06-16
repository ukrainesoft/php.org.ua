- [« SplFixedArray::\_\_wakeup](splfixedarray.wakeup.md)
- [SplObjectStorage::addAll »](splobjectstorage.addall.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplObjectStorage

# Клас SplObjectStorage

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Клас SplObjectStorage надає відображення об'єктів у дані або
набір об'єктів, ігноруючи дані. Ця подвійна мета може бути корисною у
У багатьох випадках, включаючи необхідність унікальної ідентифікації об'єктів.

## Огляд класів

class **SplObjectStorage** implements [Countable](class.countable.md),
[Iterator](class.iterator.md),
[Serializable](class.serializable.md),
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

public
[addAll](splobjectstorage.addall.md)([SplObjectStorage](class.splobjectstorage.md)
`$storage`): int

public [attach](splobjectstorage.attach.md)(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info` u003d **`null`**): void

public [contains](splobjectstorage.contains.md)(object `$object`):
bool

public [count](splobjectstorage.count.md)(int `$mode` u003d
**`COUNT_NORMAL`**): int

public [current](splobjectstorage.current.md)(): object

public [detach](splobjectstorage.detach.md)(object `$object`): void

public [getHash](splobjectstorage.gethash.md)(object `$object`):
string

public [getInfo](splobjectstorage.getinfo.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [key](splobjectstorage.key.md)(): int

public [next](splobjectstorage.next.md)(): void

public [offsetExists](splobjectstorage.offsetexists.md)(object
`$object`): bool

public [offsetGet](splobjectstorage.offsetget.md)(object `$object`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](splobjectstorage.offsetset.md)(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info` u003d **`null`**): void

public [offsetUnset](splobjectstorage.offsetunset.md)(object
`$object`): void

public
[removeAll](splobjectstorage.removeall.md)([SplObjectStorage](class.splobjectstorage.md)
`$storage`): int

public
[removeAllExcept](splobjectstorage.removeallexcept.md)([SplObjectStorage](class.splobjectstorage.md)
`$storage`): int

public [rewind](splobjectstorage.rewind.md)(): void

public [serialize](splobjectstorage.serialize.md)(): string

public
[setInfo](splobjectstorage.setinfo.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$info`): void

public [unserialize](splobjectstorage.unserialize.md)(string `$data`):
void

public [valid](splobjectstorage.valid.md)(): bool

}

## Приклади

**Приклад #1 Клас **SplObjectStorage** як набір об'єктів**

` <?php// Набір об'єктів$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$o3 u003d new StdClass;$s->attach($o> $o2);var_dump($s->contains($o1));var_dump($s->contains($o2));var_dump($s->contains($o3));$s->detach($ o2);var_dump($s->contains($o1));var_dump($s->contains($o2));var_dump($s->contains($o3));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

**Приклад #2 Клас **SplObjectStorage** як відображення об'єктів у
дані**

`<?php// Як відображення об'єктів до даним$s u003d new SplObjectStorage();$o1 u003d new StdClass;$o2 u003d new StdClass;$o3 u003d new St  | ;$s[$o2] u003d array(1,2,3);if (isset($s[$o2])) {   var_dump($s[$o2]);}?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}

## Зміст

- [SplObjectStorage::addAll](splobjectstorage.addall.md) — Додає
всі об'єкти з іншого контейнера
- [SplObjectStorage::attach](splobjectstorage.attach.md) — Додає
об'єкт у контейнер
- [SplObjectStorage::contains](splobjectstorage.contains.md) -
Перевіряє, чи контейнер містить заданий об'єкт
- [SplObjectStorage::count](splobjectstorage.count.md) - Повертає
кількість об'єктів у контейнері
- [SplObjectStorage::current](splobjectstorage.current.md) -
Повертає поточний об'єкт
- [SplObjectStorage::detach](splobjectstorage.detach.md) — Видаляє
об'єкт object із контейнера
- [SplObjectStorage::getHash](splobjectstorage.gethash.md) -
Обчислює унікальний ідентифікатор для об'єктів контейнера
- [SplObjectStorage::getInfo](splobjectstorage.getinfo.md) -
Повертає дані, пов'язані з поточним об'єктом
- [SplObjectStorage::key](splobjectstorage.key.md) — Повертає
індекс поточного положення ітератора
- [SplObjectStorage::next](splobjectstorage.next.md) - Перехід до
наступному об'єкту
- [SplObjectStorage::offsetExists](splobjectstorage.offsetexists.md)
— Перевіряє, чи існує об'єкт у контейнері
- [SplObjectStorage::offsetGet](splobjectstorage.offsetget.md) -
Повертає дані, асоційовані з об'єктом object
- [SplObjectStorage::offsetSet](splobjectstorage.offsetset.md) -
Асоціює дані з об'єктом у контейнері
- [SplObjectStorage::offsetUnset](splobjectstorage.offsetunset.md) -
Видаляє об'єкт із контейнера
- [SplObjectStorage::removeAll](splobjectstorage.removeall.md) -
Видаляє з поточного контейнера об'єкти, які є в іншому
контейнері
- [SplObjectStorage::removeAllExcept](splobjectstorage.removeallexcept.md)
— Видаляє з поточного контейнера всі об'єкти, яких немає в іншому
контейнері
- [SplObjectStorage::rewind](splobjectstorage.rewind.md) — Перекладає
ітератор на перший елемент контейнера
- [SplObjectStorage::serialize](splobjectstorage.serialize.md) -
Серіалізує контейнер
- [SplObjectStorage::setInfo](splobjectstorage.setinfo.md) -
Асоціює дані з поточним об'єктом контейнера
- [SplObjectStorage::unserialize](splobjectstorage.unserialize.md)
Відновлює серіалізований контейнер із рядка
- [SplObjectStorage::valid](splobjectstorage.valid.md) — Визначає,
Чи допустиме поточне значення ітератора
