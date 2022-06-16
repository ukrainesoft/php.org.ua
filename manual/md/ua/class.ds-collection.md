- [« Приклади](ds.examples.md)
- [Ds\Collection::clear »](ds-collection.clear.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Інтерфейс Collection

# Інтерфейс Collection

(No version information available, might only be in Git)

## Вступ

**Collection** – це базовий інтерфейс, який покриває
функціональність загальну всім структур даних у цій бібліотеці. Він
гарантує, що це структури обхідні, счётный і може бути
перетворені на JSON за допомогою функції
[json_encode()](function.json-encode.md).

## Огляд інтерфейсів

class **Ds\Collection** implements [Countable](class.countable.md),
[IteratorAggregate](class.iteratoraggregate.md),
[JsonSerializable](class.jsonserializable.md) {

/\* Методи \*/

abstract public [clear](ds-collection.clear.md)(): void

abstract public [copy](ds-collection.copy.md)():
[Ds\Collection](class.ds-collection.md)

abstract public [isEmpty](ds-collection.isempty.md)(): bool

abstract public [toArray](ds-collection.toarray.md)(): array

}

## Список змін

| Версія | Опис |
|---------------|--------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| PECL DS 1.4.0 | Клас **Collection** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md) замість [Traversable](class.traversable.md). (Ця зміна з'явилася у поліфілі у версії 1.4.1). |

## Зміст

- [Ds\Collection::clear](ds-collection.clear.md) — Видаляє все
значення
- [Ds\Collection::copy](ds-collection.copy.md) — Повертає копію
колекції
- [Ds\Collection::isEmpty](ds-collection.isempty.md) — Перевіряє,
чи порожня колекція
- [Ds\Collection::toArray](ds-collection.toarray.md) - Перетворює
колекцію в масив (array)
