- [« Серіалізація](language.enumerations.serialization.md)
- [Помилки »](language.errors.md)

- [PHP Manual](index.md)
- [Перерахування](language.enumerations.md)
- Приклади

## Приклади

**Приклад #1 Основні обмежені значення**

`<?phpenum SortOrder{   case ASC; case DESC;}function query($fields, $filter, SortOrder $order u003d SortOrder::ASC) { ... }?> `

Функція `query()` тепер може безпечно працювати, знаючи, що `$ order`
гарантовано буде або `SortOrder::ASC`, або `SortOrder::DESC`.
Будь-яке інше значення призвело до [TypeError](class.typeerror.md),
тому подальша перевірка помилок чи тестування не потрібна.

**Приклад #2 Розширені ексклюзивні значення**

`<?phpenum UserStatus: string{    case Pending u003d 'P'; case Active u003d 'A'; case Suspended u003d 'S'; case CanceledByUser u003d 'C'; public function label(): string    {        return match($this) {            static::Pending u003d> 'В ожидании',            static::Active u003d> 'Активный',            static::Suspended u003d> 'Приостановленный',            static::CanceledByUser u003d> 'Скасовано користувачем',         }; }}?> `

У цьому прикладі статус користувача може бути одним із таких:
`UserStatus::Pending`, `UserStatus::Active`, `UserStatus::Suspended` або
`UserStatus::CanceledByUser`. Функція може ввести параметр UserStatus
а потім прийняти тільки ці чотири значення, точка.

Усі чотири значення мають метод `label()`, який повертає
рядок, що читається. Цей рядок не залежить від скалярного еквівалентного рядка
"machine name", яку можна використовувати, наприклад, у полі бази даних
або поле вибору HTML.

` <?phpforeach (UserStatus::cases() as $case) {    printf('<option valueu003d"%s">%s</option>
', $case->value, $case->label());}?> `
