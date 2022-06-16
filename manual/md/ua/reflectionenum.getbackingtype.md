- [« ReflectionEnum::\_\_construct](reflectionenum.construct.md)
- [ReflectionEnum::getCase »](reflectionenum.getcase.md)

- [PHP Manual](index.md)
- [ReflectionEnum](class.reflectionenum.md)
- Отримує тип перерахування, якщо є

# ReflectionEnum::getBackingType

(PHP 8 \>u003d 8.1.0)

ReflectionEnum::getBackingType — Отримує тип перерахунку, якщо є

### Опис

public **ReflectionEnum::getBackingType**():
?[ReflectionType](class.reflectiontype.md)

Якщо перерахування є типовим, цей метод поверне екземпляр
[ReflectionType](class.reflectiontype.md) типу перерахунку. Якщо це
не типізований перелік, метод поверне `null`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Примірник [ReflectionType](class.reflectiontype.md) або `null`, якщо
перерахування не типизоване.

### Приклади

**Приклад #1 Приклад використання **ReflectionEnum::getBackingType()****

`<?phpenum Suit: string{   case Hearts u003d 'H'; case Diamonds u003d 'D'; case Clubs u003d 'C'; case Spades u003d 'S';}$rEnum u003d new ReflectionEnum(Suit::class);$rBackingType u003d $rEnum->getBackingType();var_dump((string)$rBackingType);?> `

Результат виконання цього прикладу:

string(6) "string"

### Дивіться також

- [Перерахування](language.enumerations.md)
- [ReflectionEnum::isBacked()](reflectionenum.isbacked.md) -
Визначає, чи є перерахування типовим
