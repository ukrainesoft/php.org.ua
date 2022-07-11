- [«
ReflectionEnumBackedCase::\_\_construct](reflectionenumbackedcase.construct.md)
- [ReflectionZendExtension »](class.reflectionzendextension.md)

- [PHP Manual](index.md)
- [ReflectionEnumBackedCase](class.reflectionenumbackedcase.md)
- Отримує скалярне значення варіанта перерахування

# ReflectionEnumBackedCase::getBackingValue

(PHP 8 \>u003d 8.1.0)

ReflectionEnumBackedCase::getBackingValue — Отримує скалярне значення
варіанти перерахування

### Опис

public **ReflectionEnumBackedCase::getBackingValue**(): int\|string

Отримує скалярне значення варіанта перерахування.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Скалярне значення варіанта перерахування.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::getBackingValue()****

`<?phpenum Suit: string{   case Hearts u003d 'H'; case Diamonds u003d 'D'; case Clubs u003d 'C'; case Spades u003d 'S';}$rEnum u003d new ReflectionEnum(Suit::class);$rCase u003d $rEnum->getCase('Spades');var_dump($rCase->getBackingValue());?> `

Результат виконання цього прикладу:

string(1) "S"

### Дивіться також

- [Перерахування](language.enumerations.md)
