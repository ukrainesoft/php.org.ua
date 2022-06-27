- [« SplPriorityQueue::valid](splpriorityqueue.valid.md)
- [SplFixedArray::\_\_construct »](splfixedarray.construct.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplFixedArray

# Клас SplFixedArray

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplFixedArray забезпечує базову функціональність,
що надається масивами. Головна різниця між SplFixedArray та
звичайним масивом PHP у тому, що розмір SplFixedArray необхідно змінювати
вручну, а як індекси можуть виступати тільки цілі чисельні
значення. Перевага цих обмежень полягає у меншому
використання пам'яті, ніж стандартний масив (array).

## Огляд класів

class **SplFixedArray** implements
[IteratorAggregate](class.iteratoraggregate.md),
[ArrayAccess](class.arrayaccess.md),
[Countable](class.countable.md),
[JsonSerializable](class.jsonserializable.md) {

/\* Методи \*/

public [\_\_construct](splfixedarray.construct.md)(int `$size` u003d 0)

public [count](splfixedarray.count.md)(): int

public [current](splfixedarray.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [fromArray](splfixedarray.fromarray.md)(array `$array`,
bool `$preserveKeys` u003d **`true`**):
[SplFixedArray](class.splfixedarray.md)

public [getSize](splfixedarray.getsize.md)(): int

public [key](splfixedarray.key.md)(): int

public [next](splfixedarray.next.md)(): void

public [offsetExists](splfixedarray.offsetexists.md)(int `$index`):
bool

public [offsetGet](splfixedarray.offsetget.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](splfixedarray.offsetset.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [offsetUnset](splfixedarray.offsetunset.md)(int `$index`): void

public [rewind](splfixedarray.rewind.md)(): void

public [setSize](splfixedarray.setsize.md)(int `$size`): bool

public [toArray](splfixedarray.toarray.md)(): array

public [valid](splfixedarray.valid.md)(): bool

public [\_\_wakeup](splfixedarray.wakeup.md)(): void

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------|
| 8.1.0 | Клас **SplFixedArray** тепер реалізує інтерфейс [JsonSerializable](class.jsonserializable.md). |
| 8.0.0 | Клас **SplFixedArray** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше було реалізовано інтерфейс [Iterator](class.iterator.md). |

## Приклади

**Приклад #1 Приклад використання **SplFixedArray****

` <?php// Ініціалізація масива фіксованої довжиною$array u003d new SplFixedArray(5);$array[1] u003d 2;$array[4] u003d "foo";var_dump($array[0]); // NULLvar_dump($array[1]); //int(2)var_dump($array["4"]); // string(3) "foo"// Збільшення розміру масиву до 10$array->setSize(10);$array[9] u003d "asdf";// Скорочуємо розмір масиву до 2-х$array-> 2);//Наступний код викликає виключення RuntimeException: Inex ()."
";}try {    var_dump($array[-1]);} catch(RuntimeException $re) {    echo "RuntimeException: ".$re->getMessage()."
";}try {    var_dump($array[5]);} catch(RuntimeException $re) {    echo "RuntimeException: ".$re->getMessage()."
";}?> `

Результат виконання цього прикладу:

NULL
int(2)
string(3) "foo"
RuntimeException: Index invalid або out of range
RuntimeException: Index invalid або out of range
RuntimeException: Index invalid або out of range

## Зміст

- [SplFixedArray::\_\_construct](splfixedarray.construct.md) -
Створює новий масив фіксованої довжини
- [SplFixedArray::count](splfixedarray.count.md) — Повертає розмір
масиву
- [SplFixedArray::current](splfixedarray.current.md) - Повертає
поточний елемент масиву
- [SplFixedArray::fromArray](splfixedarray.fromarray.md)
Імпортує PHP-масив у об'єкт класу SplFixedArray
- [SplFixedArray::getSize](splfixedarray.getsize.md) — Отримує
розмір масиву
- [SplFixedArray::key](splfixedarray.key.md) — Повертає індекс
поточного елемента масиву
- [SplFixedArray::next](splfixedarray.next.md) — Переходить до
наступному елементу масиву
- [SplFixedArray::offsetExists](splfixedarray.offsetexists.md) -
Повертає факт наявності зазначеного індексу масиву
- [SplFixedArray::offsetGet](splfixedarray.offsetget.md) -
Повертає значення за вказаним індексом
- [SplFixedArray::offsetSet](splfixedarray.offsetset.md) -
Встановлює нове значення за заданим індексом
- [SplFixedArray::offsetUnset](splfixedarray.offsetunset.md) -
Видаляє значення за індексом $index
- [SplFixedArray::rewind](splfixedarray.rewind.md) — Встановлює
ітератор масиву на початок
- [SplFixedArray::setSize](splfixedarray.setsize.md) — Змінює
розмір масиву
- [SplFixedArray::toArray](splfixedarray.toarray.md) — Повертає
звичайний PHP-масив зі значеннями фіксованого масиву
- [SplFixedArray::valid](splfixedarray.valid.md) — Перевіряє масив
на наявність елементів
- [SplFixedArray::\_\_wakeup](splfixedarray.wakeup.md) -
Переініціалізація масиву після десеріалізації
