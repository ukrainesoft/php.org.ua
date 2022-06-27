- [«Методи перерахувань](language.enumerations.methods.md)
- [Константи перерахувань »](language.enumerations.constants.md)

- [PHP Manual](index.md)
- [Перерахування](language.enumerations.md)
- Статичні методи перерахувань

## Статичні методи перерахувань

Перерахування також може мати статичні методи. Використання
статичних методів у самому перерахуванні насамперед призначено
для альтернативних конструкторів Наприклад:

`<?phpenum Size{    case Small; case Medium; case Large; public static function fromLength(int $cm): static    {        return match(true) {            $cm < 50 u003d> static::Small,            $cm < 100 u003d> static::Medium,            default u003d> static::Large,        }; }}?> `

Статичні методи можуть бути загальнодоступними, закритими або захищеними,
хоча на практиці закриті та захищені еквівалентні, оскільки
успадкування не допускається.
