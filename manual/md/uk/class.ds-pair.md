- [«Ds\Map::xor](ds-map.xor.md)
- [Ds\Pair::clear »](ds-pair.clear.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Клас Pair

# Клас Pair

(No version information available, might only be in Git)

## Вступ

Пари використовуються класом **Ds\Map** для зберігання пар ключ-значення.

## Огляд класів

class **Ds\Pair** implements
[JsonSerializable](class.jsonserializable.md) {

/\* Методи \*/

public
[\_\_construct](ds-pair.construct.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d ?)

public [clear](ds-pair.clear.md)(): void

public [copy](ds-pair.copy.md)(): [Ds\Pair](class.ds-pair.md)

public [isEmpty](ds-pair.isempty.md)(): bool

public [toArray](ds-pair.toarray.md)(): array

}

## Зміст

- [Ds\Pair::clear](ds-pair.clear.md) — Видалення всіх значень
- [Ds\Pair::\_\_construct](ds-pair.construct.md) - Створює екземпляр
класу
- [Ds\Pair::copy](ds-pair.copy.md) — Повертає поверхневу копію
пари
- [Ds\Pair::isEmpty](ds-pair.isempty.md) — Перевіряє, чи є
пара порожня
- [Ds\Pair::jsonSerialize](ds-pair.jsonserialize.md) — Повертає
пару в поданні JSON
- [Ds\Pair::toArray](ds-pair.toarray.md) — Перетворює пару на масив
(array)
