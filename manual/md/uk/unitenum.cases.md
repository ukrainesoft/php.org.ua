- [«UnitEnum](class.unitenum.md)
- [BackedEnum »](class.backedenum.md)

- [PHP Manual](index.md)
- [UnitEnum](class.unitenum.md)
- Повертає список варіантів перерахування

# UnitEnum::cases

(PHP 8 \>u003d 8.1.0)

UnitEnum::cases — Повертає список варіантів перерахування

### Опис

public static **UnitEnum::cases**(): array

Метод повертає упакований масив всіх варіантів перерахування
лексичному порядку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив усіх певних варіантів перерахування у лексичному порядку.

### Приклади

**Приклад #1 Простий приклад використання**

У наведеному прикладі показано, як повертаються варіанти перерахування.

`<?phpenum Suit{    case Hearts; case Diamonds; case Clubs; case Spades;}var_dump(Suit::cases());?> `

Результат виконання цього прикладу:

array(4) {
[0]u003d>
enum(Suit::Hearts)
[1]u003d>
enum(Suit::Diamonds)
[2]u003d>
enum(Suit::Clubs)
[3]u003d>
enum(Suit::Spades)
}
