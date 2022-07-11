- [« Статичні методи
перерахувань](language.enumerations.static-methods.md)
- [Трейти »](language.enumerations.traits.md)

- [PHP Manual](index.md)
- [Перерахування](language.enumerations.md)
- Константи перерахувань

## Константи перерахувань

Переліки можуть містити константи, які можуть бути
загальнодоступними, закритими або захищеними, хоча на практиці закриті та
захищені еквівалентні, оскільки спадкування не допускається.

Константа перерахування може належати до варіанта перерахування:

`<?phpenum Size{    case Small; case Medium; case Large; public const Huge u003d self::Large;}?> `
