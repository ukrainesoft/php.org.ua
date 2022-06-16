- [« UnitEnum::cases](unitenum.cases.md)
- [BackedEnum::from »](backedenum.from.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс BackedEnum

# Інтерфейс BackedEnum

(PHP 8 \>u003d 8.1.0)

## Вступ

Інтерфейс **BackedEnum** автоматично застосовується двигуном до
типізованих перерахунків. Він не може бути реалізований
користувальницькими класами. Переліки не можуть перевизначати його
Способи, оскільки продажу за замовчуванням надаються двигуном.
Доступний для перевірки типу.

## Огляд інтерфейсів

interface **BackedEnum** extends [UnitEnum](class.unitenum.md) {

/\* Методи \*/

public static [from](backedenum.from.md)(int\|string `$value`): static

public static [tryFrom](backedenum.tryfrom.md)(int\|string `$value`):
?static

/\* Наслідувані методи \*/

public static [UnitEnum::cases](unitenum.cases.md)(): array

}

## Зміст

- [BackedEnum::from](backedenum.from.md) - Порівняє скаляр з
екземпляром перерахування
- [BackedEnum::tryFrom](backedenum.tryfrom.md) - Порівняє скаляр
з екземпляром перерахування або null
