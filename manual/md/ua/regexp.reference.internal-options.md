- [«Альтернативний вибір](regexp.reference.alternation.md)
- [Підмаски »](regexp.reference.subpatterns.md)

- [PHP Manual](index.md)
- [Опис синтаксису Perl-сумісних регулярних
виразів](reference.pcre.pattern.syntax.md)
- Встановлення внутрішніх опцій

## Встановлення внутрішніх опцій

Налаштування [PCRE_CASELESS](reference.pcre.pattern.modifiers.md),
[PCRE_MULTILINE](reference.pcre.pattern.modifiers.md),
[PCRE_DOTALL](reference.pcre.pattern.modifiers.md),
[PCRE_UNGREEDY](reference.pcre.pattern.modifiers.md),
[PCRE_EXTRA](reference.pcre.pattern.modifiers.md),
[PCRE_EXTENDED](reference.pcre.pattern.modifiers.md) та PCRE_DUPNAMES
можуть бути локально визначені у шаблоні з використанням
спеціальних Perl-послідовностей, укладених між символами "(?")
")". Нижче наведено список цих опцій:

| | |
|-----|----------------------------------------------- -------------------------------------------------- -|
| `i` | для [PCRE_CASELESS](reference.pcre.pattern.modifiers.md) |
| `m` | для [PCRE_MULTILINE](reference.pcre.pattern.modifiers.md) |
| `s` | для [PCRE_DOTALL](reference.pcre.pattern.modifiers.md) |
| `x` | для [PCRE_EXTENDED](reference.pcre.pattern.modifiers.md) |
| `U` | для [PCRE_UNGREEDY](reference.pcre.pattern.modifiers.md) |
| `X` | для [PCRE_EXTRA](reference.pcre.pattern.modifiers.md) (більше не підтримується з PHP 7.3) |
| `J` | для [PCRE_INFO_JCHANGED](reference.pcre.pattern.modifiers.md) |

**Символи внутрішніх опцій**

Наприклад, (?im) вказує на реєстронезалежний, багаторядковий режим
пошуку. Також можна скинути опцію, поставивши перед нею символ '-' або
комбінувати установку та скасування режимів. Наприклад, (?im-sx)
встановлює прапори
[PCRE_CASELESS](reference.pcre.pattern.modifiers.md),
[PCRE_MULTILINE](reference.pcre.pattern.modifiers.md) і скасовує прапори
[PCRE_DOTALL](reference.pcre.pattern.modifiers.md) та
[PCRE_EXTENDED](reference.pcre.pattern.modifiers.md). У разі якщо
символ розташований одночасно після та перед символом '-', опція буде
скасовано.

Якщо зміна опції відбувається на верхньому рівні (тобто поза
підмаски), зміна буде застосовано до частини шаблону. Таким
Таким чином, `/ab(?i)c/` співпаде лише з "abc" та "abC".

Якщо зміна опції відбувається всередині підмаски, ефект буде іншим.
Це зміна поведінки у Perl 5.005. Зміна опції всередині підмаски
вплине тільки на решту цієї підмаски, тобто `(a(?i)b)c`
збігається тільки з 'abc' і 'aBc' і більше ні з чим (зрозуміло, якщо
[PCRE_CASELESS](reference.pcre.pattern.modifiers.md) не включено). Це
означає, що різні частини шаблону опції можуть відрізнятися. Будь-які
зміни, що відбулися в одній альтернативній гілці, переносяться і в
інші гілки у межах однієї підмаски. Наприклад, `(a(?i)b|c)` збігається
з "ab", "aB", "c", і "C", хоча і при збігу з "C" перша гілка була
відкинуто до установки опції. Це відбувається тому, що встановлення всіх
Опції відбувається на етапі компіляції. Інакше могло бути
дуже дивна поведінка.

Опції, специфічні для PCRE, такі як
[PCRE_UNGREEDY](reference.pcre.pattern.modifiers.md) та
[PCRE_EXTRA](reference.pcre.pattern.modifiers.md) може бути
встановлені так само, як і Perl-сумісні опції, шляхом
використання символів U та X відповідно. Прапор (?X) специфічний тим,
що має бути розташований у шаблоні перш, ніж буде використовуватися
будь-яка інша додаткова можливість, навіть якщо він розташований на
верхній рівень. Найкраще розміщувати прапорець (?X) на самому початку шаблону.
