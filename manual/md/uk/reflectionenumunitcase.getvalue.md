- [«
ReflectionEnumUnitCase::getEnum](reflectionenumunitcase.getenum.md)
- [ReflectionEnumBackedCase »](class.reflectionenumbackedcase.md)

- [PHP Manual](index.md)
- [ReflectionEnumUnitCase](class.reflectionenumunitcase.md)
- Отримує об'єкт варіанта перерахування, описаний Reflection-об'єктом

# ReflectionEnumUnitCase::getValue

(PHP 8 \>u003d 8.1.0)

ReflectionEnumUnitCase::getValue — Отримує об'єкт варіанта
перерахування, описаний Reflection-об'єктом

### Опис

public **ReflectionEnumUnitCase::getValue**():
[UnitEnum](class.unitenum.md)

Повертає об'єкт варіанта перерахування, описаний об'єктом Reflection.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт варіанта перерахування, описаний об'єктом Reflection.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::getValue()****

`<?phpenum Suit{    case Hearts; case Diamonds; case Clubs; case Spades;}$rEnum u003d new ReflectionEnum(Suit::class);$rCase u003d $rEnum->getCase('Diamonds');var_dump($rCase->getValue());?> `

Результат виконання цього прикладу:

enum(Suit::Diamonds)

### Дивіться також

- [Перерахування](language.enumerations.md)
