- [«
NumberFormatter::setTextAttribute](numberformatter.settextattribute.md)
- [Locale::acceptFromHttp »](locale.acceptfromhttp.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас Locale

# Клас Locale

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

"Locale" - це ідентифікатор, який використовується для розпізнавання мови,
культури чи регіональні особливості поведінки API. Локалі PHP
організовані та позначені так само як і локалі CLDR, використовувані ICU та
багатьма виробниками систем Unix, Linux та Mac, Java і т.д. Локалі
позначаються згідно з мовними мітками стандарту RFC 4646 (який
використовує тире, а не підкреслення) на додаток до традиційних
позначення з використанням символу підкреслення. Функції даного
класу розуміють обидва написання, якщо явно не вказано інше.

Приклади ідентифікаторів:

- en-US (Англійська, США)
- zh-Hant-TW (Китайський, Традиційне зображення, Тайвань)
- fr-CA, fr-FR (Канадська Французька та Французька відповідно)

Клас Locale (і відповідні процедурні функції) використовується для
взаємодії з ідентифікаторами локалей, для перевірки правильного
складання ідентифікатора, його коректності тощо. Модулі використовуються
CLDR в UAX #35 (і успадковується ICU), є коректними та використовуються
скрізь вони були б у ICU.

Цей клас не можна інстанціювати як об'єкт. Усі методи/функції
оголошені статичними.

**`null`** або порожній рядок будуть рахуватися за "базову" локаль.
"Базова" локаль - це "en_US_POSIX" у CLDR. Мовні мітки (і
ідентифікатори локалі) реєстронезалежні. У даному класі є
метод, що перетворює їх до канонічного вигляду.

## Огляд класів

class **Locale** {

/\* Методи \*/

public static [acceptFromHttp](locale.acceptfromhttp.md)(string
`$header`): string\|false

public static [canonicalize](locale.canonicalize.md)(string
`$locale`): ?string

public static [composeLocale](locale.composelocale.md)(array
`$subtags`): string\|false

public static [filterMatches](locale.filtermatches.md)(string
`$languageTag`, string `$locale`, bool `$canonicalize` u003d **`false`**):
?bool

**locale_filter_matches**(string `$langtag`, string `$locale`, bool
`$canonicalize` u003d **`false`**): ?bool

public static [getAllVariants](locale.getallvariants.md)(string
`$locale`): ?array

public static [getDefault](locale.getdefault.md)(): string

public static
[getDisplayLanguage](locale.getdisplaylanguage.md)(string `$locale`,
?string `$displayLocale` u003d **`null`**): string\|false

public static [getDisplayName](locale.getdisplayname.md)(string
`$locale`, ?string `$displayLocale` u003d **`null`**): string\|false

public static [getDisplayRegion](locale.getdisplayregion.md)(string
`$locale`, ?string `$displayLocale` u003d **`null`**): string\|false

public static [getDisplayScript](locale.getdisplayscript.md)(string
`$locale`, ?string `$displayLocale` u003d **`null`**): string\|false

public static [getDisplayVariant](locale.getdisplayvariant.md)(string
`$locale`, ?string `$displayLocale` u003d **`null`**): string\|false

public static [getKeywords](locale.getkeywords.md)(string `$locale`):
array\|false\|null

public static
[getPrimaryLanguage](locale.getprimarylanguage.md)(string `$locale`):
?string

public static [getRegion](locale.getregion.md)(string `$locale`):
?string

public static [getScript](locale.getscript.md)(string `$locale`):
?string

public static [lookup](locale.lookup.md)(
array `$languageTag`,
string `$locale`,
bool `$canonicalize` u003d **`false`**,
?string `$defaultLocale` u003d **`null`**
): ?string

public static [parseLocale](locale.parselocale.md)(string `$locale`):
?array

public static [setDefault](locale.setdefault.md)(string `$locale`):
bool

}

## Зумовлені константи

**`Locale::DEFAULT_LOCALE`** (null)
Використовується як параметр, що задає локаль у функціях де це
необхідно, таких як NumberFormatter. Ця константа змушує
використовувати локаль за замовчуванням.

Ці константи описують вибір локалі для методу getLocale різних
класів.

**`Locale::ACTUAL_LOCALE`** (string)
Описує поточний локаль.

**`Locale::VALID_LOCALE`** (string)
Це найспецифічніша локаль, що підтримується ICU.

Ці константи описують, як розбираються або з чого складаються локалі. Вони
використовуються як ключі масиву аргументів для
[locale_compose()](locale.composelocale.md) і як повертаються
значення [locale_parse()](locale.parselocale.md) у вигляді ключів
асоціативного масиву, що повертається.

**`Locale::LANG_TAG`** (string)
Мітка для мови

**`Locale::EXTLANG_TAG`** (string)
Розширена мітка мови

**`Locale::SCRIPT_TAG`** (string)
Мітка зображення

**`Locale::REGION_TAG`** (string)
Мітка регіону

**`Locale::VARIANT_TAG`** (string)
Мітка варіанта

**`Locale::GRANDFATHERED_LANG_TAG`** (string)
Мітка мови у старому синтаксисі (grandfathered)

**`Locale::PRIVATE_TAG`** (string)
Приватна мітка

## Дивіться також

- [» RFC 4646 - мітки для ідентифікаторів
мов](http://www.faqs.org/rfcs/rfc4646)
- [» RFC 4647 - перевірка мовних
тегів](http://www.faqs.org/rfcs/rfc4647)
- [» Проект Unicode CLDR: Стандартний репозиторій даних
локалей](http://www.unicode.org/cldr/)
- [» Регістр мовних міток
IANA](http://www.iana.org/assignments/language-subtag-registry)
- [» Керівництво користувача ICU -
Локаль](https://unicode-org.github.io/icu/userguide/locale/)
- [» ICU api
локалі](http://www.icu-project.org/apiref/icu4c/uloc_8h.md#details)

## Зміст

- [Locale::acceptFromHttp](locale.acceptfromhttp.md) — Спробувати
визначити найкращу локаль на основі заголовку HTTP
"Accept-Language"
- [Locale::canonicalize](locale.canonicalize.md) — Канонізувати
рядок локалі
- [Locale::composeLocale](locale.composelocale.md) — Повертає
коректно відсортовані та розділені ідентифікатори локалі
- [Locale::filterMatches](locale.filtermatches.md) — Перевірити,
чи відповідає тег фільтра мови локалі
- [Locale::getAllVariants](locale.getallvariants.md) — Отримання
варіантів із переданої локалі
- [Locale::getDefault](locale.getdefault.md) — Отримання значення
локалі INTL за замовчуванням з опції 'default_locale'
- [Locale::getDisplayLanguage](locale.getdisplaylanguage.md) -
Повертає відповідним чином локалізоване ім'я мови для
заданої локалі
- [Locale::getDisplayName](locale.getdisplayname.md) — Повертає
відповідним чином локалізоване ім'я локалі
- [Locale::getDisplayRegion](locale.getdisplayregion.md) -
Повертає відповідним чином локалізовану назву регіону
для заданої локалі
- [Locale::getDisplayScript](locale.getdisplayscript.md) -
Повертає відповідним чином локалізовану назву алфавіту
для заданої локалі
- [Locale::getDisplayVariant](locale.getdisplayvariant.md) -
Повертає відповідним чином локалізовану назву варіанта
для заданої локалі
- [Locale::getKeywords](locale.getkeywords.md) — Отримати ключові
слова для локалі
- [Locale::getPrimaryLanguage](locale.getprimarylanguage.md) -
Отримати первинну мову для локалі
- [Locale::getRegion](locale.getregion.md) — Отримати регіон для
локалі
- [Locale::getScript](locale.getscript.md) — Отримати алфавіт для
локалі
- [Locale::lookup](locale.lookup.md) — Пошук мовних позначок
відповідних заданої локалі
- [Locale::parseLocale](locale.parselocale.md) — Отримати
асоціативний масив усіх підтегів локалі
- [Locale::setDefault](locale.setdefault.md) — Встановити локаль за
замовчуванням під час виконання
