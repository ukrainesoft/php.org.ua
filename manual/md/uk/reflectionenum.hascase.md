- [« ReflectionEnum::getCases](reflectionenum.getcases.md)
- [ReflectionEnum::isBacked »](reflectionenum.isbacked.md)

- [PHP Manual](index.md)
- [ReflectionEnum](class.reflectionenum.md)
- Перевіряє варіант перерахування

# ReflectionEnum::hasCase

(PHP 8 \>u003d 8.1.0)

ReflectionEnum::hasCase — Перевіряє варіант перерахування

### Опис

public **ReflectionEnum::hasCase**(string `$name`): bool

Повертає, чи визначено цей варіант перерахування.

### Список параметрів

`name`
Варіант перерахунку для перевірки.

### Значення, що повертаються

Повертає **`true`**, якщо варіант визначений, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::hasCase()****

`<?phpenum Suit{    case Hearts; case Diamonds; case Clubs; case Spades;}$rEnum u003d new ReflectionEnum(Suit::class);var_dump($rEnum->hasCase('Hearts'));var_dump($rEnum->hasCase('Horseshoes'));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [Перерахування](language.enumerations.md)
- [ReflectionEnum::getCase()](reflectionenum.getcase.md) -
Повертає певний варіант перерахування
- [ReflectionEnum::getCases()](reflectionenum.getcases.md) -
Повертає список усіх варіантів перерахування
