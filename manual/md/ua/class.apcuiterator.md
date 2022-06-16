- [«apcu_store](function.apcu-store.md)
- [APCUIterator::\_\_construct »](apcuiterator.construct.md)

- [PHP Manual](index.md)
- [APCu](book.apcu.md)
- Клас APCUIterator

# Клас APCUIterator

(PECL apcu \>u003d 5.0.0)

## Вступ

Клас **APCUIterator** дозволяє з легкістю ітерувати великий APCu
кеш. Це корисно, тому що дозволяє перебирати великий кеш по кроках,
забираючи задану кількість записів використовуючи одне блокування, дозволяючи
іншим активностям використовувати блокування, а не затримувати весь кеш
для читання ста (за промовчанням) записів. Також, використання регулярних
виразів ефективніше, оскільки виконується лише на рівні
скомпілованого коду C.

## Огляд класів

class **APCUIterator** implements [Iterator](class.iterator.md) {

/\* Методи \*/

public [\_\_construct](apcuiterator.construct.md)(
array\|string\|null `$search` u003d **`null`**,
int `$format` u003d APC_ITER_ALL,
int `$chunk_size` u003d 100,
int `$list` u003d APC_LIST_ACTIVE
)

public [current](apcuiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getTotalCount](apcuiterator.gettotalcount.md)(): int

public [getTotalHits](apcuiterator.gettotalhits.md)(): int

public [getTotalSize](apcuiterator.gettotalsize.md)(): int

public [key](apcuiterator.key.md)(): string

public [next](apcuiterator.next.md)(): bool

public [rewind](apcuiterator.rewind.md)(): void

public [valid](apcuiterator.valid.md)(): bool

}

## Зміст

- [APCUIterator::\_\_construct](apcuiterator.construct.md) — Створює
об'єкт ітератор класу APCUIterator
- [APCUIterator::current](apcuiterator.current.md) — Отримати
поточний елемент
- [APCUIterator::getTotalCount](apcuiterator.gettotalcount.md) -
Отримати загальну кількість записів
- [APCUIterator::getTotalHits](apcuiterator.gettotalhits.md) -
Отримати загальну кількість влучень у кеш
- [APCUIterator::getTotalSize](apcuiterator.gettotalsize.md) - Загальний
розмір кешу
- [APCUIterator::key](apcuiterator.key.md) — Отримати ключ ітератора
- [APCUIterator::next](apcuiterator.next.md) — Переміщує вказівник
на наступний елемент
- [APCUIterator::rewind](apcuiterator.rewind.md) - Перемотування
ітератора
- [APCUIterator::valid](apcuiterator.valid.md) — Перевіряє,
чи коректна поточна позиція ітератора
