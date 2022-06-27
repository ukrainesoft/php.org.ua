- [«Stringable::\_\_toString](stringable.tostring.md)
- [UnitEnum::cases »](unitenum.cases.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс UnitEnum

# Інтерфейс UnitEnum

(PHP 8 \>u003d 8.1.0)

## Вступ

Інтерфейс **UnitEnum** автоматично застосовується двигуном до всіх
перерахунків. Він може бути реалізований користувальницькими класами.
Перерахування не можуть перевизначати його методи, оскільки
замовчуванням надаються двигуном. Доступний для перевірки типу.

## Огляд інтерфейсів

interface **UnitEnum** {

/\* Методи \*/

public static [cases](unitenum.cases.md)(): array

}

## Зміст

- [UnitEnum::cases](unitenum.cases.md) — Повертає список варіантів
перерахування
