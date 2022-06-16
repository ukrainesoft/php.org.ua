- [«Массиви](language.types.array.md)
- [Об'єкти »](language.types.object.md)

- [PHP Manual](index.md)
- [Типи](language.types.md)
- Ітеровані

## Ітеровані

[Iterable](language.types.iterable.md) – псевдотип, введений у PHP
7.1. Він приймає будь-який масив (array) або об'єкт, що реалізує інтерфейс
[Traversable](class.traversable.md). Обидва ці типи ітеруються з
за допомогою [foreach](control-structures.foreach.md) і може бути
використані з **yield from** у [генераторах](language.generators.md).

### Використання Iterable

Тип iterable може бути використаний як тип параметра для вказівки, що
функція набирає значень, але їй не важлива форма цього набору,
поки він буде використовуватися з
[foreach] (control-structures.foreach.md). Якщо значення не є
масивом або об'єктом, що реалізує
[Traversable](class.traversable.md), буде викинуто виняток
[TypeError](class.typeerror.md).

**Приклад #1 Приклад використання iterable як параметр**

` <?phpfunction foo(iterable $iterable) {    foreach ($iterable as $value) {        // ...    }}?> `

Параметри, оголошені як iterable, можуть використовувати **`null`** або
масив як значення за замовчуванням.

**Приклад #2 Приклад установки стандартного значення для iterable**

` <?phpfunction foo(iterable $iterable u003d []) {    // ...}?> `

Iterable також може використовуватися як тип, що повертається для вказівки,
що функція поверне значення, що ітерується. Якщо значення, що повертається, не
є масивом або об'єктом, що реалізує
[Traversable](class.traversable.md), буде викинуто виняток
[TypeError](class.typeerror.md).

**Приклад #3 Приклад використання iterable як повертається
типу**

`<?phpfunction bar(): iterable {    return [1, 2, 3];}?> `

Функції, що оголошують iterable як тип, що повертається, також можуть бути
[генераторами](language.generators.md).

**Приклад #4 Приклад використання iterable як повертається
значення генератора**

`<?phpfunction gen(): iterable {    yield 1; yield 2; yield 3;}?> `
