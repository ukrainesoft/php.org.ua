- [« Відмінності від
об'єктів](language.enumerations.object-differences.md)
- [Серіалізація »](language.enumerations.serialization.md)

- [PHP Manual](index.md)
- [Перерахування](language.enumerations.md)
- Список значень

## Список значень

І чисті перерахування, і типізовані перерахування реалізують
внутрішній інтерфейс із ім'ям [UnitEnum](class.unitenum.md).
`UnitEnum` включає статичний метод `cases()`. `cases()` повертає
упакований масив усіх певних варіантів у порядку оголошення.

` <?phpSuit::cases();// Produces: [Suit::Hearts, Suit::Diamonds, Suit::Clubs, Suit::Spades]?> `

Ручне визначення методу `cases()` у перерахунку призведе до фатальної
помилки.
