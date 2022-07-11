- [«
ReflectionEnum::getBackingType](reflectionenum.getbackingtype.md)
- [ReflectionEnum::getCases »](reflectionenum.getcases.md)

- [PHP Manual](index.md)
- [ReflectionEnum](class.reflectionenum.md)
- Повертає певний варіант перерахування

# ReflectionEnum::getCase

(PHP 8 \>u003d 8.1.0)

ReflectionEnum::getCase — Повертає певний варіант перерахунку

### Опис

public **ReflectionEnum::getCase**(string `$name`):
[ReflectionEnumUnitCase](class.reflectionenumunitcase.md)

Повертає Reflection-об'єкт для певного варіанту перерахування за
імені. Якщо вибраний варіант не визначено, викидається
[ReflectionException](class.reflectionexception.md).

### Список параметрів

`name`
Назву варіанта, який потрібно отримати.

### Значення, що повертаються

Примірник [ReflectionEnumUnitCase](class.reflectionenumunitcase.md)
або [ReflectionEnumBackedCase](class.reflectionenumbackedcase.md)
залежність від ситуації.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::getCase()****

`<?phpenum Suit{    case Hearts; case Diamonds; case Clubs; case Spades;}$rEnum u003d new ReflectionEnum(Suit::class);$rCase u003d $rEnum->getCase('Clubs');var_dump($rCase->getValue());?> `

Результат виконання цього прикладу:

enum(Suit::Clubs)

### Дивіться також

- [Перерахування](language.enumerations.md)
- [ReflectionEnum::getCases()](reflectionenum.getcases.md) -
Повертає список усіх варіантів перерахування
- [ReflectionEnum::hasCase()](reflectionenum.hascase.md) - Перевіряє
варіант перерахування
- [ReflectionEnum::isBacked()](reflectionenum.isbacked.md) -
Визначає, чи є перерахування типовим
