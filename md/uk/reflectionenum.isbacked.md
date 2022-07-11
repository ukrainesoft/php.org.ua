- [« ReflectionEnum::hasCase](reflectionenum.hascase.md)
- [ReflectionEnumUnitCase »](class.reflectionenumunitcase.md)

- [PHP Manual](index.md)
- [ReflectionEnum](class.reflectionenum.md)
- Визначає, чи є перерахування типовим

# ReflectionEnum::isBacked

(PHP 8 \>u003d 8.1.0)

ReflectionEnum::isBacked — Визначає, чи є перерахування
типізованим

### Опис

public **ReflectionEnum::isBacked**(): bool

Типізований перелік - має власний скалярний еквівалент,
або рядок (string), або ціле число (int). Не всі перерахування
є типизованими.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо перерахування є типізованим,
в іншому випадку повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::isBacked()****

`<?phpenum Suit{    case Hearts; case Diamonds; case Clubs; case Spades;}enum BackedSuit: string{    case Hearts u003d 'H'; case Diamonds u003d 'D'; case Clubs u003d 'C'; case Spades u003d 'S';}var_dump((newReflectionEnum(Suit::class))->isBacked());var_dump((newReflectionEnum(BackedSuit::class))->isBacked());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [Перерахування](language.enumerations.md)
- [ReflectionEnum::getBackingType()](reflectionenum.getbackingtype.md) -
Отримує тип перерахування, якщо є
